import { SyntheticEvent, useEffect, useState } from 'react';
import { Container, SegmentedControl } from '@mantine/core';

export function SegmentControl({
  data,
  setClassCode,
  signalClear,
}: {
  data?: { [key: string]: string };
  setClassCode?: (val: string | number) => void;
  signalClear?: boolean;
}) {
  const [selectedValue, setSelectedValue] = useState('');

  function handleSelectValue(event: SyntheticEvent) {
    const value = (event.target as { value?: string })?.value || '';
    setClassCode?.(value);
    setSelectedValue(value);
  }

  useEffect(() => {
    return () => {
      setSelectedValue('');
    };
  }, []);
  useEffect(() => {
    if (signalClear) {
      setClassCode?.('');
      setSelectedValue('');
    }
  }, [signalClear]);

  if (!data || !Object.keys(data).length) return null;
  return (
    <Container bg="paper.2" pl={4} pr={4} pt={6} pb={6} style={{ borderRadius: '0.4rem' }}>
      <SegmentedControl
        className="Segment-Control"
        size="sm"
        defaultValue=""
        color={selectedValue === '' ? 'gray' : 'violet'}
        value={selectedValue}
        onClick={handleSelectValue}
        data={[
          {
            label: 'None',
            value: '',
          },
          ...Object.entries(data).map((el) => ({
            label: el[1],
            value: el[0],
          })),
        ]}
      />
    </Container>
  );
}
