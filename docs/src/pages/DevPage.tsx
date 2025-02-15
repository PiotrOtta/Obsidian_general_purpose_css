import { IconBackhoe } from '@tabler/icons-react';
import { Container, Text, Title } from '@mantine/core';
import { PageWrapper } from '@/components/Wrappers/PageWrapper';

export function DevPage() {
  return (
    <>
      <Title ta="center" c="navbar.9">
        Contribution page
      </Title>
      <Container mt={30} ta="center" className="DevPage-Container">
        <Text>This page is under development.</Text>
        <IconBackhoe size={200} />
      </Container>
      <Container mt={30} className="DevPage-Container">
        <Title order={5} c="dimmed" p={12} bg="paper.2" className="Home-Group-Title">
          New feature
        </Title>
        <PageWrapper>WIP</PageWrapper>
      </Container>
      <Container mt={30} className="DevPage-Container">
        <Title order={5} c="dimmed" p={12} bg="paper.2" className="Home-Group-Title">
          Bugs
        </Title>
        <PageWrapper>WIP</PageWrapper>
      </Container>
      <Container mt={30} className="DevPage-Container">
        <Title order={5} c="dimmed" p={12} bg="paper.2" className="Home-Group-Title">
          Ideas
        </Title>
        <PageWrapper>WIP</PageWrapper>
      </Container>
    </>
  );
}
