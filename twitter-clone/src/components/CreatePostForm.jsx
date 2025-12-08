'use client';

import { useState } from 'react';
import PostButtonBar from './PostButtonBar';

const CreatePostForm = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageSelected = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    console.log('Archivo seleccionado:', file);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,

      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await res.json();
    console.log(data);
    setImageUrl(data.secure_url); // guardas el link final
  };

  const handleSubmit = async () => {
    await fetch('/api/tweets', {
      method: 'POST',
      body: JSON.stringify({ text, images: [imageUrl] }),
    });
  };

  return (
    <div>
      <PostButtonBar onImageSelected={handleImageSelected} />

      {imageUrl && <img src={imageUrl} className="mt-3 rounded" />}
    </div>
  );
};

export default CreatePostForm;
