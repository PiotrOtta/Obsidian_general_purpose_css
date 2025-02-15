import { IconError404 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button, Text, Title } from '@mantine/core';
import { PageWrapper } from '../components/Wrappers/PageWrapper';

export function ErrorPage() {
  const navigate = useNavigate();
  function handleBackRouter() {
    navigate(-1);
  }

  return (
    <>
      <Title c="navbar.9" ta="center">
        This page does not exist!
      </Title>
      <PageWrapper
        p={20}
        mt={20}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Text ta="center" size="lg" maw={580} mx="auto">
          You're trying to open a non-existent page!
        </Text>
        <Text ta="center" size="lg" maw={580} mx="auto">
          <Button variant="default" p={10} onClick={handleBackRouter.bind(null)}>
            Go back
          </Button>{' '}
          or click any of the navigation links on the left panel.
        </Text>
        <IconError404 size={200} title="ɘɿɘʜ ɘd ƚ'ᴎb|uoʜꙅ uoY" />
      </PageWrapper>
    </>
  );
}
