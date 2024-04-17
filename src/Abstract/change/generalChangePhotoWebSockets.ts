// import axios, { AxiosRequestConfig } from 'axios';
import { ChangeEvent } from 'react';
import { getMimeTypeByExtension } from '../helpers';
import { UPLOAD_PHOTO_ROUTE } from '../constants';

export type GeneralChangePhotoProps = {
  e: ChangeEvent<HTMLInputElement>;
  changeError: (valueError: string[]) => void;
  setSubmitting: (valueSubmitting: boolean) => void;
  websocket: WebSocket; 
  clientId: string;
};

export const generalChangePhotoWebSockets = async ({
  e,
  changeError,
  setSubmitting,
  websocket,
  clientId,
}: GeneralChangePhotoProps): Promise<void> => {
  console.log('e.target.files', e.target.files);
  const newFile = e.target.files && e.target.files[0];

  if (!newFile) return;

  console.log('newFile', newFile);

  // Obtén el tipo MIME en función de la extensión del archivo
  const mimeType = getMimeTypeByExtension(newFile.name);
  if (!mimeType) {
    changeError([
      'El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.',
    ]);
    return;
  }

  setSubmitting(true);

  try {
    if(clientId !== ''){
      const fileReader = new FileReader();
      fileReader.onload = function () {
        if (fileReader.readyState === 2 && fileReader.result !== null) {
        
          const data = {
            clientId: clientId,
            fileArrayBuffer: new Uint8Array(fileReader.result as ArrayBuffer), // Convertir a Uint8Array
          };

          // Convertir el objeto a JSON y enviarlo a través del WebSocket
          websocket.send(JSON.stringify(data));
        }
      };
      fileReader.readAsArrayBuffer(newFile);
    }

    


  } catch (newErrorValue: any) {
    changeError([`${newErrorValue.message}`]);
    setSubmitting(false);
  }
};
