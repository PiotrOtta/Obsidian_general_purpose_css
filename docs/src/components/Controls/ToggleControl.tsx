import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';

export function ToggleControl({
  data,
  setClassCode,
  disabled,
  vertical,
  singleValueOnly,
  evenGrid,
  signalClear,
}: {
  data?: { [key: string]: string };
  setClassCode?: (val: string | number) => void;
  disabled?: boolean;
  vertical?: boolean;
  singleValueOnly?: boolean;
  evenGrid?: boolean;
  signalClear?: boolean;
}) {
  if (!data || !Object.keys(data).length) return null;

  const [selectedValues, setSelectedValues] = useState<Array<string>>([]);

  function handleSelectValue(value: string) {
    if (singleValueOnly) {
      let tempValue = value;
      if (value === selectedValues?.[0]) tempValue = '';
      setClassCode?.(tempValue);
      return setSelectedValues([tempValue]);
    }
    const alreadySelected = selectedValues.findIndex((cN) => cN === value);
    let tempValues = [...selectedValues, value];
    if (~alreadySelected) {
      tempValues = selectedValues.filter((cN) => cN !== selectedValues[alreadySelected]);
    }
    setClassCode?.(tempValues?.join(' '));
    setSelectedValues(tempValues);
  }

  useEffect(() => {
    return () => {
      setSelectedValues([]);
    };
  }, []);
  useEffect(() => {
    if (signalClear) {
      setClassCode?.('');
      setSelectedValues([]);
    }
  }, [signalClear]);

  return (
    <Button.Group
      className={`ToggleControl-Group${vertical ? ' vertical' : ''}${evenGrid ? ' evenGrid' : ''}`}
      data-tag="Toggle"
    >
      {Object.entries(data).map((el, key) => (
        <Button
          disabled={disabled}
          key={`Toggle-Control-${key}`}
          title={el[1]}
          variant={selectedValues.some((cN) => cN === el[0]) ? 'filled' : 'default'}
          onClick={() => handleSelectValue(el[0])}
        >
          {el[1]}
        </Button>
      ))}
    </Button.Group>
  );
}
