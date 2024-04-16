import React from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const arrowStyle = css`
    font-size: 1.5rem;
    color: #314577;
    margin: auto 0px;
`

export function InitTransfers() {
  const { useWallet, siteOptions } = useTheme();

  return (
    <>
          <div>
          <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1em 0px',
                width: '90%',
                margin: 'auto',
                borderBottom: '1px solid #e1e1e1'
            }}> 
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Transferencia de Saldo</h1>
                <Link href='/billetera' style={{
                  textDecoration: 'none',
                  display: 'flex',
                }}>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={useWallet.pagesTransfers.actions.returnInit}
                />
                </Link>
            </div>
            <div style={{
                  display: 'flex',
                  margin: '1em',
                  textDecoration: 'none',
              }}>
                  <ButtonAppMobile 
                      title="Enviar por Código"
                      containerProps={{
                        onClick: useWallet.pagesTransfers.actions.onCode,
                      }}
                  />
              </div>
              <div style={{
                  display: 'flex',
                  margin: '1em',
                  textDecoration: 'none',
              }}>
                  <ButtonAppMobile 
                      title="Enviar por Email"
                      containerProps={{
                        onClick: useWallet.pagesTransfers.actions.onBeneficiary
                      }}
                  />
              </div>
            
          
          
          </div>
    </>
  );
}