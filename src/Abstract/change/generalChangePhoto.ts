import axios, { AxiosRequestConfig } from 'axios';
import { ChangeEvent } from 'react';
import { getMimeTypeByExtension } from '../helpers';
import { UPLOAD_PHOTO_ROUTE } from '../constants';

export type GeneralChangePhotoProps = {
  e: ChangeEvent<HTMLInputElement>;
  changeError: (valueError: string[]) => void;
  setSubmitting: (valueSubmitting: boolean) => void;
  setPhoto: (valuePhoto: string) => void;
  validation?: (valueValid: string) => boolean;
};

export const generalChangePhoto = async ({
  e,
  changeError,
  setSubmitting,
  setPhoto,
  validation,
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

  const formData = new FormData();
  formData.append('file', newFile);
  formData.append('fileName', newFile.name);
  formData.append('mimeType', mimeType);

  console.log('formData', formData.get('file'));

  if(formData.get('file') === null) {
    changeError([
      'El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.',
    ]);
    return;
  }

  setSubmitting(true);

  const config: AxiosRequestConfig = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  try {
    const response = await axios.post('/api/upload-image', formData, config);

    if (response.status === 200) {
      const valid = validation ? validation(response.data.imageUrl) : true;
      if (valid) {
        setPhoto(response.data.imageUrl);
      }
    }
    setSubmitting(false);
    // eslint-disable-next-line
  } catch (newErrorValue: any) {
    changeError([`${newErrorValue.message}`]);
    setSubmitting(false);
  }
};
