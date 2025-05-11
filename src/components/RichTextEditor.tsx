'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Link from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
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
import MenuBar from './ui/MenuBar';
import BulletList from '@tiptap/extension-bullet-list';
import { uploadImageToR2 } from '@/lib/upload';
import Image from 'next/image';
import { FiUpload } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const serviceRedirectMap = [
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

const RichTextEditor = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [firstTagSelected, setFirstTagSelected] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [tagError, setTagError] = useState('');
  const [imageError, setImageError] = useState('');

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({ levels: [1, 2, 3, 4] }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Highlight,
      Underline,
      Strike,
      Link.configure({ openOnClick: false }),
      TiptapImage,
      Subscript,
      Superscript,
      CodeBlock,
      HorizontalRule,
      HardBreak,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Placeholder.configure({ placeholder: 'Write your message here...' }),
      BulletList,
      ListItem,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
        },
        codeBlock: false,
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      console.log('Content:', editor.getJSON());
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      if (tags.length >= 3) return;
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput('');
      }
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleSelect = (value: string) => {
    setTags([...tags, value]);
    setFirstTagSelected(true);
    setIsOpen(false);
  };

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadedImageUrl = await uploadImageToR2(file);
    setUploadedImageUrl(uploadedImageUrl);
  };

  // Keep dropdown available if tags are empty
  useEffect(() => {
    if (tags.length === 0) {
      setFirstTagSelected(false);
    }
  }, [tags]);

  // Close dropdown when clicking outside
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

  interface FormData {
    title: string;
    shortDesc: string;
  }

  const onSubmit = async (data: FormData) => {
    let isValid = true;

    setTagError('');
    setImageError('');

    if (tags.length === 0) {
      setTagError('Select at least one tag');
      isValid = false;
    }

    if (!uploadedImageUrl) {
      setImageError('Upload an image');
      isValid = false;
    }

    if (!isValid) return;

    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const formattedData = {
      title: data.title.trim(),
      description: data.shortDesc.trim(),
      image: uploadedImageUrl,
      slug,
      tag: tags,
    };

    try {
      const res = await axios.post('/api/projects', formattedData);

      if (res.status === 201) {
        toast.success('Project saved successfully!');
        // Optionally reset form here
      } else {
        toast.error(res.data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error saving project. Please try again.');
    }
  };

  if (!editor) return null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 pt-16 pb-32 min-h-[calc(100vh-85px)] relative"
    >
      <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Main Content */}
        <div>
          {/* Title and Tags Row */}
          <div className="flex justify-between gap-6 mb-4">
            {/* Title */}
            <div className="w-2/3">
              <input
                type="text"
                {...register('title', { required: 'Title is required' })}
                placeholder="Title"
                className="w-full border rounded-lg p-3 outline-none text-base font-medium"
              />
              {errors.title && (
                <p className="text-[#E05858] text-sm">
                  {errors.title.message?.toString()}
                </p>
              )}
            </div>

            {/* Tag Input with inline tag display */}
            <div className="w-full md:w-1/3">
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
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-gray-400 bg-transparent outline-none"
                    >
                      Select a service tag
                    </button>
                    {isOpen && (
                      <ul className="absolute z-10 top-full -left-3 mt-3 w-48 bg-white border rounded-md shadow-lg max-h-auto overflow-auto text-sm">
                        {serviceRedirectMap.map((option, i) => (
                          <li
                            key={i}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray100 text-darkGray"
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
                    placeholder="Type a tag and press Enter"
                  />
                ) : null}
              </div>
              {tagError && (
                <p className="text-[#E05858] text-sm w-full">{tagError}</p>
              )}
            </div>
          </div>

          {/* Short Description and Image Upload */}
          <div className="mb-4 flex justify-between gap-6">
            <div className="w-full">
              <input
                type="text"
                {...register('shortDesc', {
                  required: 'Description is required',
                })}
                placeholder="Short Description"
                className="w-full border rounded-lg p-3 outline-none text-base"
              />
              {errors.shortDesc && (
                <p className="text-[#E05858] text-sm">
                  {errors.shortDesc.message?.toString()}
                </p>
              )}
            </div>

            {/* Upload Image Input */}
            <div className="">
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
              {imageError && (
                <p className="text-[#E05858] text-sm mt-1">{imageError}</p>
              )}
            </div>
          </div>

          {/* Rich Text Editor */}
          <div
            onClick={() => editor.chain().focus().run()}
            className="border rounded-lg mt-4 p-3 h-[600px] overflow-y-auto prose max-w-none prose-headings:my-2 prose-p:my-1 prose-ul:pl-5 prose-ol:pl-5 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-darkGray outline-none cursor-text"
          >
            <EditorContent
              editor={editor}
              className="focus:outline-none outline-none border-none"
            />
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="sticky top-[150px] self-start h-fit">
          <MenuBar editor={editor} />
          {/* Show uploaded image */}
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

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useEditor, EditorContent } from '@tiptap/react';
// import { FiUpload } from 'react-icons/fi';
// import Image from 'next/image';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify
// import { uploadImageToR2 } from '@/lib/upload';

// const serviceRedirectMap = [
//   'Website',
//   'Landing Page',
//   'UI/UX',
//   'Logo Design',
//   'Brand Guideline',
//   'Printing',
//   'Social Media Branding',
//   'Signage',
//   'Pitch Deck',
//   'Branding Video',
//   'Listing Video',
//   'Video Ads',
// ];

// const RichTextEditor = () => {
//   const [tags, setTags] = useState<string[]>([]);
//   const [tagInput, setTagInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [firstTagSelected, setFirstTagSelected] = useState(false);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

// const {
//   register,
//   handleSubmit,
//   setValue,
//   formState: { errors },
// } = useForm();

//   const editor = useEditor({
//     // extensions: tiptapExtensions.fullExtensions,
//     content: '',
//     onUpdate: ({ editor }) => {
//       const json = editor.getJSON();
//       setValue('content', json); // Store in form state if needed
//     },
//   });

// const onSubmit = (data: any) => {
//   if (tags.length === 0) {
//     toast.error('Please add at least one tag.', {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//     return;
//   }
//   if (!uploadedImageUrl) {
//     toast.error('Please upload an image.', {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//     return;
//   }

//     const submission = {
//       ...data,
//       tags,
//       image: uploadedImageUrl,
//     };

//     console.log('Form Submitted:', submission);
//     toast.success('Form submitted successfully!', {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };

//   const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
//       e.preventDefault();
//       if (tags.length >= 3) return;
//       if (!tags.includes(tagInput.trim())) {
//         setTags([...tags, tagInput.trim()]);
//         setTagInput('');
//       }
//     }
//   };

//   const removeTag = (index: number) => {
//     const updated = tags.filter((_, i) => i !== index);
//     setTags(updated);
//   };

//   const handleSelect = (value: string) => {
//     setTags([...tags, value]);
//     setFirstTagSelected(true);
//     setIsOpen(false);
//   };

//   const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const url = await uploadImageToR2(file);
//     setUploadedImageUrl(url);
//   };

//   useEffect(() => {
//     if (tags.length === 0) setFirstTagSelected(false);
//   }, [tags]);

//   useEffect(() => {
//     const handler = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   if (!editor) return null;

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white p-6 pt-16 pb-32 min-h-[calc(100vh-85px)]"
//     >
//       <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[1fr_300px] gap-6">
//         {/* Left */}
//         <div>
//           <div className="flex gap-6 mb-4">
//             {/* Title */}
// <div className="w-2/3">
//   <input
//     type="text"
//     {...register('title', { required: 'Title is required' })}
//     placeholder="Title"
//     className="w-full border rounded-lg p-3 outline-none text-base font-medium"
//   />
//   {errors.title && (
//     <p className="text-red-500 text-sm">{errors.title.message}</p>
//   )}
// </div>

//             {/* Tags */}
//             <div className="w-1/3">
//               <div className="border rounded-lg p-3 flex flex-wrap gap-2 items-center relative">
//                 {tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-lightGray text-darkGray px-3 py-0.5 rounded-full text-sm flex items-center gap-1"
//                   >
//                     {tag}
//                     <button
//                       type="button"
//                       onClick={() => removeTag(index)}
//                       className="text-indigo hover:text-darkIndigo font-bold"
//                     >
//                       ×
//                     </button>
//                   </span>
//                 ))}
//                 {!firstTagSelected ? (
//                   <div className="relative" ref={dropdownRef}>
//                     <button
//                       type="button"
//                       onClick={() => setIsOpen(!isOpen)}
//                       className="text-gray-400 bg-transparent outline-none"
//                     >
//                       Select a service tag
//                     </button>
//                     {isOpen && (
//                       <ul className="absolute z-10 top-full left-0 mt-3 w-48 bg-white border rounded-md shadow-lg text-sm">
//                         {serviceRedirectMap.map((option, i) => (
//                           <li
//                             key={i}
//                             onClick={() => handleSelect(option)}
//                             className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-darkGray"
//                           >
//                             {option}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ) : tags.length < 3 ? (
//                   <input
//                     type="text"
//                     value={tagInput}
//                     onChange={(e) => setTagInput(e.target.value)}
//                     onKeyDown={handleTagKeyDown}
//                     className="flex-1 w-full outline-none text-base bg-transparent"
//                     placeholder="Type a tag and press Enter"
//                   />
//                 ) : null}
//               </div>
//             </div>
//           </div>

//           {/* Description and Image Upload */}
//           <div className="flex gap-6 mb-4">
//             <div className="w-full">
// <input
//   type="text"
//   {...register('shortDesc', {
//     required: 'Description is required',
//   })}
//   placeholder="Short Description"
//   className="w-full border rounded-lg p-3 outline-none text-base"
// />
// {errors.shortDesc && (
//   <p className="text-red-500 text-sm">
//     {errors.shortDesc.message}
//   </p>
// )}
//             </div>

//             <div className="">
//               <input
//                 id="imageUpload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleBannerUpload}
//                 className="hidden"
//               />
//               <button
//                 type="button"
//                 onClick={() => document.getElementById('imageUpload')?.click()}
//                 className="flex items-center justify-center gap-2 px-4 py-3 w-48 bg-indigo text-white rounded-lg hover:bg-darkIndigo"
//               >
//                 <FiUpload />
//                 Upload Image
//               </button>
//             </div>
//           </div>

//           {/* Editor */}
//           <div
//             onClick={() => editor.chain().focus().run()}
//             className="border rounded-lg mt-4 p-3 h-[600px] overflow-y-auto prose max-w-none cursor-text"
//           >
//             <EditorContent editor={editor} className="focus:outline-none" />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="mt-6 px-6 py-3 bg-indigo text-white rounded-lg hover:bg-darkIndigo"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Right (Sidebar) */}
//         <div className="sticky top-[150px] self-start h-fit">
//           {/* Include MenuBar if needed */}
//           {uploadedImageUrl && (
//             <div className="mt-4">
//               <Image
//                 src={uploadedImageUrl}
//                 alt="Uploaded"
//                 width={2048}
//                 height={2048}
//                 className="rounded-lg shadow"
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Toast Container */}
//       <ToastContainer />
//     </form>
//   );
// };

// export default RichTextEditor;
