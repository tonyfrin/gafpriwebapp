import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { PhotoForm } from '../../Form/PhotoForm';
import { useTheme } from '../../context/ThemeContext';
import { Error } from '../../Error';

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
    


export const SelfieStep = () => {
    const { useSingUp, useError } = useTheme();


    useEffect(() => {
        useSingUp.attributes.actions.validationUserPhoto(useSingUp.attributes.states.userPhoto);
    }, [ useSingUp.attributes.states.userPhoto ]); // eslint-disable-line

    useEffect(() => {
        useSingUp.attributes.actions.validationButtonStep8();
    }, [ useSingUp.attributes.states.userPhoto, useSingUp.attributes.states.userPhotoValid ]); // eslint-disable-line

    const next = async () => {

        if (useSingUp.attributes.actions.validationButtonStep8()) {
            try {
                const data = await useSingUp.api.actions.addUser();
                if(data && data.success){
                    useSingUp.pages.actions.onFinal();
                } else {
                    const error = []
                    error.push(data.message);
                    useError.actions.changeError(error);
                    useSingUp.pages.actions.returnInit();
                }
            } catch (error) {
                useError.actions.changeError(['Lo sentimos, ocurrió un error inesperado. Por favor, inténtalo de nuevo.']);
                useSingUp.pages.actions.returnInit();
            }
        }
    }
  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Tomate una Selfie</h1>
        </div>
            <Error 
                error={useError.states.error}
            />
            <div className={containerInput}>
                <PhotoForm
                    photo = {useSingUp.attributes.states.userPhoto}
                    changePhoto = {useSingUp.attributes.actions.changeUserPhoto}
                    changeError = {useError.actions.changeError}
                    setSubmitting = {useSingUp.attributes.actions.setSubmittingUser}
                    submitting = {useSingUp.attributes.states.submittingUser}
                    formId='userPhoto'
                />
            </div>
            
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-8'
                    }}
                />
            </div>
        </div>
     </>
  );
}
