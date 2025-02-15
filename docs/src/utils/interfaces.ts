import { JSX } from 'react';
import { MantineStyleProp, PaperProps } from '@mantine/core';

type TProps = {
  [propKey in keyof PaperProps]: any;
};
interface TPaperProps extends TProps {
  children: JSX.Element | Array<JSX.Element | '' | boolean> | string | undefined | boolean;
  style?: MantineStyleProp;
}

interface TTileProps extends TPaperProps {
  to: string;
}

type TTagTypes = 'Image' | 'Blockquote' | 'Codeblock' | 'Text' | 'Tasklist';

const blockquoteArray = [
  'note',
  'tip',
  'important',
  'warning',
  'caution',
  'bug',
  'abstract',
  'summary',
  'tldr',
  'info',
  'todo',
] as const;

type TBlockquoteTypes = (typeof blockquoteArray)[number];

const directionsArray = [
  'top-left',
  'top',
  'top-right',
  'left',
  'center',
  'right',
  'bottom-left',
  'bottom',
  'bottom-right',
] as const;

type TDirections = (typeof directionsArray)[number];

// Types with examples
type description = string | 'Compact' | 'Full width';
type color = string | '#f00' | '#ff0000' | 'rgb(0,0,255)' | 'rgba(0, 0, 255, 0.6)';

type TGenericControl = {
  name: string;
  data: {
    [key: string]: description;
  };
  disable?: Array<TDirections>;
};

type TControlTypes = {
  name: string;
  renderOnLeft?: boolean;
} & (
  | {
      name: 'Toggle';
      vertical?: boolean;
      singleValueOnly?: boolean;
      evenGrid?: boolean;
      default?: string;
      data: {
        [className: string]: description;
      };
    }
  | {
      name: 'Combo';
      maxValuesCount?: number;
      default?: string;
      data: {
        [className: string]: description;
      };
    }
  | {
      name: 'Segment';
      data: {
        [className: string]: description;
      };
      vertical?: boolean;
    }
  | {
      name: 'Colors';
      data: {
        [colorName: string]: color;
      };
    }
  | {
      name: 'Range';
      range: string[];
    }
  | {
      name: 'Compass';
      disable?: Array<TDirections>;
    }
);

type TRange = Array<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'>;

interface IDocsJson {
  name: string;
  tag?: TTagTypes;
  sections: Array<IDocsSection>;
}

interface IDocsSection {
  name: string;
  disableOnControl?: string;
  description?: string;
  tag?: TTagTypes;
  baseClass?: string;
  controls?: Array<TControlTypes>;
  sections?: Array<IDocsSection>;
  range?: TRange;
  keepValuesAfterClear?: boolean;
}

export { directionsArray, blockquoteArray };
export type {
  IDocsJson,
  IDocsSection,
  TBlockquoteTypes,
  TControlTypes,
  TDirections,
  TGenericControl,
  TPaperProps,
  TProps,
  TRange,
  TTagTypes,
  TTileProps,
};
