import React from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import Image from 'next/image';
import { InputApp } from '../Input/InputApp';
import { Select } from '../Select/Select';

const sectionStyles = css`
  margin-bottom: 150px;
`

const productos = css`
  display: block;
  margin-bottom: 1em;
`

const fila = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Tres columnas */
  gap: 5px; /* Espacio entre productos */
`

const fila3 = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 5px; /* Espacio entre productos */
`

const producto = css`
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  width: 90%;
  margin: auto;
`

const imgContainerStyles = css`
  margin: 0 auto;
`

const imgStyles = css`
  object-fit: contain;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`

const priceStyles = css`
  font-size: 0.8em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const priceTotalStyles = css`
  font-size: 0.8em;
  font-weight: 600;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const title1AppStyles = css`
  font-size: 0.8em;
  padding: 0.6em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const containerInfoStyles = css`
  display: flex;
  margin: auto;
`

const containerOptionsStyles = css`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 1em 0px;
  border-bottom: 1px solid #ebebeb;
`

const linkStyles = css`
  font-size: 0.8em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: #1f2024;
`

const contentOptionsStyles = css`
  display: flex;
  justify-content: space-between;
`


type Items = {
  title: string;
  description?: string;
  img: string;
  href: string;
}

type BoxCartProps = {
  items: Items[];
  buttonProps?: boolean;
}

export function BoxCart({
  items,
  buttonProps = true,
}: BoxCartProps) {
  return (
        <>
        <div className={sectionStyles}>
          <div>
            {items.map((item, index) => (
              <section className={productos} key={`box-cart${index}`}>
                <div className={producto}>
                  <div className={fila}>
                    <div className={imgContainerStyles}>
                        <Image src={item.img} alt={item.title} className={imgStyles} width={50} height={50}/>
                    </div>
                    <div>
                      <h3 className={title1AppStyles}>{item.title}</h3>
                    </div>
                  </div>
                  <div className={fila3}>
                    <div className={containerInfoStyles}>
                        <Select 
                          options={[
                            { value: '0', label: '0' },
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                            { value: '6', label: '6' },
                            { value: '7', label: '7' },
                            { value: '8', label: '8' },
                            { value: '9', label: '9' },
                            { value: '10', label: '10' },
                          ]}
                          value="1"
                          onChange={(value) => console.log(value)}
                        />
                    </div>
                    <div className={containerInfoStyles}>
                      <span className={priceStyles}>$ 10.00</span>
                    </div>
                    <div className={containerInfoStyles}>
                      <span className={priceTotalStyles}>$ 10.00</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className={containerOptionsStyles}>
            <span className={priceTotalStyles}>Envío:</span>
            <span className={priceStyles}>¡Lo recibes en menos de una hora!</span>
          </div>
          <div className={containerOptionsStyles}>
            <span className={priceTotalStyles}>Retirar:</span>
            <span className={linkStyles}>Buscar tienda</span>
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