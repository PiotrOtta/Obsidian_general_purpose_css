import { useEffect, useState } from 'react';
import { useCode } from '@components/Wrappers/CodeProvider';
import { IconCheck, IconCopy, IconPin, IconPinnedOff } from '@tabler/icons-react';
import { ActionIcon, Button, Code, Container } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

export default function CopyCode() {
  const { code: classCodes } = useCode();
  const [code, setCode] = useState('');
  const [keepOnTop, setKeepOnTop] = useState(true);
  const clipboard = useClipboard({ timeout: 2100 });

  function handleCopy() {
    !clipboard.copied && clipboard.copy(code);
  }

  useEffect(() => {
    if (!classCodes) return;
    const allClasses = Object.values(classCodes)
      ?.map((el) => el)
      ?.filter((el) => el);
    setCode(allClasses.join(' '));

    return () => {
      setCode('');
    };
  }, [classCodes]);

  return (
    <Container
      bg="paper.2"
      pt={10}
      pb={0}
      pl={0}
      pr={0}
      mb={10}
      mt={0}
      className={`CopyCode-Container ${keepOnTop ? 'Pinned' : ''}`}
      style={keepOnTop ? {} : { position: 'inherit', top: 0 }}
    >
      <Code className="CopyCode-Container-Code" bg="paper.5" block c={code ? 'yellow' : ''}>
        {code || '[No classes selected]'}
        {code && (
          <div className="CopyCode-Action-Container">
            <ActionIcon
              p={4}
              mr={6}
              ml={10}
              size="lg"
              variant="default"
              className={`CopyCode-Action CopyCode-Action-Copy ${clipboard.copied ? 'active' : 'inactive'}`}
              onClick={handleCopy}
            >
              {clipboard.copied ? <IconCheck /> : <IconCopy />}
            </ActionIcon>
            {/* <ActionIcon
              p={4}
              size="lg"
              variant="default"
              className="CopyCode-Action CopyCode-Action-Clear"
              onClick={() => setCode('')}
            >
              <IconX />
            </ActionIcon> */}
          </div>
        )}
      </Code>
      <Button
        pl={4}
        pr={4}
        pt={4}
        pb={4}
        mt={6}
        size="xs"
        variant="light"
        className="CopyCode-Button CopyCode-Button-StickToTop"
        onClick={() => setKeepOnTop(!keepOnTop)}
      >
        {keepOnTop ? <IconPin title="Click to unpin" /> : <IconPinnedOff title="Click to pin" />}
      </Button>
    </Container>
  );
}
