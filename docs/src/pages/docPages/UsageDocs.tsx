import { Container, Title } from '@mantine/core';
import { PageWrapper } from '@/components/Wrappers/PageWrapper';

export function UsageDocs() {
  return (
    <>
      <Container mt={30} className="DevPage-Container">
        <Title order={5} c="dimmed" p={12} bg="paper.2" className="Home-Group-Title">
          How to use
        </Title>
        <PageWrapper>WIP</PageWrapper>
      </Container>
    </>
  );
}
