import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';


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


export function Final() {

  return (
    <>
        <>
          <main className={mainStyles}>
            <div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '20%',
                }}>
                   <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <IoCartOutline style={{
                      fontSize: '2em',
                    }}/>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                      <h1 className={title1AppStyles}>Gracias por su compra</h1>
                  </div>
                    <Link href="/tienda" style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                      <ButtonAppMobile 
                        title="Volver a la tienda"
                      />
                    </Link>
                </div>
            </div>
          </main>
        </>
    </>
  );
}