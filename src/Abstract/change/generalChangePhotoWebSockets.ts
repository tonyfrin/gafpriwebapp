// import axios, { AxiosRequestConfig } from 'axios';
import { ChangeEvent } from 'react';
import { getMimeTypeByExtension } from '../helpers';
import { UPLOAD_PHOTO_ROUTE } from '../constants';

export type GeneralChangePhotoProps = {
  e: ChangeEvent<HTMLInputElement>;
  changeError: (valueError: string[]) => void;
  setSubmitting: (valueSubmitting: boolean) => void;
  setPhoto: (valuePhoto: string) => void;
  validation?: (valueValid: string) => boolean;
  websocket: WebSocket; 
};

export const generalChangePhotoWebSockets = async ({
  e,
  changeError,
  setSubmitting,
  setPhoto,
  validation,
  websocket,
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
    const fileReader = new FileReader();
    fileReader.onload = function () {
      if (fileReader.readyState === 2 && fileReader.result !== null) {
        let blob;
        if (typeof fileReader.result === 'string') {
          blob = new Blob([fileReader.result], { type: mimeType });
        } else {
          blob = new Blob([new Uint8Array(fileReader.result)], { type: mimeType });
        }
        websocket.send(blob); // Enviar el Blob a través del WebSocket
      }
    };
    fileReader.readAsArrayBuffer(newFile);


    websocket.onmessage = function (event) {
      console.log('event', event);
      const data = JSON.parse(event.data);
      if (data.success && data.imageUrl) {
        const valid = validation ? validation(data.imageUrl) : true;
        if (valid) {
          setPhoto(data.imageUrl);
        }
      } else {
        changeError(['Error al cargar la imagen']);
      }
      setSubmitting(false);
    };

  } catch (newErrorValue: any) {
    changeError([`${newErrorValue.message}`]);
    setSubmitting(false);
  }
};
