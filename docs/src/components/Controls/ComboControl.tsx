import { useEffect, useState } from 'react';
import { IconLock, IconX } from '@tabler/icons-react';
import {
  ActionIcon,
  CheckIcon,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  ScrollArea,
  useCombobox,
} from '@mantine/core';

export function ComboControl({
  data,
  setClassCode,
  disabled,
  maxValuesCount,
  signalClear,
  customPlaceholder,
}: {
  data?: { [key: string]: string };
  setClassCode?: (val: string | number) => void;
  disabled?: boolean;
  maxValuesCount?: number;
  signalClear?: boolean;
  customPlaceholder?: string;
}) {
  const [selectedValues, setSelectedValues] = useState<Array<string>>([]);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const handleValueSelect = (val: string) =>
    setSelectedValues((current) => {
      const _newValues = current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val];
      setClassCode?.(_newValues?.join(' '));
      return _newValues;
    });

  const handleValueRemove = (val: string) =>
    setSelectedValues((current) => {
      const _newValues = current.filter((v) => v !== val);
      setClassCode?.(_newValues?.join(' '));
      return _newValues;
    });

  const values = selectedValues.map((el) => {
    if (!data) return null;
    const title = Object.entries(data).find((entry) => entry[0] === el)?.[1];
    return (
      <Pill key={title} withRemoveButton onRemove={() => handleValueRemove(el)}>
        {title}
      </Pill>
    );
  });

  const options =
    data &&
    Object.entries(data).map((el) => {
      const className = el[0];
      const title = el[1];
      return (
        <Combobox.Option
          value={className}
          key={className}
          active={selectedValues.includes(className)}
          disabled={
            (maxValuesCount &&
              selectedValues.length >= maxValuesCount &&
              !selectedValues.includes(className)) ||
            false
          }
        >
          <Group gap="sm">
            {selectedValues.includes(className) ? <CheckIcon size={12} /> : null}
            <span>{title}</span>
          </Group>
        </Combobox.Option>
      );
    });

  function handleClear() {
    setClassCode?.('');
    setSelectedValues([]);
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

  if (!data || !Object.keys(data).length) return null;
  return (
    <div className="ComboControl-Group" data-tag="Combo">
      <Combobox
        disabled={disabled}
        store={combobox}
        onOptionSubmit={handleValueSelect}
        withinPortal={false}
        transitionProps={{ duration: 200, transition: 'pop-top-right' }}
      >
        <Combobox.DropdownTarget>
          <PillsInput
            pointer
            onClick={() => combobox.toggleDropdown()}
            rightSection={
              selectedValues?.length && (
                <ActionIcon onClick={handleClear.bind(null)} variant="default" size="xs">
                  <IconX />
                </ActionIcon>
              )
            }
          >
            <Pill.Group gap={2}>
              {values.length > 0 ? (
                values
              ) : (
                <Input.Placeholder>
                  {disabled ? (
                    <IconLock color="var(--mantine-color-dimmed)" title="Disabled" size={20} />
                  ) : (
                    customPlaceholder ||
                    (maxValuesCount === 1 && 'Pick one class') ||
                    'Pick one or more class'
                  )}
                </Input.Placeholder>
              )}

              <Combobox.EventsTarget withKeyboardNavigation>
                <PillsInput.Field
                  type="hidden"
                  onBlur={() => combobox.closeDropdown()}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace') {
                      event.preventDefault();
                      handleValueRemove(selectedValues[selectedValues.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          {maxValuesCount && (
            <Combobox.Header c="dimmed">
              Maximum amount of values to select: {maxValuesCount}
            </Combobox.Header>
          )}
          <Combobox.Options>
            <ScrollArea.Autosize mah={200} type="hover">
              {options?.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
