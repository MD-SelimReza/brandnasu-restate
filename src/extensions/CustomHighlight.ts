import { Highlight } from '@tiptap/extension-highlight';
import { mergeAttributes } from '@tiptap/core';

export const CustomHighlight = Highlight.extend({
  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => {
          const bg = element.style.backgroundColor;
          return bg ? { color: bg } : {};
        },
        renderHTML: (attributes) => {
          const { color } = attributes;
          return {
            style: color ? `background-color: ${color}` : '',
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'mark',
        getAttrs: (element) => {
          const bg = (element as HTMLElement).style.backgroundColor;
          return bg ? { color: bg } : {};
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'mark',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },
});
