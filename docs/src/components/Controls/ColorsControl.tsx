import { useEffect, useState } from 'react';
import { Button, Grid, GridCol } from '@mantine/core';

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
  if (!data || !Object.keys(data).length) return null;
  const [selectedColor, setSelectedColor] = useState('');

  function handleSelectColor(value: string) {
    if (value === selectedColor) {
      setClassCode?.('');
      return setSelectedColor('');
    }
    setClassCode?.(value);
    setSelectedColor(value);
  }

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
          <GridCol key={`colors-btn-${className}`} span="content" p={5}>
            <Button
              disabled={disabled}
              className={`Colors-Control-Button ${selectedColor === className ? 'active' : ''}`}
              title={className}
              variant="filled"
              color={colorValue}
              onClick={() => handleSelectColor(className)}
            />
          </GridCol>
        ))}
      </Grid>
    </div>
  );
}
