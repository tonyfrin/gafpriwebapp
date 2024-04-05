'use client'
import { useState } from 'react';
import { SingleValue } from 'react-select';
import { generalValidationButtonNext, validationInput } from '../helpers';

type State = {
    email: string;
    emailValid: boolean;
    checkEmail: string;
    checkEmailValid: boolean;
    phone: string;
    phoneValid: boolean;
    checkPhone: string;
    checkPhoneValid: boolean;
    name: string;
    nameValid: boolean;
    lastName: string;
    lastNameValid: boolean;
    typeDocumentIdId: string;
    typeDocumentIdIdValid: boolean;
    typeDocumentIdIdDefault: SingleValue<{ value: string; label: string }>;
    typeDocumentIdIdOptions: { value: string; label: string }[];
    index: string;
    indexValid: boolean;
    indexDefault: SingleValue<{ value: string; label: string }>;
    indexOptions: { label: string; value: string }[];
    digit: string;
    digitValid: boolean;
    documentIdPhoto: string;
    documentIdPhotoValid: boolean;
    userPhoto: string;
    userPhotoValid: boolean;
};

type Actions = {
    validationEmail: (value: string) => boolean;
    validationCheckEmail: (value: string, codeApi: string) => boolean;
    validationPhone: (value: string) => boolean;
    validationCheckPhone: (value: string, codeApi: string) => boolean;
    validationName: (value: string) => boolean;
    validationLastName: (value: string) => boolean;
    validationTypeDocumentIdId: (value: string) => boolean;
    validationIndex: (value: string) => boolean;
    validationDigit: (value: string) => boolean;
    validationDocumentIdPhoto: (value: string) => boolean;
    validationUserPhoto: (value: string) => boolean;
    changeEmail: (value: string) => void;
    changeCheckEmail: (value: string) => void;
    changePhone: (value: string) => void;
    changeCheckPhone: (value: string) => void;
    changeName: (value: string) => void;
    changeLastName: (value: string) => void;
    changeTypeDocumentIdId: (value: SingleValue<{ value: string; label: string }>) => void;
    changeIndex: (value: SingleValue<{ value: string; label: string }>) => void;
    changeDigit: (value: string) => void;
    changeDocumentIdPhoto: (value: string) => void;
    changeUserPhoto: (value: string) => void;
    validationButtonStep1: () => boolean;
    validationButtonStep2: () => boolean;
    validationButtonStep3: () => boolean;
    validationButtonStep4: () => boolean;
    validationButtonStep5: () => boolean;
    validationButtonStep6: () => boolean;
    validationButtonStep7: () => boolean;
    validationButtonStep8: () => boolean;
};



export type UseGafpriAttributesSingUpReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesSingUp(): UseGafpriAttributesSingUpReturn {
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);

  const [checkEmail, setCheckEmail] = useState<string>('');
  const [checkEmailValid, setCheckEmailValid] = useState<boolean>(false);

  const [phone, setPhone] = useState<string>('');
  const [phoneValid, setPhoneValid] = useState<boolean>(false);

  const [checkPhone, setCheckPhone] = useState<string>('');
  const [checkPhoneValid, setCheckPhoneValid] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [nameValid, setNameValid] = useState<boolean>(false);

  const [lastName, setLastName] = useState<string>('');
  const [lastNameValid, setLastNameValid] = useState<boolean>(false);

  const [typeDocumentIdId, setTypeDocumentIdId] = useState<string>('');
  const [typeDocumentIdIdValid, setTypeDocumentIdIdValid] = useState(false);
  const [typeDocumentIdIdDefault, setTypeDocumentIdIdDefault] =
    useState<SingleValue<{ value: string; label: string }>>({ value: '', label: 'Elija el tipo de Documento' });
  const typeDocumentIdIdOptions = [
    { value: '2', label: 'Cedula de Identidad' },
    { value: '3', label: 'Pasaporte' },
  ];

  const [index, setIndex] = useState('');
  const [indexValid, setIndexValid] = useState(false);
  const [indexDefault, setIndexDefault] = useState<SingleValue<{ value: string; label: string }>>({
    value: '',
    label: 'Elija el index del Documento',
  });
  const indexOptions = [
    { label: 'V', value: 'V' },
    { label: 'E', value: 'E' },
    { label: 'No Aplica', value: 'null' },
  ];

  const [digit, setDigit] = useState('');
  const [digitValid, setDigitValid] = useState(false);

  const [documentIdPhoto, setDocumentIdPhoto] = useState('');
  const [documentIdPhotoValid, setDocumentIdPhotoValid] = useState(false);

  const [userPhoto, setUserPhoto] = useState('');
  const [userPhotoValid, setUserPhotoValid] = useState(false);


  const validationEmail = (value: string) => {
    const valid = validationInput(
      value,
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      true
    );
    if (valid !== emailValid) {
      setEmailValid(valid);
    }
    return valid;
  }

  const validationCheckEmail = (value: string, codeApi: string) => {
    const valid = `${value}` === `${codeApi}`;
    if (valid !== checkEmailValid) {
      setCheckEmailValid(valid);
    }
    return valid;
  }

  const validationPhone = (value: string) => {
    const valid = validationInput(
      value,
      /^[0-9]{10}/,
      true
    );
    if (valid !== phoneValid) {
      setPhoneValid(valid);
    }
    return valid;
  }

  const validationCheckPhone = (value: string, codeApi: string) => {
    const valid = `${value}` === `${codeApi}`;
    if (valid !== checkPhoneValid) {
      setCheckPhoneValid(valid);
    }
    return valid;
  }
  
  const validationName = (value: string) => {
    const valid = validationInput(
      value,
      /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,./&'@-\s]+$/,
      true
    );
    if (valid !== nameValid) {
      setNameValid(valid);
    }
    return valid;
  }

  const validationLastName = (value: string) => {
    const valid = validationInput(
      value,
      /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,./&'@-\s]+$/,
      true
    );
    if (valid !== lastNameValid) {
      setLastNameValid(valid);
    }
    return valid;
  }

  const validationTypeDocumentIdId = (value: string) => {
    const valid = value !== '';
    if (valid !== typeDocumentIdIdValid) {
      setTypeDocumentIdIdValid(valid);
    }
    return valid;
  }

  const validationIndex = (value: string) => {
    const valid = value !== '';
    if (valid !== indexValid) {
      setIndexValid(valid);
    }
    return valid;
  }

  const validationDigit = (value: string) => {
    const valid = validationInput(
      value,
      /^\d{1,12}(-\d{1,12})?$/,
      true
    );
    if (valid !== digitValid) {
      setDigitValid(valid);
    }
    return valid;
  }

  const validationDocumentIdPhoto = (value: string) => {
    const valid = value !== '';
    if (valid !== documentIdPhotoValid) {
      setDocumentIdPhotoValid(valid);
    }
    return valid;
  }

  const validationUserPhoto = (value: string) => {
    const valid = value !== '';
    if (valid !== userPhotoValid) {
      setUserPhotoValid(valid);
    }
    return valid;
  }


  //Change

  const changeEmail = (value: string) => {
    validationEmail(value);
    setEmail(value);
  }

  const changeCheckEmail = (value: string) => {
    validationCheckEmail(value, '0000');
    setCheckEmail(value);
  }

  const changePhone = (value: string) => {
    validationPhone(value);
    setPhone(value);
  }

  const changeCheckPhone = (value: string) => {
    validationCheckPhone(value, '0000');
    setCheckPhone(value);
  }

  const changeName = (value: string) => {
    validationName(value);
    setName(value);
  }

  const changeLastName = (value: string) => {
    validationLastName(value);
    setLastName(value);
  }

  const changeTypeDocumentIdId = (value: SingleValue<{ value: string; label: string }>) => {
    if (!value) {
      return;
    }
    validationTypeDocumentIdId(value.value);
    setTypeDocumentIdId(value.value);
    setTypeDocumentIdIdDefault(value);
  }

  const changeIndex = (value: SingleValue<{ value: string; label: string }>) => {
    if (!value) {
      return;
    }
    validationIndex(value.value);
    setIndex(value.value);
    setIndexDefault(value);
  }

  const changeDigit = (value: string) => {
    validationDigit(value);
    setDigit(value);
  }

  const changeDocumentIdPhoto = (value: string) => {
    validationDocumentIdPhoto(value);
    setDocumentIdPhoto(value);
  }

  const changeUserPhoto = (value: string) => {
    validationUserPhoto(value);
    setUserPhoto(value);
  }

  const validationButtonStep1 = () => {
    return generalValidationButtonNext({
      validations: [
        emailValid,
      ],
      inputId: 'btn-step-1',
    });
  }

  const validationButtonStep2 = () => {
    return generalValidationButtonNext({
      validations: [
        checkEmailValid,
      ],
      inputId: 'btn-step-2',
    });
  }

  const validationButtonStep3 = () => {
    return generalValidationButtonNext({
      validations: [
        phoneValid,
      ],
      inputId: 'btn-step-3',
    });
  }

  const validationButtonStep4 = () => {
    return generalValidationButtonNext({
      validations: [
        checkPhoneValid,
      ],
      inputId: 'btn-step-4',
    });
  }

  const validationButtonStep5 = () => {
    return generalValidationButtonNext({
      validations: [
        nameValid,
        lastNameValid,
      ],
      inputId: 'btn-step-5',
    });
  }

  const validationButtonStep6 = () => {
    return generalValidationButtonNext({
      validations: [
        typeDocumentIdIdValid,
        indexValid,
        digitValid,
      ],
      inputId: 'btn-step-6',
    });
  }

  const validationButtonStep7 = () => {
    return generalValidationButtonNext({
      validations: [
        documentIdPhotoValid,
      ],
      inputId: 'btn-step-7',
    });
  }

  const validationButtonStep8 = () => {
    return generalValidationButtonNext({
      validations: [
        userPhotoValid,
      ],
      inputId: 'btn-step-8',
    });
  }

  
 



  /**
   * Export
   *
   *
   */
  const states = {
    email,
    emailValid,
    checkEmail,
    checkEmailValid,
    phone,
    phoneValid,
    checkPhone,
    checkPhoneValid,
    name,
    nameValid,
    lastName,
    lastNameValid,
    typeDocumentIdId,
    typeDocumentIdIdValid,
    typeDocumentIdIdDefault,
    typeDocumentIdIdOptions,
    index,
    indexValid,
    indexDefault,
    indexOptions,
    digit,
    digitValid,
    documentIdPhoto,
    documentIdPhotoValid,
    userPhoto,
    userPhotoValid,
  };

  const actions = {
    validationEmail,
    validationCheckEmail,
    validationPhone,
    validationCheckPhone,
    validationName,
    validationLastName,
    validationTypeDocumentIdId,
    validationIndex,
    validationDigit,
    validationDocumentIdPhoto,
    validationUserPhoto,
    changeEmail,
    changeCheckEmail,
    changePhone,
    changeCheckPhone,
    changeName,
    changeLastName,
    changeTypeDocumentIdId,
    changeIndex,
    changeDigit,
    changeDocumentIdPhoto,
    changeUserPhoto,
    validationButtonStep1,
    validationButtonStep2,
    validationButtonStep3,
    validationButtonStep4,
    validationButtonStep5,
    validationButtonStep6,
    validationButtonStep7,
    validationButtonStep8,
  };

  return {
    states,
    actions,
  };
}
