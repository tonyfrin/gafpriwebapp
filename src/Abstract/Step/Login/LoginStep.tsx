import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { useRouter } from 'next/router';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { UseGafpriLoginReturn } from '../../states/login/useGafpriLogin';


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

export type LoginStepProps = {
    useLogin: UseGafpriLoginReturn;
}


export const LoginStep = ({
    useLogin
}: LoginStepProps) => {
    const router = useRouter();

    useEffect(() => {
        useLogin.attributes.actions.validationUserName(useLogin.attributes.states.userName);
        useLogin.attributes.actions.validationPassword(useLogin.attributes.states.password);
    }, [useLogin.attributes.states.userName, useLogin.attributes.states.password]); // eslint-disable-line

    useEffect(() => {
        useLogin.attributes.actions.validationButton();
    }, [ useLogin.attributes.states.userName, useLogin.attributes.states.userNameValid, useLogin.attributes.states.password, useLogin.attributes.states.passwordValid ]); // eslint-disable-line

    const login = () => {
        if (useLogin.attributes.actions.validationButton()) {
            const valid = useLogin.data.actions.login();
        }
    }

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>Ingresa a tu cuenta</h1>
        </div>
            <div className={containerInput}>
                <InputAppContainer 
                    inputProps={{
                        type: 'name',
                        placeholder: 'Nombre de usuario',
                        onChange: (e) => useLogin.attributes.actions.changeUserName(e.target.value)
                    }}
                />
            </div>
            <div className={containerInput}>
                <InputAppContainer 
                    inputProps={{
                        type: 'password',
                        placeholder: 'Contraseña',
                        onChange: (e) => useLogin.attributes.actions.changePassword(e.target.value)
                    }}
                />
            </div>
        <div className={loginContainerStyles}>
            <div className={loginContentStyles}>
                <ButtonAppMobile title="Ingresar" 
                    containerProps={{
                        onClick: () => login(),
                        id: 'login-button'
                    }}
                />
            </div>
        </div>
     </>
  );
}
