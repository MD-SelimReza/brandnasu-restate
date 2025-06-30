'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TiptapImage from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from 'tiptap-extension-font-size';
import Strike from '@tiptap/extension-strike';
import CodeBlock from '@tiptap/extension-code-block';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import ListItem from '@tiptap/extension-list-item';
import Text from '@tiptap/extension-text';
import BulletList from '@tiptap/extension-bullet-list';
import axios from 'axios';
import Image from 'next/image';
import { FiUpload } from 'react-icons/fi';
import MenuBar from './ui/MenuBar';
import { useRouter } from 'next/navigation';
import OrderedList from '@tiptap/extension-ordered-list';
import Blockquote from '@tiptap/extension-blockquote';
import Link from '@tiptap/extension-link';
import { ImageGrid } from '@/extensions/ImageGrid';
import { CustomHighlight } from '@/extensions/CustomHighlight';

interface RichTextEditorProps {
  initialData?: {
    _id?: string;
    title: string;
    description: string;
    image: string;
    tag: string[];
    slug?: string;
    content?: string;
  };
}

const services = [
  'Website',
  'Landing Page',
  'UI/UX',
  'Logo Design',
  'Brand Guideline',
  'Printing',
  'Social Media Branding',
  'Signage',
  'Pitch Deck',
  'Branding Video',
  'Listing Video',
  'Video Ads',
];

const serviceRedirectMap: Record<string, string> = {
  Website: 'website',
  'Landing Page': 'website',
  'UI/UX': 'website',
  'Logo Design': 'brand-design',
  'Brand Guideline': 'brand-design',
  Printing: 'brand-design',
  'Social Media Branding': 'brand-marketing',
  Signage: 'brand-marketing',
  'Pitch Deck': 'brand-marketing',
  'Branding Video': 'brand-video',
  'Listing Video': 'brand-video',
  'Video Ads': 'brand-video',
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [shortDesc, setShortDesc] = useState(initialData?.description || '');
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(
    initialData?.image || null
  );
  const [tags, setTags] = useState<string[]>(initialData?.tag || []);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isOpen, setIsOpen] = useState(false);
  const [firstTagSelected, setFirstTagSelected] = useState(
    (initialData?.tag?.length || 0) > 0
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const editor = useEditor({
    extensions: [
      TextStyle,
      Color,
      CustomHighlight.configure({ multicolor: true }),
      ImageGrid,
      Document,
      Paragraph,
      Text,
      Heading.configure({ levels: [1, 2, 3, 4] }),
      FontFamily,
      FontSize,
      Underline,
      Strike,
      Subscript,
      Superscript,
      CodeBlock,
      Blockquote,
      HorizontalRule,
      HardBreak,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'custom-bullet-list checklist',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'custom-ordered-list checklist',
        },
      }),
      TaskList.configure({
        HTMLAttributes: {
          class: 'custom-task-list checklist',
        },
      }),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'custom-task-item',
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: 'custom-list-item',
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: 'custom-blockquote',
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'custom-codeblock',
        },
      }),
      Link.configure({ openOnClick: false }),
      TiptapImage.configure({ HTMLAttributes: { class: 'full-width-image' } }),
      StarterKit.configure({
        codeBlock: false,
        blockquote: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        paragraph: {
          HTMLAttributes: {
            class: 'custom-paragraph',
          },
        },
      }),
    ],
    content: initialData?.content || '',
    autofocus: true,
  });

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();

      const newTags = tagInput
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0 && !tags.includes(tag));

      const combinedTags = [...tags, ...newTags].slice(0, 3);

      setTags(combinedTags);
      setTagInput('');
      clearFieldError('tags');
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
    if (newTags.length === 0) setFirstTagSelected(false);
  };

  const handleSelect = (value: string) => {
    if (!tags.includes(value)) {
      setTags([...tags, value]);
      setFirstTagSelected(true);
      clearFieldError('tags');
    }
    setIsOpen(false);
  };

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('file', file));

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to upload');

      const data = await res.json();

      if (Array.isArray(data.urls) && data.urls[0]) {
        setUploadedImageUrl(data.urls[0]);
        clearFieldError('image');
      } else {
        throw new Error('No valid image URL returned');
      }
    } catch (err) {
      console.error('Upload failed:', err);
    }

    e.target.value = '';
  };

  const clearFieldError = (field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!shortDesc.trim()) newErrors.shortDesc = 'Description is required';
    if (!uploadedImageUrl) newErrors.image = 'Upload an image';
    if (tags.length === 0) newErrors.tags = 'Select at least one tag';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor || !validateForm()) return;

    const content = editor.getHTML();

    if (!content || content === '<p></p>') {
      alert('Please write some blog content.');
      return;
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const formattedData = {
      title: title.trim(),
      description: shortDesc.trim(),
      image: uploadedImageUrl,
      slug,
      tag: tags,
      content: content,
    };

    try {
      const res = initialData?._id
        ? await axios.patch(`/api/projects/${initialData._id}`, formattedData)
        : await axios.post('/api/projects', formattedData);

      if (res.status === 200 || res.status === 201) {
        const activeService = tags[0];
        const section = serviceRedirectMap[activeService];
        const targetUrl = section ? `/work?section=${section}` : '/work';

        // Open new tab
        window.open(targetUrl, '_blank');

        // Reset form fields for a new entry
        if (!initialData?._id) {
          setTitle('');
          setShortDesc('');
          setUploadedImageUrl(null);
          setTags([]);
          setTagInput('');
          setFirstTagSelected(false);
          if (editor) {
            editor.commands.clearContent();
          }
        }

        // Redirect current page after editing
        if (initialData?._id) {
          router.push('/dashboard/projects');
        }

        setErrors({});
      }
    } catch (err) {
      console.error('Failed to save project:', err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!editor) return <div className="min-h-screen"></div>;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 pt-16 min-h-[calc(100vh-95px)] relative"
    >
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div>
          <div className="flex justify-between gap-6 mb-4">
            <div className="w-[60%]">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (e.target.value.trim()) clearFieldError('title');
                }}
                className="w-full border rounded-lg p-3 outline-none text-base font-medium"
              />
              {errors.title && (
                <p className="text-[#E05858] text-sm">{errors.title}</p>
              )}
            </div>

            <div className="w-full md:w-[40%]">
              <div className="border rounded-lg p-3 flex flex-wrap gap-2 items-center relative">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-lightGray text-darkGray px-3 py-0.5 rounded-full text-sm flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="text-indigo hover:text-darkIndigo font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}

                {!firstTagSelected ? (
                  <div className="relative w-full" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-gray-400 text-left w-full"
                    >
                      Select a service tag
                    </button>
                    {isOpen && (
                      <ul className="absolute z-10 top-full -left-3 mt-3 w-48 bg-white border rounded-md shadow-lg text-sm">
                        {services.map((option, i) => (
                          <li
                            key={i}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-darkGray"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : tags.length < 3 ? (
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    className="flex-1 w-full outline-none text-base bg-transparent"
                    placeholder="Type a tag"
                  />
                ) : null}
              </div>
              {errors.tags && (
                <p className="text-[#E05858] text-sm">{errors.tags}</p>
              )}
            </div>
          </div>

          <div className="mb-4 flex justify-between gap-6">
            <div className="w-full">
              <input
                type="text"
                placeholder="Short Description"
                value={shortDesc}
                onChange={(e) => {
                  setShortDesc(e.target.value);
                  if (e.target.value.trim()) clearFieldError('shortDesc');
                }}
                className="w-full border rounded-lg p-3 outline-none text-base"
              />

              {errors.shortDesc && (
                <p className="text-[#E05858] text-sm">{errors.shortDesc}</p>
              )}
            </div>

            <div>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleBannerUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => document.getElementById('imageUpload')?.click()}
                className="flex items-center justify-center gap-2 px-4 py-3 w-48 bg-indigo text-white rounded-lg hover:bg-darkIndigo transition-colors duration-500"
              >
                <FiUpload className="text-lg" />
                Upload Image
              </button>
              {errors.image && (
                <p className="text-[#E05858] text-sm mt-1">{errors.image}</p>
              )}
            </div>
          </div>

          <div className="border rounded-lg mt-4 p-3 h-[600px] overflow-y-auto prose max-w-none prose-headings:my-2 prose-p:my-1 outline-none cursor-text">
            <EditorContent
              editor={editor}
              className="focus:outline-none tiptap tiptap-custom"
            />
          </div>
        </div>

        <div className="sticky top-[150px] self-start h-fit">
          <MenuBar editor={editor} />
          {uploadedImageUrl && (
            <div className="mt-4">
              <Image
                src={uploadedImageUrl}
                alt="Uploaded"
                width={2048}
                height={2048}
                className="rounded-lg shadow"
              />
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default RichTextEditor;
