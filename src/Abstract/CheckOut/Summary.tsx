import React, {useState} from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { FiChevronLeft } from 'react-icons/fi';
import { UseGafpriCheckOutReturn } from '../states/checkout/useGafpriCheckOut';
import { InputAppContainer } from '../Input/InputAppContainer';
import { SelectApp  } from '../Select/SelectApp';

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

const containerOptionsStyles = css`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 1em 0px;
  border-bottom: 1px solid #ebebeb;
`

const contentOptionsStyles = css`
  display: flex;
  justify-content: space-between;
`


export type SummaryProps = {
  setModal: (value: boolean) => void;
  useCheckOut: UseGafpriCheckOutReturn;
}

interface Location {
  latitude: number;
  longitude: number;
}

export function Summary({
    setModal,
    useCheckOut,
}: SummaryProps) {

  return (
    <> 
          <div
            style={{
              marginBottom: '120px'
            }}
          >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1em 0px',
                width: '90%',
                margin: 'auto',
            }}> 
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Detalle de compra</h1>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={useCheckOut.pages.actions.onAddressList}
                />
            </div>

            <div className={containerOptionsStyles}>
            <div className={contentOptionsStyles}>
              <span className={priceStyles}>Subtotal:</span>
              <span className={priceStyles}>$ 100.00</span>
            </div>
            <div className={contentOptionsStyles}>
              <span className={priceStyles}>Envío:</span>
              <span className={priceStyles}>Gratis</span>
            </div>
            <div className={contentOptionsStyles}>
              <span className={priceTotalStyles}>Total:</span>
              <span className={priceTotalStyles}>$ 100.00</span>
            </div>
          </div>
             
          </div>
    </>
  );
}