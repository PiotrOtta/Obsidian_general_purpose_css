<div id="user-content-toc">
  <ul align="center" style="list-style: none;">
    <summary>
      <h1>Obsidian general purpose <b>CSS</b> classes</h1>
    </summary>
  </ul>
</div>

<p align="center">
   <img src="readmeAssets/General_purpose_css_logo.png" alt="Obsidian general purpose css logo" title="Obsidian general purpose css logo" height="220" />
</p>

## About
This repository contains a set of CSS classes designed specifically for the <b>Obsidian Notes app</b>. 

With these classes you can enhance the appearance of your notes, images, code blocks, titles, and blockquotes.

## Example of customization

1. <b>Image styling</b>

Classes: `image-border-custom1`, `image-border-beige`, `image-radius-sm`

<img style="margin-bottom:20px" src="readmeAssets/styledImage.png" alt="Styled image" width="460"/>

2. <b>Codeblock styling</b>

Class: `codeblock-fit` <i>(Preview mode only)</i>

<img style="margin-bottom:20px" src="readmeAssets/styledCodeblock.png" alt="Styled codeblock" width="260"/>

3. <b>Centering elements</b>

Classes: `center-images`, `titles-center`, `text-center`

<img style="margin-bottom:20px" src="readmeAssets/styledCenter.png" alt="Centered titles, images and texts" width="460"/>

4. <b>Blockquote styling</b>

Classes: `blockquote-note-compact`, `blockquote-tip-custom1`, `blockquote-important-fit`, `blockquote-warning-custom2`, `blockquote-caution-title-right`, `blockquote-caution-text-center`

<img style="margin-bottom:20px" src="readmeAssets/styledBlockquotes.png" alt="Styled blockquotes" width="460"/>

…and many other unique combinations!

## Installation

1. Open <b>Obsidian</b>
2. Navigate to <b>settings</b> (default shortcut: `ctrl+,`)
3. Under the <i>Options</i> section, select <b>Appearance</b>
4. Scroll down to the <b>CSS Snippets</b>
5. Click <b>Open snippets folder</b> icon
6. Download `General_purpose_css.css` file and place it in the snippets folder
7. Enable `General_purpose_css` snippet in <i>CSS Snippets</i> section (refresh if it doesn't appear)

## Usage

To apply CSS classes in a Obisidan note:

1. add a file property at the beginning of your note (two ways):
  - manually type:
```yaml
---
cssClasses
---
```
  - Or right click the opened note tab and choose `Add file property`. Then select `cssclasses`
2. Paste any desired class from the list of [all CSS classes](#all-css-classes) or use [documentation app](https://piotrotta.github.io/Obsidian_general_purpose_css/).

## Documentation

Detailed documentation for the classes, including previews and usage examples, is hosted on the GitHub page:

https://piotrotta.github.io/Obsidian_general_purpose_css/

## Contribution and more

Here's how you can get involved:

- add your own custom classes,
- fork the repository,
- submit [pull request](https://github.com/PiotrOtta/Obsidian_general_purpose_css/pulls) with:
  - your CSS addition,
  - suggestions for new features or enhancements,
  - bugs.

## All css classes
(497 total)
```css
/* Image (182) */
image-full-width
image-full-height
image-shadow-black
image-shadow-gray-light
image-shadow-gray
image-shadow-gray-dark
image-shadow-white
image-shadow-red-light
image-shadow-red
image-shadow-red-dark
image-shadow-blue-light
image-shadow-blue
image-shadow-blue-dark
image-shadow-green-light
image-shadow-green
image-shadow-green-dark
image-shadow-yellow-light
image-shadow-yellow
image-shadow-yellow-dark
image-shadow-purple-light
image-shadow-purple
image-shadow-purple-dark
image-shadow-teal-light
image-shadow-teal
image-shadow-teal-dark
image-shadow-orange-light
image-shadow-orange
image-shadow-orange-dark
image-shadow-xs
image-shadow-sm
image-shadow-md
image-shadow-lg
image-shadow-xl
image-shadow-xxl
image-shadow-center-xs
image-shadow-center-sm
image-shadow-center-md
image-shadow-center-lg
image-shadow-center-xl
image-shadow-center-xxl
image-shadow-top-left-xs
image-shadow-top-left-sm
image-shadow-top-left-md
image-shadow-top-left-lg
image-shadow-top-left-xl
image-shadow-top-left-xxl
image-shadow-left-xs
image-shadow-left-sm
image-shadow-left-md
image-shadow-left-lg
image-shadow-left-xl
image-shadow-left-xxl
image-shadow-bottom-left-xs
image-shadow-bottom-left-sm
image-shadow-bottom-left-md
image-shadow-bottom-left-lg
image-shadow-bottom-left-xl
image-shadow-bottom-left-xxl
image-shadow-top-right-xs
image-shadow-top-right-sm
image-shadow-top-right-md
image-shadow-top-right-lg
image-shadow-top-right-xl
image-shadow-top-right-xxl
image-shadow-right-xs
image-shadow-right-sm
image-shadow-right-md
image-shadow-right-lg
image-shadow-right-xl
image-shadow-right-xxl
image-shadow-bottom-right-xs
image-shadow-bottom-right-sm
image-shadow-bottom-right-md
image-shadow-bottom-right-lg
image-shadow-bottom-right-xl
image-shadow-bottom-right-xxl
image-shadow-bottom-center-xs
image-shadow-bottom-center-sm
image-shadow-bottom-center-md
image-shadow-bottom-center-lg
image-shadow-bottom-center-xl
image-shadow-bottom-center-xxl
image-saturate-xs
image-saturate-sm
image-saturate-md
image-saturate-lg
image-saturate-xl
image-saturate-xxl
image-sepia-xs
image-sepia-sm
image-sepia-md
image-sepia-lg
image-sepia-xl
image-sepia-xxl
image-blur-xs
image-blur-sm
image-blur-md
image-blur-lg
image-blur-xl
image-blur-xxl
image-brightness-xs
image-brightness-sm
image-brightness-md
image-brightness-lg
image-brightness-xl
image-brightness-xxl
image-contrast-xs
image-contrast-sm
image-contrast-md
image-contrast-lg
image-contrast-xl
image-contrast-xxl
image-grayscale-xs
image-grayscale-sm
image-grayscale-md
image-grayscale-lg
image-grayscale-xl
image-grayscale-xxl
image-radius-none
image-radius-xs
image-radius-sm
image-radius-md
image-radius-lg
image-radius-xl
image-radius-xxl
image-radius-circle
image-border-xxs
image-border-xs
image-border-sm
image-border-md
image-border-lg
image-border-xl
image-border-xxl
image-border-xxxl
image-border-custom1
image-border-black
image-border-white
image-border-gray
image-border-silver
image-border-red
image-border-green
image-border-blue
image-border-yellow
image-border-purple
image-border-pink
image-border-orange
image-border-brown
image-border-cyan
image-border-magenta
image-border-maroon
image-border-lime
image-border-aqua
image-border-teal
image-border-navy
image-border-olive
image-border-indigo
image-border-violet
image-border-gold
image-border-coral
image-border-salmon
image-border-beige
image-border-moccasin
image-border-gray-50 
image-border-gray-100
image-border-gray-200
image-border-gray-300
image-border-gray-400
image-border-gray-500
image-border-gray-600
image-border-gray-700
image-border-gray-800
image-border-gray-900
image-border-pastel-pink
image-border-pastel-yellow
image-border-pastel-blue
image-border-pastel-green
image-border-pastel-purple
image-border-pastel-orange
image-border-custom-color-1
image-border-custom-color-2
image-border-custom-color-3
center-images
/* Codeblock (8)*/
codeblock-fit
codeblock-compact
codeblock-margin-xs
codeblock-margin-sm
codeblock-margin-md
codeblock-margin-lg
codeblock-margin-xl
codeblock-margin-xxl
/* Blockquotes (285) */
blockquote-compact
blockquote-note-compact
blockquote-tip-compact
blockquote-important-compact
blockquote-warning-compact
blockquote-caution-compact
blockquote-border-none
blockquote-note-border-none
blockquote-tip-border-none
blockquote-important-border-none
blockquote-warning-border-none
blockquote-caution-border-none
blockquote-border-xs
blockquote-note-border-xs
blockquote-tip-border-xs
blockquote-important-border-xs
blockquote-warning-border-xs
blockquote-caution-border-xs
blockquote-border-sm
blockquote-note-border-sm
blockquote-tip-border-sm
blockquote-important-border-sm
blockquote-warning-border-sm
blockquote-caution-border-sm
blockquote-border-md
blockquote-note-border-md
blockquote-tip-border-md
blockquote-important-border-md
blockquote-warning-border-md
blockquote-caution-border-md
blockquote-border-lg
blockquote-note-border-lg
blockquote-tip-border-lg
blockquote-important-border-lg
blockquote-warning-border-lg
blockquote-caution-border-lg
blockquote-border-xl
blockquote-note-border-xl
blockquote-tip-border-xl
blockquote-important-border-xl
blockquote-warning-border-xl
blockquote-caution-border-xl
blockquote-border-xxl
blockquote-note-border-xxl
blockquote-tip-border-xxl
blockquote-important-border-xxl
blockquote-warning-border-xxl
blockquote-caution-border-xxl
blockquote-border-xxxl
blockquote-note-border-xxxl
blockquote-tip-border-xxxl
blockquote-important-border-xxxl
blockquote-warning-border-xxxl
blockquote-caution-border-xxxl
blockquote-border-dashed
blockquote-note-border-dashed
blockquote-tip-border-dashed
blockquote-important-border-dashed
blockquote-warning-border-dashed
blockquote-caution-border-dashed
blockquote-border-dotted
blockquote-note-border-dotted
blockquote-tip-border-dotted
blockquote-important-border-dotted
blockquote-warning-border-dotted
blockquote-caution-border-dotted
blockquote-border-double
blockquote-note-border-double
blockquote-tip-border-double
blockquote-important-border-double
blockquote-warning-border-double
blockquote-caution-border-double
blockquote-border-left
blockquote-note-border-left
blockquote-tip-border-left
blockquote-important-border-left
blockquote-warning-border-left
blockquote-caution-border-left
blockquote-border-right
blockquote-note-border-right
blockquote-tip-border-right
blockquote-important-border-right
blockquote-warning-border-right
blockquote-caution-border-right
blockquote-border-top
blockquote-note-border-top
blockquote-tip-border-top
blockquote-important-border-top
blockquote-warning-border-top
blockquote-caution-border-top
blockquote-border-bottom
blockquote-note-border-bottom
blockquote-tip-border-bottom
blockquote-important-border-bottom
blockquote-warning-border-bottom
blockquote-caution-border-bottom
blockquote-border-left
blockquote-note-border-left
blockquote-tip-border-left
blockquote-important-border-left
blockquote-warning-border-left
blockquote-caution-border-left
blockquote-border-right
blockquote-note-border-right
blockquote-tip-border-right
blockquote-important-border-right
blockquote-warning-border-right
blockquote-caution-border-right
blockquote-border-top
blockquote-note-border-top
blockquote-tip-border-top
blockquote-important-border-top
blockquote-warning-border-top
blockquote-caution-border-top
blockquote-border-bottom
blockquote-note-border-bottom
blockquote-tip-border-bottom
blockquote-important-border-bottom
blockquote-warning-border-bottom
blockquote-caution-border-bottom
blockquote-background-none
blockquote-note-background-none
blockquote-tip-background-none
blockquote-important-background-none
blockquote-warning-background-none
blockquote-caution-background-none
blockquote-title-center
blockquote-text-center
blockquote-note-title-center
blockquote-note-text-center
blockquote-tip-title-center
blockquote-tip-text-center
blockquote-important-title-center
blockquote-important-text-center
blockquote-warning-title-center
blockquote-warning-text-center
blockquote-caution-title-center
blockquote-caution-text-center
blockquote-content-center
blockquote-text-center
blockquote-note-content-center
blockquote-note-text-center
blockquote-tip-content-center
blockquote-tip-text-center
blockquote-important-content-center
blockquote-important-text-center
blockquote-warning-content-center
blockquote-warning-text-center
blockquote-caution-content-center
blockquote-caution-text-center
blockquote-title-right
blockquote-text-right
blockquote-note-title-right
blockquote-note-text-right
blockquote-tip-title-right
blockquote-tip-text-right
blockquote-important-title-right
blockquote-important-text-right
blockquote-warning-title-right
blockquote-warning-text-right
blockquote-caution-title-right
blockquote-caution-text-right
blockquote-content-right
blockquote-text-right
blockquote-note-content-right
blockquote-note-text-right
blockquote-tip-content-right
blockquote-tip-text-right
blockquote-important-content-right
blockquote-important-text-right
blockquote-warning-content-right
blockquote-warning-text-right
blockquote-caution-content-right
blockquote-caution-text-right
blockquote-radius-none
blockquote-note-radius-none
blockquote-tip-radius-none
blockquote-important-radius-none
blockquote-warning-radius-none
blockquote-caution-radius-none
blockquote-radius-xs
blockquote-note-radius-xs
blockquote-tip-radius-xs
blockquote-important-radius-xs
blockquote-warning-radius-xs
blockquote-caution-radius-xs
blockquote-radius-sm
blockquote-note-radius-sm
blockquote-tip-radius-sm
blockquote-important-radius-sm
blockquote-warning-radius-sm
blockquote-caution-radius-sm
blockquote-radius-md
blockquote-note-radius-md
blockquote-tip-radius-md
blockquote-important-radius-md
blockquote-warning-radius-md
blockquote-caution-radius-md
blockquote-radius-lg
blockquote-note-radius-lg
blockquote-tip-radius-lg
blockquote-important-radius-lg
blockquote-warning-radius-lg
blockquote-caution-radius-lg
blockquote-radius-xl
blockquote-note-radius-xl
blockquote-tip-radius-xl
blockquote-important-radius-xl
blockquote-warning-radius-xl
blockquote-caution-radius-xl
blockquote-radius-xxl
blockquote-note-radius-xxl
blockquote-tip-radius-xxl
blockquote-important-radius-xxl
blockquote-warning-radius-xxl
blockquote-caution-radius-xxl
blockquote-radius-circle
blockquote-note-radius-circle
blockquote-tip-radius-circle
blockquote-important-radius-circle
blockquote-warning-radius-circle
blockquote-caution-radius-circle
blockquote-note-red
blockquote-tip-red
blockquote-important-red
blockquote-warning-red
blockquote-caution-red
blockquote-note-blue
blockquote-tip-blue
blockquote-important-blue
blockquote-warning-blue
blockquote-caution-blue
blockquote-note-orange
blockquote-tip-orange
blockquote-important-orange
blockquote-warning-orange
blockquote-caution-orange
blockquote-note-yellow
blockquote-tip-yellow
blockquote-important-yellow
blockquote-warning-yellow
blockquote-caution-yellow
blockquote-note-green
blockquote-tip-green
blockquote-important-green
blockquote-warning-green
blockquote-caution-green
blockquote-note-cyan
blockquote-tip-cyan
blockquote-important-cyan
blockquote-warning-cyan
blockquote-caution-cyan
blockquote-note-cyan
blockquote-tip-cyan
blockquote-important-cyan
blockquote-warning-cyan
blockquote-caution-cyan
blockquote-note-purple
blockquote-tip-purple
blockquote-important-purple
blockquote-warning-purple
blockquote-caution-purple
blockquote-note-pink
blockquote-tip-pink
blockquote-important-pink
blockquote-warning-pink
blockquote-caution-pink
blockquote-fit
blockquote-note-fit
blockquote-tip-fit
blockquote-important-fit
blockquote-warning-fit
blockquote-caution-fit
blockquote-custom1
blockquote-note-custom1
blockquote-tip-custom1
blockquote-important-custom1
blockquote-warning-custom1
blockquote-caution-custom1
blockquote-custom2
blockquote-note-custom2
blockquote-tip-custom2
blockquote-warning-custom2
blockquote-important-custom2
blockquote-caution-custom2
/* hr (6) */
hr-xs
hr-sm
hr-md
hr-lg
hr-xl
hr-xxl
/* TODO: Tasklist (0) */
/* Title positioning */
titles-center
titles-right
h1-center
h2-center
h3-center
h4-center
h5-center
h6-center
h1-right
h2-right
h3-right
h4-right
h5-right
h6-right
text-center
text-right
/* Other */
embed-border-none
```