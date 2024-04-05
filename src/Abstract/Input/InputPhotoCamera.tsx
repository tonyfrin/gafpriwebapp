import React from 'react';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';

export const InputPhotoCamera: React.FC<{title: string, setPhotoData: (url: string) => void}> = ({title, setPhotoData}) => {

  const handleCapturePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      const video = document.createElement('video');
      video.srcObject = stream;

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Esperar un breve momento para asegurarnos de que la imagen se haya dibujado completamente
        setTimeout(() => {
          const dataUrl = canvas.toDataURL('image/jpeg');
          setPhotoData(dataUrl);
        }, 100); // Ajusta el tiempo según sea necesario
      }

      if (video.srcObject) {
        (video.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
      <ButtonAppMobile 
        containerProps={{
          onClick: handleCapturePhoto,
        }}
       title={title}
       containerStyles={{
        backgroundColor: '#314577'
       }}
      />
  );
};

