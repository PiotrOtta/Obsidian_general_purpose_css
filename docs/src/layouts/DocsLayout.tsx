import '@mantine/core/styles.css';

import { useState } from 'react';
import BottomNavigation from '@components/Docs/BottomNavigation';
import { Outlet } from 'react-router-dom';
import { Container, Title } from '@mantine/core';
import { ICustomDocsRoute } from '../Router';

/**
 * Default docs layout. It can be used both as a wrapping and dynamic layout.
 * @param {object} props Component props
 */
export default function DocsLayout() {
  const [currRoute, setCurrRoute] = useState<ICustomDocsRoute | undefined>();

  function renderDocTitleBlock() {
    return (
      <Container className="Docs-Block-Title">
        <Title c="navbar.9" ta="center" pt={0}>
          {currRoute?.title ||
            currRoute?.pathName ||
            'No title provided for this documentation page'}
        </Title>
      </Container>
    );
  }

  return (
    <div
      style={{
        minHeight: 'calc(100dvh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {renderDocTitleBlock()}
        <Outlet
          context={{
            route: currRoute,
          }}
        />
      </div>
      <BottomNavigation currRouteInject={setCurrRoute} />
    </div>
  );
}
