import { Anchor, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome({ onlyTitle = false }: { onlyTitle?: boolean }) {
  return (
    <>
      <Title
        c="navbar.9"
        display={!onlyTitle ? 'block' : 'none'}
        className={`${classes.title} ${classes.subTitle}`}
        ta="center"
      >
        Welcome to
      </Title>
      <Title className={`${classes.title}`} ta="center" c="violet">
        General Purpouse CSS
      </Title>
      <Title
        c="navbar.9"
        display={!onlyTitle ? 'block' : 'none'}
        className={`${classes.title} ${classes.subTitle}`}
        ta="center"
        mt={12}
      >
        for{' '}
        <Anchor
          style={{ borderRadius: '4px', paddingLeft: '14px' }}
          inherit
          href="https://obsidian.md/"
          title="Obsidian Page"
        >
          Obsidian
        </Anchor>
      </Title>
    </>
  );
}
