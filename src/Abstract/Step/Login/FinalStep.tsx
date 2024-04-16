import React from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import Link from 'next/link';
import { useTheme } from '@/Abstract/context/ThemeContext';

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
    text-decoration: none;
`;

export type FinalStepProps = {
    nextStep: () => void;
}


export const FinalStep = () => {
    const { useSingUp } = useTheme();

  return (
    <>
        <div>
            <h1 className={buttonAppMobileContentStyles}>¡Listo! Revisaremos tu información para activar tu cuenta.</h1>
        </div>
        <div>
            <h1 className={buttonAppMobileContentStyles}>¡Muchas Gracias!</h1>
        </div>
            
        <div className={loginContainerStyles}>
            <Link href="/" className={loginContentStyles}>
                <ButtonAppMobile title="Volver al Inicio" 
                    containerProps={{
                        onClick: useSingUp.pages.actions.returnInit,
                    }}
                />
            </Link>
        </div>
     </>
  );
}
