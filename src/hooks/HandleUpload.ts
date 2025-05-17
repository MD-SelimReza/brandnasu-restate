import { uploadImageToR2 } from '@/lib/upload';

export const handleBannerUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  await uploadImageToR2(file);
};
