import React, { use } from 'react';
import { css } from '@emotion/css';
import { IoWalletOutline } from 'react-icons/io5';
import { IoStorefrontOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { ButtonFooterApp } from '../Button/ButtonFooterApp';
import { useTheme } from '../context/ThemeContext';

const containerStyle = css`
    background-color: #ececec;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 997;
    border-top: 1px solid #e1e1e1
`

const contentStyle = css`
    display: flex;
    justify-content: space-evenly;
`

export const MenuFooterApp = () => {
    const { useCheckOut, useProfile, useWallet } = useTheme();

    const globalInfoReset = () => {
        useCheckOut.attributes.actions.infoReset();
        useProfile.pages.actions.infoReset();
        useWallet.actions.globalResetInfo();
    }

    return (
        <div className={containerStyle}>
            <div className={contentStyle}>
                <ButtonFooterApp items={[
                    {
                        title: 'Tienda',
                        href: '/tienda',
                        icon: IoStorefrontOutline,
                        action: globalInfoReset
                    },
                    {
                        title: 'Carrito',
                        href: '/carrito',
                        icon: IoCartOutline,
                        action: globalInfoReset
                    },
                    {
                        title: 'Billetera',
                        href: '/billetera',
                        icon: IoWalletOutline,
                        action: globalInfoReset
                    },
                    {
                        title: 'Perfil',
                        href: '/perfil',
                        icon: IoPersonOutline,
                        action: globalInfoReset
                    }
                ]}/>
            </div>
        </div>
    )
}