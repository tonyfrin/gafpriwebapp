import React, { use, useEffect } from 'react';;
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { SelectApp } from '../../Select/SelectApp';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { decimalFormatPriceConverter } from '../../helpers';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';


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

export function SuccessTransfersZelle() {
  const { useWallet, siteOptions } = useTheme();
  

  return (
    <>
          <div
            style={{
              marginBottom: '100px'
            }}
          >
            <div
              style={{
                textAlign: 'center',
              }}
            ><h1 className={title1AppStyles} style={{
              textAlign: 'center',
            }}>Confirmación</h1></div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1em',
                textDecoration: 'none',
              }}
            >
              <FaCheckCircle style={{
                fontSize: '3em',
                color: '#324375'
                }}/>
            </div>
                  <div
                      style={{
                        margin: '0.5em auto',
                      }}
                    >
                      <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>{'Hemos recibido tu solicitud de transferencia Zelle por:'}</h1>
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
                          useWallet.attributesTransfersZelle.states.amount || 0,
                          siteOptions.DECIMAL_NUMBERS,
                          siteOptions.CURRENCY_SYMBOL,
                          siteOptions.CURRENCY_LOCATION
                        )}</span>
                  </div>
                  <div
                      style={{
                        margin: '0.5em auto',
                      }}
                    >
                      <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>para: </h1>
                </div>
                 <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: '#ebebeb',
                  padding: '5px',
                  borderRadius: '10px',
                  margin: '5px auto',
                  cursor: 'pointer',
                  width: '70%',
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
                    }}>{useWallet.attributesTransfersZelle.states.beneficiary?.name.substring(0, 1)}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    width: '80%',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      fontSize: '0.8em',
                      fontWeight: 600,
                    }}>{useWallet.attributesTransfersZelle.states.beneficiary?.name}</span>
                    <span style={{
                      fontSize: '0.6em',
                      fontWeight: 400,
                    }}>{useWallet.attributesTransfersZelle.states.beneficiary?.email}</span>
                  </div>
                </div>
                <div
                      style={{
                        margin: '2em auto 0.5em',
                      }}
                    >
                      <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>{'Recibirá un correo al ser completada la transferencia.'}</h1>
                </div>
                <div
                      style={{
                        margin: '0.5em auto',
                      }}
                    >
                      <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}><span style={{fontWeight: 600}}>Nota: </span>Las transferencias Zelle se completan en el horario comprendido de 8:00am a 6:00pm de lunes a sabado.</h1>
                </div>
                  
                  

              <Link 
                  href='/billetera'
                  style={{
                    display: 'flex',
                    margin: '3em 1em',
                    textDecoration: 'none',
                }}
              >
                  <ButtonAppMobile 
                      title="Aceptar"
                      containerProps={{
                        id: 'amount-recharge-button',
                        onClick: useWallet.pagesTransfersZelle.actions.returnInit,
                      }}
                  />
              </Link>
          
          </div>
    </>
  );
}