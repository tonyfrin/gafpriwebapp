import React from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBicycleOutline } from 'react-icons/io5';
import { FiChevronLeft } from 'react-icons/fi';
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
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
`

const containerColumnEndStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  align-items: flex-start;
`

const arrowStyle = css`
    font-size: 1.5rem;
    color: #314577;
    margin: auto 0px;
`

const checkboxStyles = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #aaa;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:checked {
    border-color: #000;
    background-color: #000;
  }

  &:checked::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    margin: 2px;
  }
`;

const containerButtonCheckOutStyle = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 996;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    box-shadow: 0 0 6px 0 #20212447;
    padding: 1em 0px;
`

export type AddressListProps = {
  setModal: (value: boolean) => void;
  useCheckOut: UseGafpriCheckOutReturn;
}

export function AddressList({
    setModal,
    useCheckOut,
}: AddressListProps) {

  return (
    <> 
          <div
            style={{
              marginBottom: '220px'
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
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Envío</h1>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={useCheckOut.pages.actions.onInit}
                />
            </div>
            <div className={fila3}>
                <div style={{
                  width: '10%',
                }}>
                   <input
                      type="checkbox"
                     className={checkboxStyles}
                     checked={true}
                    />
                </div>
                <div style={{
                  width: '80%',
                  display: 'flex',
                }} className={containerColumnCenterStyles}>
                  <span className={priceTotalStyles}>Envío Gratis</span>
                  <span className={priceStyles}>Lo recibiras en menos de una hora</span>
                </div>
            </div>
            <div className={fila3}>
              <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Detalles de Envío</h1>
            </div>
            <div className={fila3}>
                <div style={{
                  width: '10%',
                }}>
                   <input
                      type="checkbox"
                     className={checkboxStyles}
                    />
                </div>
                <div style={{
                  width: '70%',
                  display: 'flex',
                }} className={containerColumnCenterStyles}>
                  <span className={priceStyles}>Av. 15 delicias con calle 74, Maracaibo, Zulia, Venezuela</span>
                </div>
                <div style={{
                  width: '10%',
                  display: 'flex',
                  margin: 'auto',
                }} className={containerColumnCenterStyles}>
                  <span style={{
                    fontSize: '0.6em',
                    color: '#314577',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                  }}>Editar</span>
                </div>
            </div>
            <div className={fila3}>
                <div style={{
                  width: '10%',
                }}>
                   <input
                      type="checkbox"
                     className={checkboxStyles}
                    />
                </div>
                <div style={{
                  width: '70%',
                  display: 'flex',
                }} className={containerColumnCenterStyles}>
                  <span className={priceStyles}>Av. 15 delicias con calle 74, Maracaibo, Zulia, Venezuela</span>
                </div>
                <div style={{
                  width: '10%',
                  display: 'flex',
                  margin: 'auto',
                }} className={containerColumnCenterStyles}>
                  <span style={{
                    fontSize: '0.6em',
                    color: '#314577',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                  }}>Editar</span>
                </div>
            </div>
            <div className={fila3}>
                <div style={{
                  width: '10%',
                }}>
                   <input
                      type="checkbox"
                     className={checkboxStyles}
                    />
                </div>
                <div style={{
                  width: '70%',
                  display: 'flex',
                }} className={containerColumnCenterStyles}>
                  <span className={priceStyles}>Av. 15 delicias con calle 74, Maracaibo, Zulia, Venezuela</span>
                </div>
                <div style={{
                  width: '10%',
                  display: 'flex',
                  margin: 'auto',
                }} className={containerColumnCenterStyles}>
                  <span style={{
                    fontSize: '0.6em',
                    color: '#314577',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                  }}>Editar</span>
                </div>
            </div>
            <div className={fila3}>
                <div style={{
                  width: '10%',
                }}>
                   <input
                      type="checkbox"
                     className={checkboxStyles}
                    />
                </div>
                <div style={{
                  width: '70%',
                  display: 'flex',
                }} className={containerColumnCenterStyles}>
                  <span className={priceStyles}>Av. 15 delicias con calle 74, Maracaibo, Zulia, Venezuela</span>
                </div>
                <div style={{
                  width: '10%',
                  display: 'flex',
                  margin: 'auto',
                }} className={containerColumnCenterStyles}>
                  <span style={{
                    fontSize: '0.6em',
                    color: '#314577',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                  }}>Editar</span>
                </div>
            </div>
            <div className={fila3}>
                <div style={{
                  width: '10%',
                }}>
                   <input
                      type="checkbox"
                     className={checkboxStyles}
                    />
                </div>
                <div style={{
                  width: '70%',
                  display: 'flex',
                }} className={containerColumnCenterStyles}>
                  <span className={priceStyles}>Av. 15 delicias con calle 74, Maracaibo, Zulia, Venezuela</span>
                </div>
                <div style={{
                  width: '10%',
                  display: 'flex',
                  margin: 'auto',
                }} className={containerColumnCenterStyles}>
                  <span style={{
                    fontSize: '0.6em',
                    color: '#314577',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                  }}>Editar</span>
                </div>
            </div>
            <div className={containerButtonCheckOutStyle}>
              <ButtonAppMobile 
                title="Continuar"
              />
               <ButtonAppMobile 
                title="Agregar Dirección"
                containerStyles={{
                  backgroundColor: '#314577'
                }}
                containerProps={{
                  onClick: () => useCheckOut.pages.actions.onAddressAdd()
                }}
              />
            </div>
          </div>
    </>
  );
}