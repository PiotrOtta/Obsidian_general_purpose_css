import React, { FunctionComponent, ImgHTMLAttributes, useState } from 'react';
import SampleImg from '@assets/SampleImg.jpg';
import { blockquoteArray, TBlockquoteTypes, TTagTypes } from '@utils/interfaces';
import { ComboControl } from '@/components/Controls/ComboControl';

type _htmlProps = ImgHTMLAttributes<HTMLImageElement>;
function _Image(props?: _htmlProps) {
  return (
    <div {...props} className="el-p">
      <p dir="auto">
        <span title="logo_banner.png" className="internal-embed media-embed image-embed is-loaded">
          <img alt="Sample" width={400} src={SampleImg} />
        </span>
        <br />
        This is a note picture
      </p>
    </div>
  );
}
function _Blockquote(props?: _htmlProps) {
  const renderBlockquote = (callout: TBlockquoteTypes | string | undefined) => {
    const _callout = callout || 'note';
    const _iconPath = (() => {
      switch (_callout) {
        case 'todo':
          return (
            <>
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </>
          );
        case 'info':
          return (
            <>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </>
          );
        case 'abstract':
        case 'summary':
        case 'tldr':
          return (
            <>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M12 11h4" />
              <path d="M12 16h4" />
              <path d="M8 11h.01" />
              <path d="M8 16h.01" />
            </>
          );
        case 'bug':
          return (
            <>
              <path d="m8 2 1.88 1.88" />
              <path d="M14.12 3.88 16 2" />
              <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
              <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
              <path d="M12 20v-9" />
              <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
              <path d="M6 13H2" />
              <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
              <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
              <path d="M22 13h-4" />
              <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
            </>
          );
        case 'warning':
        case 'caution':
          return (
            <>
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </>
          );
        case 'tip':
        case 'important':
          return (
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          );
        case 'note':
        default:
          return (
            <>
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
              <path d="m15 5 4 4" />
            </>
          );
      }
    })();

    return (
      <div
        data-callout-metadata=""
        data-callout-fold=""
        data-callout={_callout.toLowerCase()}
        className="callout"
      >
        <div className="callout-title" dir="auto">
          <div className="callout-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="svg-icon lucide-pencil"
            >
              {_iconPath}
            </svg>
          </div>
          <div className="callout-title-inner">{_callout}</div>
        </div>
        <div className="callout-content">
          <p dir="auto">{`${_callout[0]}${_callout.slice(1)}`} block</p>
        </div>
      </div>
    );
  };

  const [renderBlocks, setRenderBlocks] = useState<string | number>('');

  const blockquoteOptions = Object.fromEntries(
    blockquoteArray.map((key) => [key, `${key[0].toUpperCase()}${key.slice(1)}`])
  );

  return (
    <>
      <ComboControl
        data={blockquoteOptions}
        setClassCode={setRenderBlocks}
        customPlaceholder="Choose which type of blockquote to render"
      />
      <div className="markdown-rendered" {...props}>
        <div className="el-div">
          {String(renderBlocks)
            .split(' ')
            .map((type) => renderBlockquote(type))}
        </div>
      </div>
    </>
  );
}
function _Codeblock(props?: _htmlProps) {
  return (
    <div className="markdown-rendered" {...props}>
      <div className="el-pre">
        <pre className="language-css">
          <code data-line="0" className="language-css is-loaded">
            <span style={{ color: 'yellow' }}>blockquote</span>-compact
          </code>
          <button type="button" className="copy-code-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="svg-icon lucide-copy"
            >
              <rect x="8" y="8" width="14" height="14" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </pre>
      </div>
      <div className="el-pre">
        <pre className="language-css">
          <code data-line="0" className="language-css is-loaded">
            blockquote-compact blockquote-&lt;note<span className="token punctuation">,</span>{' '}
            important<span className="token punctuation">,</span> tip
            <span className="token punctuation">,</span> warning
            <span className="token punctuation">,</span> caution&gt;-compact
          </code>
          <button type="button" className="copy-code-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="svg-icon lucide-copy"
            >
              <rect x="8" y="8" width="14" height="14" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </pre>
      </div>
    </div>
  );
}
function _Tasklist(props?: _htmlProps) {
  return <div {...props}>[Tasklist]</div>;
}
function _Text(props?: _htmlProps) {
  return (
    <React.Fragment {...props}>
      <div className="el-h1">
        <h1 data-heading="h1" dir="auto">
          h1
        </h1>
      </div>
      <div className="el-h2">
        <h2 data-heading="h2" dir="auto">
          h2
        </h2>
      </div>
      <div className="el-h3">
        <h3 data-heading="h3" dir="auto">
          h3
        </h3>
      </div>
      <div className="el-h4">
        <h4 data-heading="h4" dir="auto">
          h4
        </h4>
      </div>
      <div className="el-h5">
        <h5 data-heading="h5" dir="auto">
          h5
        </h5>
      </div>
      <div className="el-h6">
        <h6 data-heading="h6" dir="auto">
          h6
        </h6>
      </div>
      <div className="el-p">
        <p dir="auto">Text before separator</p>
      </div>
      <div className="el-hr">
        <hr />
      </div>
      <div className="el-p">
        <p dir="auto">More text</p>
      </div>
    </React.Fragment>
  );
}
function _Unsupported(tagName?: string, props?: _htmlProps) {
  return (
    <span {...props} style={{ color: 'var(--mantine-color-error)' }}>
      [Provided name is not supported by the app. Please check the tag name:{' '}
      {tagName || 'NO TAG NAME PROVIDED'}]
    </span>
  );
}

interface DocsSpecificTagsProps {
  tagType?: TTagTypes;
  props?: _htmlProps;
  classPreview?: string;
}
const DocsSpecificTags: FunctionComponent<DocsSpecificTagsProps> = ({
  tagType,
  props,
  classPreview,
}) => {
  function getTag() {
    const _props = { ...props };
    switch (tagType) {
      case 'Image':
        return _Image(_props);
      case 'Blockquote':
        return _Blockquote(_props);
      case 'Codeblock':
        return _Codeblock(_props);
      case 'Tasklist':
        return _Tasklist(_props);
      case 'Text':
        return _Text(_props);
      default:
        return _Unsupported(tagType);
    }
  }

  return (
    <div className={`Docs-Section-Preview ${classPreview || ''}`}>
      <div className="el-h1">
        <h1 data-heading="New photos" dir="auto">
          Sample heading, order 1
        </h1>
      </div>
      <div className="el-p">
        <p dir="auto">
          Some neat text
          <br />
          and other text
          <br />
          .... and lorem
        </p>
      </div>
      {getTag()}
      <div className="el-p">
        <p dir="auto">
          Still lorem, loreming
          <br />
          lore.
          <br />
          ipsu.
          <br />
          LOREM.
          <br />
          IPSUM.
        </p>
      </div>
    </div>
  );
};

export default DocsSpecificTags;
