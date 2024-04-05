import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { InputAppContainer } from '../../Input/InputAppContainer';
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

const options = [
    { value: '1', label: '+58' },
]

const selectStyles = css`
    width: 90%;
    margin: auto;
    font-family: 'Poppins', sans-serif;

    ::placeholder {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
`

type PhoneStepProps = {
    nextStep: () => void;
    attributes: UseGafpriAttributesSingUpReturn;
}




export const PhoneStep = ({
    nextStep,
    attributes
}: PhoneStepProps) => {

    useEffect(() => {
        attributes.actions.validationPhone(attributes.states.phone);
    }, [attributes.states.phone]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep3();
    }, [ attributes.states.phone, attributes.states.phoneValid ]); // eslint-disable-line

    const next = () => {
        if (attributes.actions.validationButtonStep3()) {
            nextStep();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Ahora sigue tu teléfono</h1>
        </div>
       
        <InputAppContainer 
            inputProps={{
                type: 'number',
                placeholder: '414 123 4567',
                onChange: (e) => attributes.actions.changePhone(e.target.value),
            }}
            description="Sin el 0 por delante. (Solo télefonos de Venezuela) Ejemplo: 4141234567"
        />
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-3'
                    }}
                />
            </div>
        </div>
     </>
  );
}
