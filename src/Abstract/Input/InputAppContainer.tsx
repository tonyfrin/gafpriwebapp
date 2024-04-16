import React from 'react';
import { css, cx } from '@emotion/css';
import { InputApp } from './InputApp';

export type InputAppContainerStylesProps = {
    display?: string;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
    margin?: string;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    textAlign?: 'center' | 'left' | 'right';    
    customStyles?: string;
}

const inputAppContainerStyles = (styles: InputAppContainerStylesProps) => css`
    display: ${styles.display || 'flex'};
    justify-content: ${styles.justifyContent || 'center'};
    align-items: ${styles.alignItems || 'center'};
    margin: ${styles.margin || 'auto'};
    flex-direction: ${styles.flexDirection || 'column'};
    text-align: ${styles.textAlign || 'center'};
    ${styles.customStyles || ''}
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
    containerStyles?: InputAppContainerStylesProps;
}



export const InputAppContainer = ({
    inputProps,
    description,
    containerStyles = {},
}: InputAppContainerProps) => {
    return (
        <>
            <div className={cx(inputAppContainerStyles(containerStyles))}>
                <InputApp {...inputProps} />
                {description && <p className={inputAppTitleStyles}>{description}</p>}
            </div>
        </>
    );
};
