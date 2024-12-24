import React, { useEffect, useState } from 'react';

interface CameraProps {
  className?: string;
}

const Camera: React.FC<CameraProps> = ({ className }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isCordovaReady, setIsCordovaReady] = useState(false);

  useEffect(() => {
    const handleDeviceReady = () => {
      setIsCordovaReady(true);
      console.log('Cordova is ready');
    };

    if ((window as any).cordova) {
      document.addEventListener('deviceready', handleDeviceReady, false);
    }

    return () => {
      document.removeEventListener('deviceready', handleDeviceReady);
    };
  }, []);

  const handleTakePhoto = () => {
    if (!isCordovaReady) {
      console.log('Cordova is not ready yet');
      return;
    }

    const options = {
      quality: 100,
      // 使用 DATA_URL 而不是 FILE_URI
        destinationType: (window as any).Camera.DestinationType.DATA_URL,
        sourceType: (window as any).Camera.PictureSourceType.CAMERA,
      // destinationType: (window as any).Camera.DestinationType.DATA_URL,
      // sourceType: (window as any).Camera.PictureSourceType.CAMERA,
      // encodingType: (window as any).Camera.EncodingType.JPEG,
      // mediaType: (window as any).Camera.MediaType.PICTURE,
      // correctOrientation: true,
      // targetWidth: 1024,  // 设置合适的图片大小
      // targetHeight: 1024,
      // saveToPhotoAlbum: false
    };

    (window as any).navigator.camera.getPicture(
      (imageData: string) => {
        console.log('Photo captured as base64');
        // 直接使用 base64 数据
        setPhotoUrl(`data:image/jpeg;base64,${imageData}`);
      },
      (error: string) => {
        console.error('Failed to take photo:', error);
        alert('拍照失败：' + error);
      },
      options
    );
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <button
        onClick={handleTakePhoto}
        disabled={!isCordovaReady}
        className={`px-6 py-2 text-white rounded-lg transition-colors ${
          isCordovaReady 
            ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isCordovaReady ? '打开相机' : '正在初始化...'}
      </button>

      {photoUrl && (
        <div className="mt-4">
          { photoUrl}
          <img
            src={photoUrl}
            alt="拍摄的照片"
            className="max-w-full h-auto rounded-lg shadow-lg"
            style={{ maxHeight: '300px' }}
          />
        </div>
      )}

      {/* 添加调试信息 */}
      <div className="mt-2 text-sm text-gray-500">
        {photoUrl ? '照片已获取' : '等待拍照'}
      </div>
    </div>
  );
};

export default Camera;