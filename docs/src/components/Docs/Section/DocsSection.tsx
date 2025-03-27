import React, { FunctionComponent, JSX, useEffect, useState } from 'react';
import { PageWrapper } from '@components/Wrappers/PageWrapper';
import { IconLock } from '@tabler/icons-react';
import { IDocsSection, TControlTypes, TTagTypes } from '@utils/interfaces';
import { useOutletContext } from 'react-router-dom';
import { ActionIcon, Text, Title, Tooltip } from '@mantine/core';
import { ColorsControl } from '@/components/Controls/ColorsControl';
import { ComboControl } from '@/components/Controls/ComboControl';
import { CompassControl } from '@/components/Controls/CompassControl';
import { RangeControl } from '@/components/Controls/RangeControl';
import { SegmentControl } from '@/components/Controls/SegmentControl';
import { ToggleControl } from '@/components/Controls/ToggleControl';
import { ICustomDocsRoute } from '@/Router';
import { useCode } from '../../Wrappers/CodeProvider';
import DocsSpecificTags from './DocsSpecificTags';

const controlComponents = {
  Range: RangeControl,
  Colors: ColorsControl,
  Compass: CompassControl,
  Toggle: ToggleControl,
  Segment: SegmentControl,
  Combo: ComboControl,
} as const;

interface DocsSectionProps {
  data: IDocsSection;
  k: number | string;
  tagType?: TTagTypes | undefined;
}
let _localSavedObj: { [controlName: string]: string | Array<string> } = {};

const DocsSection: FunctionComponent<DocsSectionProps> = ({ data, k, tagType }) => {
  const { setCode } = useCode();
  const { route } = useOutletContext<{ route?: ICustomDocsRoute }>();
  const [dictionaryClasses, setDictionaryClasses] = useState<{
    [controlName: string]: string;
  }>({});

  function mapPreviewClasses() {
    const arrayOfClasses = Object.entries(dictionaryClasses || {}).map(([_, value]) => {
      return value;
    });
    return arrayOfClasses.filter((el) => el).join(' ');
  }

  function handleControlValue(
    val: string | number,
    subSectionData: IDocsSection,
    controlName: string,
    baseClass?: string
  ) {
    const subSectionName = subSectionData.name;
    // 1. handle val
    let _tempVal = `${val}`;
    if (_tempVal === '-') _tempVal = '';
    _localSavedObj[`${subSectionName}-${controlName}`] = _tempVal;

    const parseBaseClass = (v: string, bsC: string, cName = controlName, arrayKey?: number) => {
      // Check if baseClass eg. image-size-[Toggle] has blocks like [Toggle], [Colors] etc.
      const regexBlocks = /\[(.*?)\]/g;
      const bsCHasBlocks = bsC.split(regexBlocks).filter((el) => el);
      if (bsCHasBlocks.length === 1) {
        return `${bsCHasBlocks[0]}-${v}`;
      }

      // If has more than one block, handle complex parsing
      const regex = '-';
      const _allPartsOfCodeToFill = bsC.split(regex).filter((el) => el);
      _allPartsOfCodeToFill.forEach((el, key) => {
        const _getComponentSavedObj = (name: string) => {
          return arrayKey && _localSavedObj?.[name]?.length
            ? _localSavedObj?.[name]?.[arrayKey]
            : (_localSavedObj?.[name] as string);
        };

        const _getComponentFirstValue = (
          controlName: keyof typeof controlComponents = 'Range',
          defaultValue = ''
        ): string => {
          const val = (() => {
            if (controlName === 'Range') return subSectionData?.range?.[0];

            const _tempControls = subSectionData.controls;
            if (_tempControls && _tempControls?.length) {
              const foundControl = _tempControls.find((el) => el.name === controlName);
              if (!foundControl) return;
              if ('default' in foundControl) {
                return foundControl.default;
              }
              if ('data' in foundControl) {
                return Object.keys(foundControl.data)?.[0];
              }
            }
          })();

          return val && val !== '-' ? val : defaultValue;
        };

        switch (true) {
          case el === `[${cName}]`:
            _allPartsOfCodeToFill[key] = v;
            break;
          case el === '[Range]':
            _allPartsOfCodeToFill[key] =
              _getComponentSavedObj(`${subSectionName}-Range`) ||
              _getComponentFirstValue('Range', 'xs');
            break;
          case el === '[Compass]':
            _allPartsOfCodeToFill[key] =
              _getComponentSavedObj(`${subSectionName}-Compass`) ||
              _getComponentFirstValue('Compass', 'center');
            break;
          case el === '[Colors]':
            _allPartsOfCodeToFill[key] =
              _getComponentSavedObj(`${subSectionName}-Colors`) ||
              _getComponentFirstValue('Colors', 'red');
            break;
          case el === '[Toggle]':
            _allPartsOfCodeToFill[key] =
              _getComponentSavedObj(`${subSectionName}-Toggle`) ||
              _getComponentFirstValue('Toggle');
            break;
          case el === '[Combo]':
            _allPartsOfCodeToFill[key] =
              _getComponentSavedObj(`${subSectionName}-Combo`) || _getComponentFirstValue('Combo');
            break;
          default:
            break;
        }
      });

      return `${_allPartsOfCodeToFill.filter((el) => el).join('-')}`;
    };

    // 2 Multiple vals from Toggle and handle multiple controls
    // for example: singleValueOnly: true and one range -> see blockquote.json
    // or: controls: [{...}, {...}] -> see blockquote.json -> Isolate border section
    let handleRangeOrManyControls = false;
    let arrVal = `${val}`.split(' ');
    let savedControlerData = _localSavedObj?.[`${subSectionName}-Toggle`];
    let savedControlerName = 'Toggle';
    if (!savedControlerData) {
      savedControlerData = _localSavedObj?.[`${subSectionName}-Combo`];
      savedControlerName = 'Combo';
    }
    if (
      subSectionData?.controls?.length &&
      subSectionData.controls.some((el) => el.name === controlName) &&
      savedControlerData?.constructor.name === 'Array'
    ) {
      handleRangeOrManyControls = true;
      _localSavedObj[`${subSectionName}-${controlName}`] = `${val}`;
      arrVal = savedControlerData as Array<string>;
    } else if (controlName === 'Range' && savedControlerData?.constructor.name === 'Array') {
      handleRangeOrManyControls = true;
      _localSavedObj[`${subSectionName}-Range`] = `${val}`;
      arrVal = savedControlerData as Array<string>;
    }

    if (arrVal.length > 1 && baseClass) {
      if (handleRangeOrManyControls) {
        if (val) {
          _tempVal = arrVal
            .map?.((v) => parseBaseClass(v === '-' ? '' : v, baseClass, savedControlerName))
            .join(' ');
        }
      } else {
        _localSavedObj[`${subSectionName}-${controlName}`] = arrVal;
        _tempVal = arrVal.map?.((v) => parseBaseClass(v === '-' ? '' : v, baseClass)).join(' ');
      }
    } else if (baseClass && (data?.keepValuesAfterClear || val)) {
      _tempVal = parseBaseClass(_tempVal, baseClass);
    }

    const _dictCopy = { ...dictionaryClasses };
    _dictCopy[subSectionName] = _tempVal;
    setDictionaryClasses(_dictCopy);
  }

  useEffect(() => {
    setCode({ [data.name]: mapPreviewClasses() });
  }, [dictionaryClasses]);

  useEffect(() => {
    setDictionaryClasses({});
    _localSavedObj = {};
  }, [route]);

  function renderSubSection(data: IDocsSection, key: number | string) {
    const isDisabled = data?.disableOnControl && dictionaryClasses[data?.disableOnControl];
    const disabledToolTip = `Control "${data?.disableOnControl}" is filled and is not compatible with current control.`;
    return (
      <React.Fragment key={key}>
        <Title
          className={isDisabled && 'disabled'}
          pl={10}
          pt={4}
          pb={4}
          pr={14}
          bg="paper.2"
          c="navbar.9"
          order={5}
          ta="start"
        >
          {isDisabled && (
            <Tooltip
              transitionProps={{ transition: 'pop', duration: 300 }}
              events={{ hover: true, focus: true, touch: false }}
              multiline
              w={220}
              withArrow
              arrowSize={10}
              label={disabledToolTip}
            >
              <ActionIcon mr="0.4rem" variant="subtle">
                <IconLock color="var(--mantine-color-default-color)" title={disabledToolTip} />
              </ActionIcon>
            </Tooltip>
          )}
          {data.name}
        </Title>
        {data?.controls?.length &&
          data.controls.map((control) => loadControlComponent(data, control, key, !!isDisabled))}
        {renderRangeControls(data, key, !!isDisabled)}
        {data?.description && <Text c="dimmed">{data.description}</Text>}
      </React.Fragment>
    );
  }
  function renderRangeControls(data: IDocsSection, key: number | string, disabled?: boolean) {
    if (!data?.range) return null;
    return loadControlComponent(data, { name: 'Range', range: data.range }, key, disabled);
  }

  function loadControlComponent(
    data: IDocsSection,
    controlData: TControlTypes,
    key: number | string,
    disabled?: boolean
  ) {
    if (!controlData?.name) return null;
    const controlName = controlData.name;
    const ControlComponent = controlComponents?.[controlName];
    if (!ControlComponent) {
      console.error(`Dynamic control compontent not loaded: ${controlName}`);
      return null;
    }

    // const controlData = data?.control || ({} as TGenericControl);
    const _addIfExists = (propName: string, customName?: string) => {
      return (
        propName in controlData && {
          [customName || propName]: controlData?.[propName as keyof typeof controlData],
        }
      );
    };
    const controlProps = {
      ...(disabled && {
        disabled: true,
      }),
      ..._addIfExists('range'),
      ..._addIfExists('vertical'),
      ..._addIfExists('singleValueOnly'),
      ..._addIfExists('maxValuesCount'),
      ..._addIfExists('evenGrid'),
      ..._addIfExists('data'),
      ..._addIfExists('description'),
      ..._addIfExists('disable', 'disabledDirections'),
      setClassCode: (val: string | number) =>
        handleControlValue(val, data, controlName, data.baseClass),
      signalClear: !data?.keepValuesAfterClear && !dictionaryClasses?.[data.name],
    };
    return <ControlComponent key={`${key}-${controlName}`} {...controlProps} />;
  }

  const leftControls: Array<JSX.Element | null> = [];
  const rightControls: Array<JSX.Element | null> = [];
  (function prepareControls() {
    data?.range && leftControls.push(renderRangeControls(data, `left-${k}`));

    if (data?.controls) {
      const _controls = data.controls;
      for (let index = 0; index < _controls.length; index++) {
        const element = _controls[index];
        const loadedComponent = loadControlComponent(data, element, k);
        if ('renderOnLeft' in element && element.renderOnLeft) leftControls.push(loadedComponent);
        else rightControls.push(loadedComponent);
      }
    }

    data?.sections?.map((sSData, sSKey) =>
      rightControls.push(renderSubSection(sSData, `${sSData.name}-${sSKey}`))
    );
  })();

  return (
    <div className="Docs-Section" key={`section-${k}`}>
      <PageWrapper className="Docs-Section-Title" p={12} mt={12}>
        <Title order={4} ta="start" c="navbar.9">
          {data.name}
        </Title>
        <Text c="dimmed">{data.description}</Text>
      </PageWrapper>
      <PageWrapper className="Docs-Section-Container" p={12}>
        <div className="Docs-Section-Container-Left">
          <Text c="dimmed" className="Docs-Section-Preview-Text">
            Class usage preview
          </Text>
          <DocsSpecificTags tagType={data?.tag ?? tagType} classPreview={mapPreviewClasses()} />
          <div className="Controls">{leftControls}</div>
        </div>
        <div className="Docs-Section-Container-Right Controls">{rightControls}</div>
      </PageWrapper>
    </div>
  );
};

export default React.memo(DocsSection);
