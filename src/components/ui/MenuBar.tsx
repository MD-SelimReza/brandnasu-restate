import React, { useEffect, useRef, useState } from 'react';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Undo,
  Redo,
  Quote,
  Strikethrough,
  Paperclip,
  Image as ImageIcon,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Smile,
  Outdent,
  Indent,
  TypeIcon,
  AlignJustify,
  Baseline,
  PaintBucket,
  Code,
  ListChecks,
} from 'lucide-react';
import { Editor } from '@tiptap/react';

const COLOR_GRID = [
  '#000000',
  '#434343',
  '#666666',
  '#999999',
  '#b7b7b7',
  '#cccccc',
  '#d9d9d9',
  '#efefef',
  '#f3f3f3',
  '#ffffff',
  '#ff0000',
  '#ff9900',
  '#ffff00',
  '#00ff00',
  '#00ffff',
  '#0000ff',
  '#9900ff',
  '#ff00ff',
  '#f4cccc',
  '#fce5cd',
  '#fff2cc',
  '#d9ead3',
  '#d0e0e3',
  '#cfe2f3',
  '#d9d2e9',
  '#ead1dc',
  '#ea9999',
  '#f9cb9c',
  '#ffe599',
  '#b6d7a8',
  '#a2c4c9',
  '#9fc5e8',
  '#b4a7d6',
  '#d5a6bd',
  '#e06666',
  '#f6b26b',
  '#ffd966',
  '#93c47d',
  '#76a5af',
  '#6fa8dc',
  '#8e7cc3',
  '#c27ba0',
  '#cc0000',
  '#e69138',
  '#f1c232',
  '#6aa84f',
  '#45818e',
  '#3d85c6',
  '#674ea7',
  '#a64d79',
  '#990000',
  '#b45f06',
  '#bf9000',
  '#38761d',
  '#134f5c',
  '#0b5394',
  '#351c75',
  '#741b47',
  '#660000',
  '#783f04',
  '#7f6000',
  '#274e13',
  '#0c343d',
  '#073763',
  //   '#20124d',
  //   '#4c1130',
];

interface ColorPickerProps {
  editor: Editor;
  type: 'text' | 'background';
  icon: React.ReactNode;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ editor, type, icon }) => {
  const [show, setShow] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const applyColor = (color: string) => {
    const command =
      type === 'text'
        ? editor.chain().focus().setColor(color)
        : editor.chain().focus().setHighlight({ color });

    command.run();
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="p-2 border hover:bg-gray-100 w-full flex justify-center items-center h-14"
        title={type === 'text' ? 'Text Color' : 'Background Color'}
      >
        {icon}
      </button>
      {show && (
        <div className="absolute right-0 top-14 z-20 bg-white border rounded shadow-md p-[18px] flex gap-6 w-auto">
          <div className="w-40 shrink-0">
            <div className="text-sm font-medium mb-2">
              {type === 'background' ? 'Background color' : 'Text color'}
            </div>
            <div className="grid grid-cols-8 gap-0.5">
              {COLOR_GRID.map((color, idx) => (
                <button
                  key={`${type}-${idx}`}
                  onClick={() => applyColor(color)}
                  className="w-[18px] h-[18px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ALIGN_OPTIONS = [
  { icon: <AlignLeft size={16} />, value: 'left' },
  { icon: <AlignCenter size={16} />, value: 'center' },
  { icon: <AlignRight size={16} />, value: 'right' },
  { icon: <AlignJustify size={16} />, value: 'justify' },
];

const FONT_SIZE_OPTIONS = [
  { label: '12px', value: '12px' },
  { label: '16px', value: '16px' },
  { label: '24px', value: '24px' },
  { label: '36px', value: '36px' },
  { label: '48px', value: '48px' },
];

interface DropdownItem {
  label?: string;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  icon: React.ReactNode;
  items: DropdownItem[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ icon, items, onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 border hover:bg-gray-100 w-full flex justify-center items-center h-14"
      >
        {icon}
      </button>
      {open && (
        <div className="absolute z-30 bg-white w-full shadow-lg">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onSelect(item.value);
                setOpen(false);
              }}
              className="flex items-center justify-center gap-2 border hover:bg-gray-100 w-full h-14"
            >
              {item.icon}
              {item.label && <span>{item.label}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ToolbarButton = ({
  onClick,
  active,
  children,
  title,
  disabled,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  title: string;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    title={title}
    className={`p-2 border flex justify-center items-center h-14 hover:bg-gray-100 transition ${
      active ? 'bg-gray-200' : ''
    }`}
    type="button"
    disabled={disabled}
  >
    {children}
  </button>
);

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const setLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    }
  };

  const insertImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="w-full border-gray-300 rounded-lg items-center">
      <h1 className="text-darkGray p-2 pr-0 border-t border-x rounded-t-lg">
        Toolbar
      </h1>
      <div className="grid grid-cols-3">
        <Dropdown
          icon={<TypeIcon size={16} />}
          items={FONT_SIZE_OPTIONS}
          onSelect={(value) => editor.chain().focus().setFontSize(value).run()}
        />

        <ColorPicker
          editor={editor}
          type="text"
          icon={<Baseline size={16} />}
        />

        <ColorPicker
          editor={editor}
          type="background"
          icon={<PaintBucket size={16} />}
        />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          // onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold"
        >
          <Bold size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic"
        >
          <Italic size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </ToolbarButton>

        <Dropdown
          icon={<AlignJustify size={16} />}
          items={ALIGN_OPTIONS.map(({ icon, value }) => ({
            label: '',
            value,
            icon,
          }))}
          onSelect={(value) =>
            editor
              .chain()
              .focus()
              .setTextAlign(value as 'left' | 'center' | 'right' | 'justify')
              .run()
          }
        />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <List size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Ordered List"
        >
          <ListOrdered size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          active={editor.isActive('taskList')}
          title="Task List"
        >
          <ListChecks size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
          title="Indent"
        >
          <Indent size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().liftListItem('listItem').run()}
          title="Outdent"
        >
          <Outdent size={16} />
        </ToolbarButton>

        <ToolbarButton onClick={() => insertImage} title="Insert Image">
          <ImageIcon size={16} />
        </ToolbarButton>

        <ToolbarButton onClick={setLink} title="Insert Link">
          <LinkIcon size={16} />
        </ToolbarButton>

        <ToolbarButton onClick={() => {}} title="Attach">
          <Paperclip size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive('blockquote')}
          title="Blockquote"
        >
          <Quote size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive('codeBlock')}
          title="Code Block"
        >
          <Code size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive('strike')}
          title="Strike"
        >
          <Strikethrough size={16} />
        </ToolbarButton>

        <ToolbarButton onClick={() => {}} title="Emoji">
          <Smile size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo"
        >
          <Undo size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo"
        >
          <Redo size={16} />
        </ToolbarButton>
      </div>

      <button className="px-4 py-3 tracking-wide rounded-lg bg-indigo text-white hover:bg-darkIndigo transition duration-500 w-full mt-4">
        Submit
      </button>
    </div>
  );
};

export default MenuBar;
