import React, { useRef, useState } from 'react';



const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // @ts-ignore
    if (navigator.camera) {
      // Cordova 相机上传
      const options = {
        quality: 50,
        destinationType: (window as any).Camera.DestinationType.DATA_URL,
        sourceType: (window as any).Camera.PictureSourceType.PHOTOLIBRARY,
      };
      // @ts-ignore
      navigator.camera.getPicture(
        (imageData: string) => {
          setImage(`data:image/jpeg;base64,${imageData}`);
        },
        (error: string) => {
          console.error('Camera error:', error);
          // 失败后回退到浏览器上传
          fileInputRef.current?.click();
        },
        options
      );
    } else {
      // 浏览器文件上传
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleUpload}
        className={'mb-8 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors'}
      >
        上传背景图片
      </button>
      {image && (
        <div className={'mt-4 rounded-lg shadow-md'}>
          <img 
            src={image} 
            alt="上传的图片"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}
        <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;