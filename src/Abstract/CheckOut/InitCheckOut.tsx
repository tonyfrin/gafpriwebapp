import React from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBicycleOutline } from 'react-icons/io5';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { UseGafpriCheckOutReturn } from '../states/checkout/useGafpriCheckOut';

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
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

export type InitCheckOutProps = {
  setModal: (value: boolean) => void;
  useCheckOut: UseGafpriCheckOutReturn;
}

export function InitCheckOut({
    setModal,
    useCheckOut,
}: InitCheckOutProps) {

  return (
    <> 
            <div>
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Formulario de Pago</h1>
            </div>
            <div>
              <div className={containerBottonCheckOutStyle}>
                <button className={buttonCheckOut}>
                  <IoBicycleOutline style={{margin: 'auto'}}/>
                  <span style={{margin: 'auto'}}>Delivery</span>
                </button>
                <button className={buttonCheckOut}>
                  <IoLocationOutline style={{margin: 'auto'}}/>
                  <span>Tienda</span>
                </button>
              </div>
              <div className={fila3}>
                <div style={{
                  width: '40%',
                }}>
                  <span className={priceTotalStyles}>Envío:</span>
                </div>
                <div style={{
                  width: '40%',
                }} className={containerColumnCenterStyles}>
                  <span className={priceStyles}>Av 15 delicias con calle 74, Maracaibo, Zulia, Venezuela</span>
                </div>
                <div style={{
                  width: '20%',
                }} className={containerColumnEndStyles}>
                  <button
                    onClick={() => useCheckOut.pages.actions.onAddressList()}
                  >
                    <IoIosAddCircleOutline style={{margin: 'auto', fontSize: '2em'}}/>
                  </button>
                </div>
                
              </div>
              <div className={fila3}>
                <div style={{
                  width: '40%',
                }}>
                  <span className={priceTotalStyles}>Metodo de Pago:</span>
                </div>
                <div style={{
                  width: '40%',
                }}>
                  <span className={priceStyles} style={{
                    color: '#c12429',
                  }}>Seleccionar pago</span>
                </div>
                <div style={{
                  width: '20%',
                }} className={containerColumnEndStyles}>
                  <button
                    onClick={() => useCheckOut.pages.actions.onPaymentList()}
                  >
                    <IoIosAddCircleOutline style={{margin: 'auto', fontSize: '2em'}}/>
                  </button>
                </div>
                
              </div>
              <div className={fila3}>
                <div style={{
                  width: '40%',
                }}>
                  <span className={priceTotalStyles}>Total compra:</span>
                </div>
                <div style={{
                  width: '40%',
                }}>
                  <span className={priceStyles} >$ 346.40</span>
                </div>
                <div style={{
                  width: '20%',
                }} className={containerColumnEndStyles}>
                  <button
                    onClick={() => useCheckOut.pages.actions.onSummary()}
                  >
                    <IoIosAddCircleOutline style={{margin: 'auto', fontSize: '2em'}}/>
                  </button>
                </div>  
              </div>
            </div>
            <div>
              <p style={{
                fontSize: '0.5em',
                textAlign: 'center',
              }}>Al tocar Pagar, acepta los Términos de venta.</p>
            </div>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ButtonAppMobile 
                title='Pagar'
              />
            </div>
    </>
  );
}