import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';
import { Layout } from './Layout';
import FondoLogin from '../assets/img/fondo-login.jpg'
import { ButtonAppMobile } from '../../Abstract/Button/ButtonAppMobile';
import { Error } from '../Error';
import { useTheme } from '../context/ThemeContext';


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

const linkStyles = css`
    display: contents;
    cursor: pointer;
    text-decoration: none;
`

export function MainLogin() {
    const { useError } = useTheme();
  return (
    <>
     <Layout
        containerStyles={{
            backgroundImage: FondoLogin.src,
            custom: `
                background-size: cover;
                background-repeat: no-repeat;
                background-position-x: 53%;
            `,
        }}
     >
        <>
            <Error 
                error={useError.states.error}
            />
            <div className={loginContainerStyles}>
                <div className={loginContentStyles}>
                    <Link href="login/acceder" className={linkStyles}>
                        <ButtonAppMobile title="Ya tengo cuenta" />
                    </Link>
                    <Link href="login/crear" className={linkStyles}>
                        <ButtonAppMobile title="Registrarme" 
                        containerStyles={{
                            backgroundColor: '#314577'
                        }}
                        />
                    </Link>
                </div>
            </div>
        </>
     </Layout>
    </>
  );
}
