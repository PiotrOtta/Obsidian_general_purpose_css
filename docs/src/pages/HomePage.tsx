import { Welcome } from '@components/Welcome/Welcome';
import { PageWrapper } from '@components/Wrappers/PageWrapper';
import { assingLinksToDocs } from '@utils/utils';
import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import { TileFactory } from '@/components/Wrappers/Tile';
import { docsRoutes, ICustomDocsRoute } from '@/Router';

export function HomePage() {
  function renderTiles(links: Array<ICustomDocsRoute>) {
    const DLinksToDocs = assingLinksToDocs(links, TileFactory);

    return Object.entries(DLinksToDocs).map((entry, key) => {
      return (
        <Container mt={30} key={`${key}-Home-Group-Category`} className="Home-Group-Category">
          <Title order={5} c="dimmed" p={12} bg="paper.2" className="Home-Group-Title">
            {entry[0]}
          </Title>
          <PageWrapper>
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: entry[0] === 'Guides' ? 2 : 3 }}
              spacing={{ base: 10, sm: 'xl' }}
              verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
              {...entry[1]}
            </SimpleGrid>
          </PageWrapper>
        </Container>
      );
    });
  }

  return (
    <>
      <Welcome />
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" mb="xl">
        Here you can find overviews of how CSS classes can be utilized to enhance the visual
        appearance and functionality of your notes. Whether you're looking to tweak the look of your
        images, style your headings or fully customize your notes, you'll find everything you need
        here.
      </Text>
      {renderTiles(docsRoutes)}
    </>
  );
}
