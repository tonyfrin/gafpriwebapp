import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { InputPhotoCamera } from '../../Input/InputPhotoCamera';
import { useTheme } from '../../context/ThemeContext'
import { PhotoForm } from '@/Abstract/Form/PhotoForm';
import { Error } from '@/Abstract/Error';

const buttonAppMobileContentStyles = css`
    font-size: 1.5em;
    padding: 0.9em;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`

const loginContainerStyles = css`
    position: fixed;
    bottom: 10%;
    left: 0;
    right: 0;
    z-index: 996;
`;

const loginContentStyles = css`
    display: flex;
    flex-direction: column;
`;

const containerInput = css`
    margin: 20px auto;
    display: flex;
`


export const LegalPhotoStep = () => {
    const { useSingUp, useError } = useTheme();

    useEffect(() => {
        useSingUp.attributes.actions.validationDocumentIdPhoto(useSingUp.attributes.states.documentIdPhoto);
    }, [useSingUp.attributes.states.documentIdPhoto]); // eslint-disable-line

    useEffect(() => {
        useSingUp.attributes.actions.validationButtonStep7();
    }, [ // eslint-disable-line
        useSingUp.attributes.states.documentIdPhoto,
        useSingUp.attributes.states.documentIdPhotoValid,
    ]);

    const next = () => {
        if (useSingUp.attributes.actions.validationButtonStep7()) {
            useSingUp.pages.actions.onSelfie();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Sube una foto de tu documento</h1>
        </div>
            <Error 
                error={useError.states.error}
            />
            <div className={containerInput}>
                <PhotoForm
                    photo = {useSingUp.attributes.states.documentIdPhoto}
                    changePhoto = {useSingUp.attributes.actions.changeDocumentIdPhoto}
                    changeError = {useError.actions.changeError}
                    setSubmitting = {useSingUp.attributes.actions.setSubmittingDocumentId}
                    submitting = {useSingUp.attributes.states.submittingDocumentId}
                    formId='documentId'
                />
            </div>
            
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: next,
                        id: 'btn-step-7'
                    }}
                />
            </div>
        </div>
     </>
  );
}
