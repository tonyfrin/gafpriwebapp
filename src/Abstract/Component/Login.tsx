import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';
import { Layout } from './Layout';
import FondoLogin from '../assets/img/fondo-login.jpg'
import { ButtonAppMobile } from '../../Abstract/Button/ButtonAppMobile';


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

export default function Login() {
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
            <div className={loginContainerStyles}>
                <div className={loginContentStyles}>
                    <ButtonAppMobile title="Ya tengo cuenta" />
                    <Link href="micuenta/registro" className={linkStyles}>
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
