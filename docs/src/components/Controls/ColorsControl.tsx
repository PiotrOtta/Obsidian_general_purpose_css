import { memo, useEffect, useState } from 'react';
import { Button, Grid, GridCol } from '@mantine/core';

type TColorsColGroup = {
  className: string;
  disabled?: boolean;
  selectedColor: string;
  colorValue: string;
  handleSelectColor: (value: string) => void;
};
const ColorsColGroup = memo(
  (props: TColorsColGroup) => {
    return (
      <GridCol span="content" p={5}>
        <Button
          disabled={props.disabled}
          className={`Colors-Control-Button ${props.selectedColor === props.className ? 'active' : ''}`}
          title={props.className}
          variant="filled"
          color={props.colorValue}
          onClick={() => props.handleSelectColor(props.className)}
        />
      </GridCol>
    );
  }
  // () => true // propsAreEqual
);

export function ColorsControl({
  data,
  setClassCode,
  disabled,
  signalClear,
}: {
  data?: { [key: string]: string };
  setClassCode?: (val: string | number) => void;
  disabled?: boolean;
  signalClear?: boolean;
}) {
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    return () => {
      setSelectedColor('');
    };
  }, []);
  useEffect(() => {
    if (signalClear) {
      setClassCode?.('');
      setSelectedColor('');
    }
  }, [signalClear]);

  function handleSelectColor(value: string) {
    if (value === selectedColor) {
      setClassCode?.('');
      return setSelectedColor('');
    }
    setClassCode?.(value);
    setSelectedColor(value);
  }

  if (!data || !Object.keys(data).length) return null;
  return (
    <div
      className="Colors-Control"
      data-tag="Colors"
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Grid
        className="Colors-Control-Grid"
        style={{ maxWidth: '440px', borderRadius: '0.4rem' }}
        justify="center"
        bg="paper.2"
        p={10}
      >
        {Object.entries(data).map(([className, colorValue]) => (
          <ColorsColGroup
            key={`colors-btn-${className}`}
            className={className}
            disabled={disabled}
            selectedColor={selectedColor}
            colorValue={colorValue}
            handleSelectColor={handleSelectColor}
          />
        ))}
      </Grid>
    </div>
  );
}
