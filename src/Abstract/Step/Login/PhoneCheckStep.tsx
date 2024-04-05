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


export type PhoneCheckStepProps = {
    pages: UseGafpriPagesSingUpReturn;
    attributes: UseGafpriAttributesSingUpReturn;
}


export const PhoneCheckStep = ({
    pages,
    attributes
}: PhoneCheckStepProps) => {

    const returnPhone = () => {
        attributes.actions.changePhone('');
        pages.actions.onPhone();
    }

    useEffect(() => {
        attributes.actions.validationCheckPhone(attributes.states.checkPhone, '0000');
    }, [attributes.states.checkPhone]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep4();
    }, [ attributes.states.checkPhone, attributes.states.checkPhoneValid ]); // eslint-disable-line

    const next = () => {
        if (attributes.actions.validationButtonStep4()) {
            pages.actions.onName();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Revisa tu bandeja de texto en tu teléfono</h1>
        </div>
        <ButtonEditInfo 
            content={attributes.states.phone}
            buttonProps={{
                buttonTitle: 'Editar',
                onClick: () => returnPhone()
            }}
        />
        <InputAppContainer 
            inputProps={{
                type: 'number',
                placeholder: 'Código de verificación',
                onChange: (e) => attributes.actions.changeCheckPhone(e.target.value)
            }}
            description="Te enviamos un código de verificación"
        />
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-4'
                    }}
                />
            </div>
        </div>
     </>
  );
}
