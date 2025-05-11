export const uploadImageToR2 = async (file: File): Promise<string | null> => {
  if (!file) return null;

  const formData = new FormData();
  formData.append('files', file);

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (res.ok && data.file?.url) {
      return data.file.url; // ✅ Return the uploaded file URL
    } else {
      console.error('Upload failed:', data.message);
      return null;
    }
  } catch (error) {
    console.error('Upload Error:', error);
    return null;
  }
};
