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
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const insertEmoji = (emoji: { native: string }) => {
    if (!editor) return;
    editor.chain().focus().insertContent(emoji.native).run();
    setShowEmojiPicker(false);
  };

  if (!editor) return null;

  const openLinkModal = () => {
    const { empty } = editor.state.selection;
    if (empty) {
      alert('Please select text first.');
      return;
    }

    setIsLinkModalOpen(true);
  };

  const applyLink = () => {
    if (!linkUrl || !editor) return;

    editor
      .chain()
      .extendMarkRange('link')
      .setLink({ href: linkUrl })
      .focus()
      .run();

    setIsLinkModalOpen(false);
    setLinkUrl('');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !editor) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('file', file));

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      if (!data.urls || !Array.isArray(data.urls)) {
        throw new Error('Invalid response format');
      }

      const imageNodes = data.urls.map((url: string) => ({
        type: 'image',
        attrs: {
          src: url,
          alt: 'Uploaded Image',
          class: 'full-width-image',
          contenteditable: false,
        },
      }));

      if (data.urls.length === 1) {
        // Insert single image directly
        editor.chain().focus().insertContent(imageNodes[0]).run();
      } else {
        // Wrap multiple images in custom imageGrid node
        editor
          .chain()
          .focus()
          .insertContent({
            type: 'imageGrid',
            content: imageNodes,
          })
          .run();
      }
    } catch (err) {
      console.error('Image upload error:', err);
    }

    e.target.value = '';
  };

  const handleFileAttachmentUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    // Append all files to FormData
    for (const file of Array.from(files)) {
      formData.append('file', file);
    }

    try {
      const res = await fetch('/api/file-upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      if (!data.urls || !Array.isArray(data.urls))
        throw new Error('Invalid response');

      // Insert multiple file links into the editor content
      data.urls.forEach((url: string, index: number) => {
        const fileName = files[index]?.name || 'file';
        editor
          .chain()
          .focus()
          .insertContent(
            `<a href="${url}" target="_blank" rel="noopener noreferrer">${fileName}</a><br/>`
          )
          .run();
      });
    } catch (err) {
      console.error('File upload error:', err);
    }
  };

  return (
    <>
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="absolute top-full z-50 -mt-16 w-[300px] border-2 border-red-500"
        >
          <Picker data={data} onEmojiSelect={insertEmoji} theme="light" />
        </div>
      )}

      <div className="w-full border-gray-300 rounded-lg items-center">
        <h1 className="text-darkGray p-2 pr-0 border-t border-x rounded-t-lg">
          Toolbar
        </h1>
        <div className="grid grid-cols-3">
          <Dropdown
            icon={<TypeIcon size={16} />}
            items={FONT_SIZE_OPTIONS}
            onSelect={(value) =>
              editor.chain().focus().setFontSize(value).run()
            }
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
            onClick={() => {
              if (editor.isActive('listItem')) {
                editor.chain().focus().sinkListItem('listItem').run();
              } else if (editor.isActive('taskItem')) {
                editor.chain().focus().sinkListItem('taskItem').run();
              }
            }}
            title="Indent"
            disabled={
              !editor.can().sinkListItem('listItem') &&
              !editor.can().sinkListItem('taskItem')
            }
          >
            <Indent size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => {
              if (editor.isActive('listItem')) {
                editor.chain().focus().liftListItem('listItem').run();
              } else if (editor.isActive('taskItem')) {
                editor.chain().focus().liftListItem('taskItem').run();
              }
            }}
            title="Outdent"
            disabled={
              !editor.can().liftListItem('listItem') &&
              !editor.can().liftListItem('taskItem')
            }
          >
            <Outdent size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => fileInputRef.current?.click()}
            title="Insert Image"
          >
            <ImageIcon size={16} />
          </ToolbarButton>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageUpload}
            multiple
            className="hidden"
          />

          <ToolbarButton onClick={openLinkModal} title="Insert Link">
            <LinkIcon size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => fileUploadRef.current?.click()}
            title="Attach File"
          >
            <Paperclip size={16} />
          </ToolbarButton>

          <input
            type="file"
            accept=".pdf,.zip,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.rar,.7z"
            ref={fileUploadRef}
            onChange={handleFileAttachmentUpload}
            className="hidden"
            multiple
          />

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

          <ToolbarButton
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            title="Emoji"
          >
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

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Insert Link</h2>
            <input
              type="text"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onMouseDown={(e) => e.stopPropagation()}
              autoFocus
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsLinkModalOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={applyLink}
                className="bg-indigo text-white px-4 py-2 rounded hover:bg-darkIndigo"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBar;
