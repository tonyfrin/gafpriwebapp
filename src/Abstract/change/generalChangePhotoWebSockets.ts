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
  from: string;
};

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function textToArrayBuffer(text: string): ArrayBuffer {
  const binaryString = window.atob(text.split(',')[1]);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export const generalChangePhotoWebSockets = async ({
  e,
  changeError,
  setSubmitting,
  websocket,
  clientId,
  from
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
      fileReader.onload = function (event) {
        if (fileReader.readyState === 2 && fileReader.result !== null)

            if(event.target !== null){

              let arrayBuffer: ArrayBuffer;
              if (typeof fileReader.result === 'string') {
                arrayBuffer = textToArrayBuffer(fileReader.result);
              } else {
                arrayBuffer = fileReader.result as ArrayBuffer;
              }

              // Convertir el ArrayBuffer a una cadena base64
              const base64String = arrayBufferToBase64(arrayBuffer);

              const data = {
                clientId: clientId,
                fileArrayBuffer: base64String,
                from
              };


              // Convertir el objeto a JSON y enviarlo a través del WebSocket
              websocket.send(JSON.stringify(data));
            } else{
              changeError(['Error al leer el archivo']);
              setSubmitting(false);
            }
      };
      fileReader.readAsArrayBuffer(newFile);
    }




   
    


  } catch (newErrorValue: any) {
    changeError([`${newErrorValue.message}`]);
    setSubmitting(false);
  }
};
