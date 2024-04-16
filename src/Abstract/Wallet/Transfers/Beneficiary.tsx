import React, { use, useEffect } from 'react';;
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { FiChevronLeft } from 'react-icons/fi';
import { InputAppContainer } from '../../Input/InputAppContainer';


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

type items = {
  name: string;
  email: string;
}

export function Beneficiary() {
  const { useWallet, siteOptions } = useTheme();

  const items: items[] = [
    {
      name: 'Anthony Frassino',
      email: 'tonyfrin@gmail.com',
    },
    {
      name: 'Jose Gonzalez',
      email: 'josegonzalez@gmail.com',
    },
    {
      name: 'Juan Perez',
      email: 'juanperez@gmail.com',
    },
    {
      name: 'Maria Rodriguez',
      email: 'mariarodriguez@gmail.com',
    },
    {
      name: 'Pedro Martinez',
      email: 'pedromartinez',
    },
  ]

  const itemsFilter = items.filter(item => item.email.includes(useWallet.attributesTransfers.states.email));

  const next = (beneficiary: items) => {
    useWallet.attributesTransfers.actions.setBeneficiary(beneficiary);
    useWallet.pagesTransfers.actions.onInfo();
  }

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
                <div style={{
                  textDecoration: 'none',
                  display: 'flex',
                }}>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={useWallet.pagesTransfers.actions.returnInit}
                />
                </div>
            </div>
            <div style={{
              margin: '1em 0px'
            }}>
            <div><h1 className={title1AppStyles} style={{
              textAlign: 'center',
              padding: '0.3em',
              fontSize: '1em',
            }}>Elegir Beneficiario</h1></div>
                  <InputAppContainer 
                    inputProps={{
                      placeholder: 'Correo Electrónico',
                      type: 'text',
                      value: useWallet.attributesTransfers.states.email,
                      onChange: (e) => useWallet.attributesTransfers.actions.setEmail(e.target.value),
                    }}
                  />
             </div>
             <div>
             <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '1em'}} className={title1AppStyles}>{
                itemsFilter && itemsFilter.length > 0 ? 'Recurrente' : 'Agrega un nuevo beneficiario'
              
             }</h1>
            <div style={{
              border: '1px solid #e1e1e1',
              borderRadius: '10px',
              margin: 'auto',
              width: '90%',
              overflow: 'auto',
              height: '40vh',
              padding: '0.6em 0px',
            }}>
              {itemsFilter && itemsFilter.length > 0 ? itemsFilter.map((item, index) => (
                <div key={`bene-${index}`} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: '#ebebeb',
                  padding: '5px',
                  borderRadius: '10px',
                  margin: '5px',
                  cursor: 'pointer'
                }}
                onClick={() => next(item)}
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
                    }}>{item.name.substring(0, 1)}</span>
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
                    }}>{item.name}</span>
                    <span style={{
                      fontSize: '0.6em',
                      fontWeight: 400,
                    }}>{item.email}</span>
                  </div>
                </div>)): 
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: '#ebebeb',
                    padding: '5px',
                    borderRadius: '10px',
                    margin: '5px',
                    cursor: 'pointer'
                  }}>
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
                      }}>+</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'left',
                      width: '80%'
                    }}>
                      <span style={{
                        fontSize: '0.6em',
                        fontWeight: 400,
                      }}>{'Enviar saldo a:'}</span>
                      <span style={{
                        fontSize: '0.8em',
                        fontWeight: 600,
                      }}>{`${useWallet.attributesTransfers.states.email}   >>`}</span>
                    </div>
                  </div>
                 
              
              
              }

            </div>
               
                
            </div>
            
          
          
          </div>
    </>
  );
}