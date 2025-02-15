import { IconChevronRight, IconError404, IconFileTypeDoc } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button, Text, Title } from '@mantine/core';
import { PageWrapper } from '../components/Wrappers/PageWrapper';

export function ErrorDocs() {
  const navigate = useNavigate();
  function handleBackRouter() {
    navigate(-1);
  }

  return (
    <>
      <Title c="navbar.9" ta="center">
        or it doesn't exist at all!
      </Title>
      <PageWrapper
        p={20}
        mt={20}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Text ta="center" size="lg" maw={580} mx="auto">
          <Button variant="default" p={10} onClick={handleBackRouter.bind(null)}>
            Go back
          </Button>{' '}
          or click any of the navigation links on the left/bottom panel.
        </Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconError404 size={200} title="ɘɿɘʜ ɘd ƚ'ᴎb|uoʜꙅ uoY" />
          <IconChevronRight size={100} title="and docs are empty?" />
          <IconFileTypeDoc size={150} title="docs are empty :)" />
        </div>
      </PageWrapper>
    </>
  );
}
