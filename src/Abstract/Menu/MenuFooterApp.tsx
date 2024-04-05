import React from 'react';
import { css } from '@emotion/css';
import { IoWalletOutline } from 'react-icons/io5';
import { IoStorefrontOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { ButtonFooterApp } from '../Button/ButtonFooterApp';

const containerStyle = css`
    background-color: #ececec;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    border-top: 1px solid #e1e1e1
`

const contentStyle = css`
    display: flex;
    justify-content: space-evenly;
`

export const MenuFooterApp = () => {
    return (
        <div className={containerStyle}>
            <div className={contentStyle}>
                <ButtonFooterApp items={[
                    {
                        title: 'Tienda',
                        href: '/store',
                        icon: IoStorefrontOutline
                    },
                    {
                        title: 'Carrito',
                        href: '/cart',
                        icon: IoCartOutline
                    },
                    {
                        title: 'Billetera',
                        href: '/wallet',
                        icon: IoWalletOutline
                    },
                    {
                        title: 'Perfil',
                        href: '/profile',
                        icon: IoPersonOutline
                    }
                ]}/>
            </div>
        </div>
    )
}