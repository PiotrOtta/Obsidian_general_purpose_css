import { useEffect, useState } from 'react';
import { directionsArray, TDirections } from '@utils/interfaces';
import { Grid, GridCol } from '@mantine/core';
import { CompassDirectionButton } from './CompassDirectionButton';

export function CompassControl({
  disabledDirections,
  setClassCode,
  disabled,
  signalClear,
}: {
  disabledDirections?: Array<string>;
  setClassCode?: (val: string | number) => void;
  disabled?: boolean;
  signalClear?: boolean;
}) {
  const [activeDirection, setActiveDirection] = useState('');

  function handleSetDirection(value: TDirections) {
    if (activeDirection === value) {
      setClassCode?.('');
      return setActiveDirection('');
    }
    setClassCode?.(value);
    setActiveDirection(value);
  }

  useEffect(() => {
    return () => {
      setActiveDirection('');
    };
  }, []);
  useEffect(() => {
    if (signalClear) {
      setClassCode?.('');
      setActiveDirection('');
    }
  }, [signalClear]);

  return (
    <div className="Compass-Container" data-tag="Compass">
      <Grid
        className="Compass-Container-Grid"
        style={{ width: '184px', height: '184px', borderRadius: '0.4rem' }}
        justify="center"
        align="center"
        bg="paper.2"
        p={10}
      >
        {directionsArray.map((direction, key) => (
          <GridCol key={`compass-btn-${key}`} span={4}>
            <CompassDirectionButton
              direction={direction}
              active={direction === activeDirection}
              disabled={
                disabled ??
                disabledDirections?.some((el) => el.toLowerCase() === direction.toLowerCase())
              }
              setDirection={handleSetDirection}
            />
          </GridCol>
        ))}
      </Grid>
    </div>
  );
}
