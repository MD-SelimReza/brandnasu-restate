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
      return data.file.url;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
