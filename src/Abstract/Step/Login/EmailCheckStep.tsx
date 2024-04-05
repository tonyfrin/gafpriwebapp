import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { ButtonEditInfo } from '../../Button/ButtonEditInfo';
import { UseGafpriAttributesSingUpReturn } from '../../states/useGafpriAttributesSingUp';
import { UseGafpriPagesSingUpReturn } from '../../states/useGafpriPagesSingUp';

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

type EmailCheckStepProps = {
    pages: UseGafpriPagesSingUpReturn;
    attributes: UseGafpriAttributesSingUpReturn;
}



export const EmailCheckStep = ({
    pages,
    attributes
}: EmailCheckStepProps) => {

    const returnEmail = () => {
        attributes.actions.changeEmail('');
        pages.actions.onEmail();
    }

    useEffect(() => {
        attributes.actions.validationCheckEmail(attributes.states.checkEmail, '0000');
    }, [attributes.states.checkEmail]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep2();
    }, [ attributes.states.checkEmail, attributes.states.checkEmailValid ]); // eslint-disable-line

    const next = () => {
        if (attributes.actions.validationButtonStep2()) {
            pages.actions.onPhone();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Revisa tu bandeja de correo electrónico</h1>
        </div>
        <ButtonEditInfo 
            content={attributes.states.email}
            buttonProps={{
                buttonTitle: 'Editar',
                onClick: () => returnEmail()
            }}
        />
        <InputAppContainer 
            inputProps={{
                type: 'number',
                placeholder: 'Código de verificación',
                onChange: (e) => attributes.actions.changeCheckEmail(e.target.value)
            }}
            description="Te enviamos un código de verificación"
        />
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-2',
                    }}
                />
            </div>
        </div>
     </>
  );
}
