import { useEffect } from 'react';
import { TRange } from '@utils/interfaces';
import { Container, Slider, Text } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';

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
  const [value, setValue] = useDebouncedState<number>(0, 10);

  useEffect(() => {
    const label = value === 0 ? '' : marks.find((el) => el.value === value)?.label;
    setClassCode?.(label || '');
  }, [value]);
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

  if (!range) return null;
  const step = Math.floor(100 / range.length);

  const marks = [
    { value: 0, label: 'Off' },
    ...range.map((el, key) => ({
      value: step * (key + 1),
      label: el,
    })),
  ];

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
