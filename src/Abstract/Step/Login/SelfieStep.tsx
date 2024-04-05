import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { InputPhotoCamera } from '../../Input/InputPhotoCamera';
import { UseGafpriAttributesSingUpReturn } from '../../states/useGafpriAttributesSingUp';

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
    
type SelfieStepProps = {
    nextStep: () => void;
    attributes: UseGafpriAttributesSingUpReturn;
}


export const SelfieStep = ({
    nextStep,
    attributes
}: SelfieStepProps) => {


    useEffect(() => {
        attributes.actions.validationUserPhoto(attributes.states.userPhoto);
    }, [ attributes.states.userPhoto ]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep8();
    }, [ attributes.states.userPhoto, attributes.states.userPhotoValid ]); // eslint-disable-line

    const next = () => {
        if (attributes.actions.validationButtonStep8()) {
            nextStep();
        }
    }
  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Sube una Selfie de ti</h1>
        </div>
            <div className={containerInput}>
                <InputPhotoCamera 
                    title='Subir foto'
                    setPhotoData={attributes.actions.changeUserPhoto}
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
