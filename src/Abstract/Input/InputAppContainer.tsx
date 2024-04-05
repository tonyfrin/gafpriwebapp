import React from 'react';
import { css } from '@emotion/css';
import { InputApp } from './InputApp';

const inputAppContainerStyles = css`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    align-items: center;
`

const inputAppTitleStyles = css`
    font-size: 0.7rem;
    font-weight: 600;
    color: #a0a0a0;
    font-family: 'Poppins', sans-serif;
    margin: 2px 0px;
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

type InputAppContainerProps = {
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
    description?: string;
}



export const InputAppContainer = ({
    inputProps,
    description
}: InputAppContainerProps) => {
    return (
        <>
            <div className={inputAppContainerStyles}>
                <InputApp {...inputProps} />
                {description && <p className={inputAppTitleStyles}>{description}</p>}
            </div>
        </>
    );
};
