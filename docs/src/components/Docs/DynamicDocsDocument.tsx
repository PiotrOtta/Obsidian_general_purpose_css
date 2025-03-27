import { useEffect, useState } from 'react';
import CopyCode from '@components/CopyCode';
import { useCode } from '@components/Wrappers/CodeProvider';
import { IconExclamationCircle } from '@tabler/icons-react';
import { IDocsJson } from '@utils/interfaces';
import { useOutletContext } from 'react-router-dom';
import { Container, Loader } from '@mantine/core';
import { useMounted } from '@mantine/hooks';
import { ICustomDocsRoute } from '@/Router';
import DocsSection from './Section/DocsSection';

export default function DynamicDocsDocument() {
  // This mounted is necessary when navigating from docs without dynamicDocsDocument as its element.
  // Otherwise it will try to access previous route.pathName where none are present
  const mounted = useMounted();
  const { route } = useOutletContext<{ route?: ICustomDocsRoute }>();
  const [docsJson, setDocsJson] = useState<IDocsJson | undefined>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { setCode } = useCode();

  function resetState() {
    setCode({});
    setError(false);
    setLoading(true);
    setDocsJson(undefined);
  }

  useEffect(() => {
    if (!mounted) return;
    resetState();

    if (!route || !route.pathName) {
      setError(true);
      return;
    }

    (async () => {
      try {
        const module = await import(`../../assets/docs/${route.pathName?.toLowerCase()}.json`);
        if (!module || !module?.default) {
          throw new Error(`Cant import module with name: ${route.pathName}`);
        }
        setDocsJson(module.default);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      resetState();
    };
  }, [route]);

  function renderDocs() {
    return (
      <>
        {docsJson?.sections?.map((data, key) => {
          return <DocsSection data={data} k={key} tagType={docsJson.tag} key={key} />;
        })}
      </>
    );
  }

  return (
    <>
      <Container className="Dynamic-Docs-Container">
        <CopyCode />
        <div
          style={
            loading || error ? { display: 'flex', justifyContent: 'center', minHeight: '100%' } : {}
          }
        >
          {loading ? (
            <Loader color="violet" size="xl" type="bars" />
          ) : error ? (
            <IconExclamationCircle
              color="red"
              width={200}
              height={200}
              title="Encountered error while fetching the docs module for this path."
            />
          ) : (
            renderDocs()
          )}
        </div>
      </Container>
    </>
  );
}
