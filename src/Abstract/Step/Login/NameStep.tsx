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

const containerInput = css`
    margin: 20px auto;
`

export type NameStepProps = {
    nextStep: () => void;
    attributes: UseGafpriAttributesSingUpReturn;
}


export const NameStep = ({
    nextStep,
    attributes
}: NameStepProps) => {

    useEffect(() => {
        attributes.actions.validationName(attributes.states.name);
        attributes.actions.validationLastName(attributes.states.lastName);
    }, [attributes.states.name, attributes.states.lastName]); // eslint-disable-line

    useEffect(() => {
        attributes.actions.validationButtonStep5();
    }, [ attributes.states.name, attributes.states.nameValid, attributes.states.lastName, attributes.states.lastNameValid ]); // eslint-disable-line

    const next = () => {
        if (attributes.actions.validationButtonStep5()) {
            nextStep();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Ahora vamos con tu nombre</h1>
        </div>
            <div className={containerInput}>
                <InputAppContainer 
                    inputProps={{
                        type: 'name',
                        placeholder: 'Nombre',
                        onChange: (e) => attributes.actions.changeName(e.target.value)
                    }}
                />
            </div>
            <div className={containerInput}>
                <InputAppContainer 
                    inputProps={{
                        type: 'name',
                        placeholder: 'Apellido',
                        onChange: (e) => attributes.actions.changeLastName(e.target.value)
                    }}
                />
            </div>
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Continuar" 
                    containerProps={{
                        onClick: () => next(),
                        id: 'btn-step-5'
                    }}
                />
            </div>
        </div>
     </>
  );
}
