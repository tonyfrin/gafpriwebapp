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

type EmailStepProps = {
    nextStep: () => void;
    attributes: UseGafpriAttributesSingUpReturn;
}



export const EmailStep = ({
    nextStep,
    attributes
}: EmailStepProps) => {

    useEffect(() => {
        attributes.actions.validationEmail(attributes.states.email);
    }, [attributes.states.email]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep1();
    }, [ // eslint-disable-line
        attributes.states.email,
        attributes.states.emailValid,
    ]);

    const next = () => {
        if (attributes.actions.validationButtonStep1()) {
            nextStep();
        }
    }


  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Iniciemos con tu email</h1>
        </div>
            <InputAppContainer 
                inputProps={{
                    type: 'email',
                    placeholder: 'ejemplo@ejemplo.com',
                    onChange: (e) => attributes.actions.changeEmail(e.target.value)
                }}
                description="Te enviaremos un codigo de verificación"
            />
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-1'
                    }}
                />
            </div>
        </div>
     </>
  );
}
