import { Node, mergeAttributes } from '@tiptap/core';

export const ImageGrid = Node.create({
  name: 'imageGrid',

  group: 'block',

  content: 'block+',

  parseHTML() {
    return [
      {
        tag: 'div.image-grid',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { class: 'image-grid' }), 0];
  },
});
