import { useEffect, useState } from 'react';
import { TRange } from '@utils/interfaces';
import { Container, Slider, Text } from '@mantine/core';

export function RangeControl({
  range,
  description,
  disabled,
  setClassCode,
  signalClear,
}: {
  range?: TRange;
  description?: string;
  disabled?: boolean;
  setClassCode?: (val: string | number) => void;
  signalClear?: boolean;
}) {
  if (!range) return null;
  const step = Math.floor(100 / range.length);

  // const [value, setValue] = useDebouncedState(0, 10);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const label = value === 0 ? '' : marks.find((el) => el.value === value)?.label;
    setClassCode?.(label || '');
  }, [value]);

  const marks = [
    { value: 0, label: 'Off' },
    ...range.map((el, key) => ({
      value: step * (key + 1),
      label: el,
    })),
  ];

  useEffect(() => {
    if (disabled || signalClear) {
      setClassCode?.('');
      setValue(0);
    }
  }, [disabled, signalClear]);

  useEffect(() => {
    return () => {
      setValue(0);
    };
  }, []);

  return (
    <Container
      bg="paper.2"
      pl={20}
      pr={20}
      pt={14}
      pb={1}
      style={{ borderRadius: '0.4rem' }}
      data-tag="Range"
    >
      <Slider
        disabled={disabled}
        radius="sm"
        mb={30}
        label={null}
        step={step}
        marks={marks}
        value={value}
        max={step * (marks.length - 1)}
        onChange={setValue}
      />
      {description && <Text c="dimmed">{description}</Text>}
    </Container>
  );
}
