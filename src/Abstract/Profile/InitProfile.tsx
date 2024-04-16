import React from 'react';
import { css, cx } from '@emotion/css';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { OrderAttributesReturn } from '../states/order/useGafpriApiOrder';

const photoProfile = css`
    border-radius: 100%;
    width: 20%;
    height: auto;
`

const fila3 = css`
  display: flex;
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #e1e1e1;
  padding: 1em 0px;
`

const priceTotalStyles = css`
  font-size: 0.8em;
  font-weight: 600;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const priceStyles = css`
  font-size: 0.8em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`


const containerColumnEndStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  align-items: flex-start;
`




export const InitProfile = () => {
    const { useLogin, useProfile } = useTheme();

   
    const menu: {name: string, action: () => void}[]= [
        {
            name: 'Pedidos',
            action: () => useProfile.pages.actions.onOrderList(),
        },
        {
            name: 'Direcciones',
            action: () => useProfile.pages.actions.onAddressList(),
        },
        {
            name: 'Email',
            action: () => useProfile.pages.actions.onEmail(),
        },
        {
            name: 'Teléfono',
            action: () => useProfile.pages.actions.onPhone(),
        },
        {
            name: 'Perfil Legal',
            action: () => useProfile.pages.actions.onLegal(),
        },
        {
            name: 'Cerrar sesion',
            action: () => useLogin.data.actions.logout(),
        }

    ]

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1em auto 100px auto',
        }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Image 
                    src={useLogin.data.states.currentUser?.photo || ''} 
                    alt="profile" width={200} height={200} 
                    className={photoProfile}
                />
            </div>
            <div>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontSize: '1.2em',
                    margin: '0.5em 0',
                }}>
                    {`${useLogin.data.states.currentUser?.name} ${useLogin.data.states.currentUser?.lastName}`}
                </h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ButtonAppMobile 
                    title='Editar perfil'
                />
            </div>
            <div
                style={{
                    margin: '1em',
                }}
            ></div>
            {menu.map((item, index) => (
                <div key={`menu-profile-${index}`}>
                    <div className={fila3}>
                        <div style={{
                        width: '80%',
                        }}>
                        <span className={priceTotalStyles}>{item.name}</span>
                        </div>
                        <div style={{
                        width: '20%',
                        }} className={containerColumnEndStyles}>
                        <button
                            onClick={item.action}
                        >
                            <IoIosAddCircleOutline style={{margin: 'auto', fontSize: '2em'}}/>
                        </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}