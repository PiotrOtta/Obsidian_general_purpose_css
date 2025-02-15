import GPCSSLogo from '@assets/General_purpose_css_logo.png';
import { Anchor, Group, Image, Title } from '@mantine/core';

export default function TitleBar() {
  return (
    <Group style={{ height: '100%' }}>
      <Anchor
        style={{ height: '100%' }}
        href="https://github.com/PiotrOtta/Obsidian_general_purpose_css"
        title="Link to Obsidian_general_purpose_css repo"
      >
        <Image
          pt={10}
          pb={10}
          style={{ height: '100%' }}
          src={GPCSSLogo}
          alt="General Purpose CSS Classes logo - link to github repo"
          title="General Purpose CSS Classes logo - link to github repo"
        />
      </Anchor>
      <Title c="violet" order={4}>
        General Purpose CSS
      </Title>
      <Title order={5} pl={10} visibleFrom="sm">
        Documentation
      </Title>
    </Group>
  );
}
