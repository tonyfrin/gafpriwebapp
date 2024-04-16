import React, { use, useEffect } from 'react';;
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { SelectApp } from '../../Select/SelectApp';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { decimalFormatPriceConverter } from '../../helpers';
import { FiChevronLeft } from 'react-icons/fi';


const mainStyles = css`
  margin-bottom: 100px;
`

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const containerButtonCheckOutStyle = css`
    position: fixed;
    bottom: 65px;
    left: 0;
    right: 0;
    z-index: 996;
    display: flex;
    background-color: #f9f9f9;
    box-shadow: 0 0 6px 0 #20212447;
`

const containerModalStyle = css`
  background-color: #ececec;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-top: 1px solid #e1e1e1;
  width: 100%;
  height: 100%;
  top: 20%;
  border-radius: 10px;
`

const containerBottonCheckOutStyle = css`
  display: flex;
  padding: 1em;
`

const buttonCheckOut = css`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1em;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  font-weight: 600;
  color: #1f2024;
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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

const containerColumnCenterStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
`

const containerColumnEndStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  align-items: flex-start;
`

const textInfoStyles = css`
  font-size: 0.7em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const textInfoTitleStyles = css`
  font-size: 0.6em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  color: #9e9e9e;
`

const textResumeStyles = css`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const arrowStyle = css`
    font-size: 1.5rem;
    color: #314577;
    margin: auto 0px;
`

export function ConfirmationTransfers() {
  const { useWallet, siteOptions } = useTheme();

  const returnToAmount = () => {
    useWallet.attributesTransfers.actions.setAccount(null);
    useWallet.attributesTransfers.actions.setAmount('');
    useWallet.pagesTransfers.actions.onInfo();
  }
  

  return (
    <>
          <div
            style={{
              marginBottom: '100px'
            }}
          >
          <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1em 0px',
                width: '90%',
                margin: 'auto',
                borderBottom: '1px solid #e1e1e1'
            }}> 
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Transferencia de Saldo</h1>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={returnToAmount}
                />
            </div>
            <div><h1 className={title1AppStyles}>Confirmación</h1></div>
                  <div
                      style={{
                        margin: '0.5em auto',
                      }}
                    >
                      <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '1em', fontWeight: 400}} className={title1AppStyles}>Enviar a:</h1>
                  </div>
                 <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: '#ebebeb',
                  padding: '5px',
                  borderRadius: '10px',
                  margin: '5px auto',
                  cursor: 'pointer',
                  width: '85%',
                }}
                
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '100%',
                    background: '#324d7f',
                    margin: '0 10px',
                    display: 'flex',
                  }}>
                    <span style={{
                      color: '#FFF',
                      fontSize: '1.5em',
                      margin: 'auto',
                      textTransform: 'uppercase',
                    }}>{useWallet.attributesTransfers.states.beneficiary?.name.substring(0, 1)}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    width: '80%'
                  }}>
                    <span style={{
                      fontSize: '0.8em',
                      fontWeight: 600,
                    }}>{useWallet.attributesTransfers.states.beneficiary?.name}</span>
                    <span style={{
                      fontSize: '0.6em',
                      fontWeight: 400,
                    }}>{useWallet.attributesTransfers.states.beneficiary?.email}</span>
                  </div>
                  </div>
                  <div
                    style={{
                      margin: '0.5em auto 0px auto',
                    }}
                  >
                    <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>Monto:</h1>
                  </div>
                  <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '85%',
                    margin: 'auto',
                    textAlign: 'center'
                  
                  }}
                >
                  <span className={textResumeStyles} style={{fontWeight: '600', fontSize: '2em', textAlign: 'center'}}>{decimalFormatPriceConverter(
                      useWallet.attributesTransfers.states.amount || 0,
                      siteOptions.DECIMAL_NUMBERS,
                      siteOptions.CURRENCY_SYMBOL,
                      siteOptions.CURRENCY_LOCATION
                    )}</span>
                </div>
                <div
                    style={{
                      margin: '0.5em auto 0px auto',
                    }}
                  >
                    <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>Desde:</h1>
                  </div>
                  <div
                    style={{
                      margin: '0.5em auto 0px auto',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '1em', fontWeight: 600}} className={title1AppStyles}>{useWallet.attributesTransfers.states.account?.name}</h1>
                    <span
                      style={{
                        textAlign: 'center',
                        color: '#000',
                        fontSize: '0.7em',
                        fontWeight: 400,
                      }}
                    >Saldo: {decimalFormatPriceConverter(
                      useWallet.attributesTransfers.states.account?.balance || 0,
                      siteOptions.DECIMAL_NUMBERS,
                      siteOptions.CURRENCY_SYMBOL,
                      siteOptions.CURRENCY_LOCATION
                    )}</span>
                  </div>

              <div style={{
                  display: 'flex',
                  margin: '1em',
                  textDecoration: 'none',
              }}>
                  <ButtonAppMobile 
                      title="Enviar"
                      containerProps={{
                        id: 'amount-recharge-button',
                      }}
                  />
              </div>
          
          </div>
    </>
  );
}