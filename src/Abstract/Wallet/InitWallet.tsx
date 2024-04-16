import React from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../context/ThemeContext';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import Link from 'next/link';
import { WalletAccountAtrributesReturn } from '../states/wallet/useGafpriApiWalletAccount';
import { decimalFormatPriceConverter } from '../helpers';
import { EntityAttributesReturn } from '../states/user/useGafpriApiEntity';
import { Loading } from '../Loading';



const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const containerButtonCheckOutStyle = css`
    position: fixed;
    bottom: 63px;
    left: 0;
    right: 0;
    z-index: 998;
    display: flex;
    background-color: #ececec;
`

export const InitWallet = () => {
    const { siteOptions, useWallet } = useTheme();

    const entities = useWallet.attributes.states.entities;
    const countEntities = entities.length;
    const walletAccountCount = entities.reduce((acc, entity) => {
        return acc + entity.walletAccount.length;
    }, 0);

    return (
        <>
        {!useWallet.attributes.states.entityIsReady || !useWallet.attributes.states.walletAccountIsReady ? <Loading /> :  (
            <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '1em auto 100px auto',
            }}>
                <div><h1 className={title1AppStyles}>Billetera</h1></div>
                <div
                style={{
                    width: '90%',
                    margin: '1em auto',
                }}
                >
                    {entities.length > 0 && entities.map((entity, index) => {
                        if(entity.walletAccount.length === 0) return (<></>);
                            
                            const totalBalance = entity.walletAccount.reduce((acc, account) => {
                                return acc + parseFloat(account.available.toString());
                            }, 0);


                        return (
                            <>
                            <div
                                style={{
                                    margin: '2em auto',
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            
                                            width: '90%',
                                            margin: 'auto',
                                        
                                        }}
                                    ><span style={{
                                        fontSize: '1em',
                                        padding: '5px',
                                        margin: '0',
                                        fontFamily: 'Poppins',
                                        textAlign: 'left',
                                    }}>{entity.name}</span></div>
                                </div>

                                <div
                                    style={{
                                        backgroundColor: '#334779',
                                        borderRadius: '10px 10px 0 0',
                                        padding: '0.5em',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <span style={{
                                        fontSize: '0.8em',
                                        margin: '0',
                                        fontFamily: 'Poppins',
                                        textAlign: 'left',
                                        color: '#fff'
                                    }}>{`Cuenta en billetera(${entity.walletAccount.length})`}</span>
                                    <div style={{
                                        fontSize: '0.8em',
                                        fontWeight: '300',
                                        margin: '0',
                                        fontFamily: 'Poppins',
                                        textAlign: 'right',
                                        color: '#fff'
                                    }}>{decimalFormatPriceConverter(
                                        totalBalance || 0,
                                        siteOptions.DECIMAL_NUMBERS,
                                        siteOptions.CURRENCY_SYMBOL,
                                        siteOptions.CURRENCY_LOCATION
                                    )}</div>
                                </div>
                                
                                <div
                                    style = {{
                                        border: '1px solid #e6e6e6',
                                        padding: '10px',
                                        borderRadius: '0px 0px 15px 15px'
                                    }}
                                >
                                    {entity.walletAccount.length > 0 && entity.walletAccount.map((account: WalletAccountAtrributesReturn, index: number) => {
                                        return (
                                            <>
                                                <div
                                                    style={{
                                                        border: '0.5px solid #ebebeb',
                                                        borderRadius: '15px',
                                                        margin: '0px 0px 2% 0px',
                                                        textDecoration: 'none',
                                                        color: 'inherit'
                                                    }}
                                                    
                                                    key={`wallet-account-${index}`}
                                                >
                                                        <Link
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                margin: 'auto',
                                                                padding: '2em 2%',
                                                                textDecoration: 'none',
                                                                color: 'inherit'
                                                            }}
                                                            href="/billetera/cuenta/[id]" as={`/billetera/cuenta/${account.postsId}`}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontSize: '1em',
                                                                    margin: 'auto 0px',
                                                                    fontFamily: 'Poppins',
                                                                    textAlign: 'left',
                                                                    width: '70%'
                                                                }}
                                                            >{account.name}</span>
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    width: '30%',
                                                                    margin: 'auto 0px',
                                                                }}
                                                            >
                                                                <span style={{
                                                                    fontWeight: '600',
                                                                    textAlign: 'center',
                                                                }}>{`${decimalFormatPriceConverter(
                                                                    account.available || 0,
                                                                    siteOptions.DECIMAL_NUMBERS,
                                                                    siteOptions.CURRENCY_SYMBOL,
                                                                    siteOptions.CURRENCY_LOCATION
                                                                )} >`}</span>
                                                                <span
                                                                    style={{
                                                                        fontSize: '0.5em',
                                                                        textAlign: 'center'

                                                                    }}
                                                                >Saldo disponible</span>
                                                            </div>
                                                        </Link>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
                
                
                
                <Link style={{
                    display: 'flex',
                    margin: '1em',
                    textDecoration: 'none',
                }} href='/billetera/recarga'>
                    <ButtonAppMobile 
                        title="Recargar"
                    />
                </Link>
            </div>
            <div className={containerButtonCheckOutStyle}>
                <Link href='/billetera/enviar' style={{
                    textDecoration: 'none',
                    width: '45%',
                    margin: 'auto',
                }}>
                <ButtonAppMobile 
                    title="Enviar"
                    containerStyles={{
                        width: '100%'
                    }}
                    contentStyles={{
                        fontSize: '1.2em',
                        padding: '0.9em',
                    }}
                />
                </Link>
                <ButtonAppMobile 
                    title="Solicitar"
                    containerStyles={{
                        width: '45%'
                    }}
                    contentStyles={{
                        fontSize: '1.2em',
                        padding: '0.9em',
                    }}
                />
            </div>
        </>
        )}
    </>
    )

}