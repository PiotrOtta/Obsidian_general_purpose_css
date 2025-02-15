import GPCSSLogo from '@assets/General_purpose_css_logo.png';
import { Welcome } from '@components/Welcome/Welcome';
import { IconBackhoe } from '@tabler/icons-react';
import { Container, Image, Text } from '@mantine/core';

export function AboutPage() {
  return (
    <Container
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      className="Home-Group-Category"
    >
      <Image
        p={6}
        w={160}
        src={GPCSSLogo}
        alt="General Purpose CSS Classes logo"
        title="General Purpose CSS Classes logo"
      />
      <Welcome onlyTitle />
      <Container mt={30} ta="center" className="AboutPage-Container">
        <Text c="dimmed">This page is under development.</Text>
        <Text c="dimmed">What was used: React, Mantine, tabler - react-icons</Text>
        <IconBackhoe size={200} />
      </Container>
    </Container>
  );
}
