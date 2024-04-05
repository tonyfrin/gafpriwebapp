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
    
type LegalPhotoStepProps = {
    nextStep: () => void;
    attributes: UseGafpriAttributesSingUpReturn;
}


export const LegalPhotoStep = ({
    nextStep,
    attributes
}: LegalPhotoStepProps) => {

    useEffect(() => {
        attributes.actions.validationDocumentIdPhoto(attributes.states.documentIdPhoto);
    }, [attributes.states.documentIdPhoto]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep7();
    }, [ // eslint-disable-line
        attributes.states.documentIdPhoto,
        attributes.states.documentIdPhotoValid,
    ]);

    const next = () => {
        if (attributes.actions.validationButtonStep7()) {
            nextStep();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Sube una foto de tu documento</h1>
        </div>
            <div className={containerInput}>
                <InputPhotoCamera 
                    title='Tomar foto'
                    setPhotoData={attributes.actions.changeDocumentIdPhoto}
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
