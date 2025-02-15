import '@mantine/core/styles.css';

import { Dispatch, JSX, SetStateAction, useEffect, useState } from 'react';
import { assingLinksToDocs, sanitizeRoutes } from '@utils/utils';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Accordion,
  Anchor,
  AppShell,
  Burger,
  Group,
  NavLink,
  ScrollArea,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TitleBar from '@/components/TitleBar';
import ToggleThemeBtn from '@/components/ToggleThemeBtn';
import { docsRoutes, ICustomDocsRoute, ICustomRoute, routes } from '@/Router';

export default function DefaultLayout() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();

  const accordionSetStateCallback: { [docsName: string]: Dispatch<SetStateAction<string | null>> } =
    {};
  const [currDocsName, setCurrDocsName] = useState<string | null>(null);

  useEffect(() => {
    // Open navlink accordion if is closed and user changed location to one of the items inside
    let foundRoute: ICustomRoute | undefined = docsRoutes.find(
      (el) => el.path === location.pathname
    );
    setCurrDocsName(foundRoute?.docsName || null);

    if (!foundRoute && routes[0].children) {
      foundRoute = routes[0].children.find((el) => el.path === location.pathname);
    }
    const _title = foundRoute?.title || foundRoute?.pathName;
    if (_title) document.title = _title === 'Home' ? 'General Purpouse CSS Documentation' : _title;
  }, [location]);

  useEffect(() => {
    // This can't be in useEffect above this one, because currDocsName wont' keep up with changes.
    if (currDocsName) {
      accordionSetStateCallback[currDocsName]?.(currDocsName);
    }
  }, [currDocsName]);

  function NavLinkFactory(route: ICustomRoute, key: number, mb = 8): JSX.Element {
    return (
      <NavLink
        component={Link}
        active={route.path === location.pathname}
        to={route.path || ''}
        key={`${key}-${route.pathName || route.path}`}
        label={route.title || route.pathName || route.path}
        description={route.description}
        leftSection={route.icon}
        variant="light"
        autoContrast
        m={4}
        mb={mb}
        ml={0}
        mr={0}
        style={{ borderRadius: '0.2rem', width: 'auto', outlineOffset: '0' }}
        childrenOffset={36}
      >
        {route?.children && renderNavbar(route.children)}
      </NavLink>
    );
  }

  function handleWrapLinks(links: Array<ICustomDocsRoute>): Array<JSX.Element> {
    const DLinksToDocs = assingLinksToDocs(links, NavLinkFactory);

    return Object.entries(DLinksToDocs).map((entry, key) => {
      const [value, setValue] = useState<string | null>(entry[0]);
      accordionSetStateCallback[entry[0]] = setValue;

      return (
        <Accordion
          defaultValue={value}
          value={value}
          onChange={setValue}
          key={key}
          // m={10}
          mt={10}
          mb={20}
          p={0}
          className="Navlink-Group-Category"
        >
          <Accordion.Item key={entry[0]} value={entry[0]}>
            <Accordion.Control
              p={0}
              pl={14}
              pr={14}
              bg="paper.2"
              className={`Navlink-Group-Title ${!value && currDocsName === entry[0] ? 'active' : ''}`}
            >
              {entry[0]}
            </Accordion.Control>
            <Accordion.Panel className="Navlink-Group-Content">{...entry[1]}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      );
    });
  }

  function renderNavbar(routesArray: Array<ICustomRoute> = []) {
    const sanitizedRoutes = sanitizeRoutes(routesArray);

    const linksToWrap: Array<ICustomDocsRoute> = [];

    return [
      ...sanitizedRoutes.map((route, key) => {
        if (route.isLayout) return null;
        if (route.hide) return null; //eslint defaults to always use curly braces. I don't support this, so I turned it off
        if (route.docsName) {
          linksToWrap.push({ ...route, docsName: route.docsName });
          return null;
        }
        return NavLinkFactory(route, key);
      }),
      linksToWrap.length && handleWrapLinks(linksToWrap),
    ];
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      footer={{
        height: 26,
      }}
      layout="default"
      padding="md"
      withBorder={false}
    >
      <AppShell.Header bg="navbar.2" zIndex={1200}>
        <Group h="100%" px="md" justify="space-between">
          <Burger
            title={`${opened ? 'Close' : 'Open'} navigation bar`}
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <TitleBar />
          <ToggleThemeBtn />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar bg="navbar.1" pt={0} pb={0} pr={14} pl={14}>
        <AppShell.Section grow my="md" component={ScrollArea}>
          {renderNavbar(routes)}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Text ta="right" c="dimmed" pr={20}>
          Made by{' '}
          <Anchor underline="never" href="https://github.com/PiotrOtta" target="_blank">
            Piotr Otta
          </Anchor>
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
