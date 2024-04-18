import React, { use, useEffect } from 'react';;
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { SelectApp } from '../../Select/SelectApp';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { decimalFormatPriceConverter } from '../../helpers';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import { Loading } from '../../Loading';
import { Error } from '../../Error/Error';


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

export function AmountRecharge() {
  const { useWallet, siteOptions, useError } = useTheme();

  const next = () => {
    if(useWallet.attributesRecharge.actions.validationAmountButton()){
      useWallet.pagesRecharge.actions.onInfo();
    }
  }

  useEffect(() => {
    useWallet.attributesRecharge.actions.validationAmountButton();
  }, [useWallet.attributesRecharge.states.amount, useWallet.attributesRecharge.states.paymentType, useWallet.attributesRecharge.states.walletAccountPostsId]); // eslint-disable-line react-hooks/exhaustive-deps

  const walletAccount = useWallet.attributes.states.walletAccount;

  const walletAccountOptions = walletAccount.map((account) => {
    return {
      value: account.postsId,
      label: account.name,
    }
  });

  walletAccountOptions.unshift({value: '', label: 'Selecciona una cuenta'});

  const walletAccountLabel = walletAccount.find((account) => account.postsId === useWallet.attributesRecharge.states.walletAccountPostsId)?.name || 'Selecciona una cuenta';



  return (
    
    <>
    {!useWallet.attributes.states.walletAccountIsReady ? <Loading /> : 
        <>
          <div
            style = {{
              marginBottom: '200px'
            }}
          >
            <Error 
                error={useError.states.error}
            />
            <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1em 0px',
                  width: '90%',
                  margin: 'auto',
                  borderBottom: '1px solid #e1e1e1',
                  
              }}> 
                  <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Recarga de Saldo</h1>
                  <Link href='/billetera' style={{
                    textDecoration: 'none',
                    display: 'flex',
                  }}>
                  <FiChevronLeft 
                      className={arrowStyle}
                      onClick={useWallet.pagesRecharge.actions.returnInit}
                  />
                  </Link>
              </div>
              <div style={{
                  margin: 'auto',
                  padding: '0px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    width: '85%',
                    margin: 'auto',
                  }}>
                    <span className={textInfoTitleStyles}>Cuenta</span>
                  </div>
                  <SelectApp
                    options={walletAccountOptions}
                    value={walletAccountLabel}
                    onChange={(e) => useWallet.attributesRecharge.actions.setWalletAccountPostsId(e)}
                  />
              </div>
              <div style={{
                  margin: 'auto',
                  padding: '0px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    width: '85%',
                    margin: 'auto',
                  }}>
                    <span className={textInfoTitleStyles}>Tipo de recarga</span>
                  </div>
                  <SelectApp
                    options={useWallet.attributesRecharge.states.paymentTypeOptions}
                    value={useWallet.attributesRecharge.states.paymentType}
                    onChange={(e) => useWallet.attributesRecharge.actions.setPaymentType(e)}
                  />
              </div>
              {useWallet.attributesRecharge.states.paymentType === 'zelle' &&
                <div
                  style={{
                    border: '1px solid #ebebeb',
                    width: '90%',
                    margin: '1em auto',
                    borderRadius: '15px',
                    backgroundColor: '#fff',
                  }}
                >
                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1em',
                  }}>
                    <span className={textInfoStyles}>Los datos para transferencia Zelle son:</span>
                    <span className={textInfoStyles}>A nombre de: <span style={{fontWeight: 600}}>Gafpri Corp</span></span>
                    <span className={textInfoStyles}>Correo: <span style={{fontWeight: 600}}>billetera@gafpri.com</span></span>
                  </div>
                </div>
              }

              {useWallet.attributesRecharge.states.paymentType === 'paypal' &&
                <div
                  style={{
                    border: '1px solid #ebebeb',
                    width: '90%',
                    margin: '1em auto',
                    borderRadius: '15px',
                    backgroundColor: '#fff',
                  }}
                >
                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1em',
                  }}>
                    <span className={textInfoStyles}>Los datos para transferencia PayPal son:</span>
                    <span className={textInfoStyles}>A nombre de: <span style={{fontWeight: 600}}>Gafpri Corp</span></span>
                    <span className={textInfoStyles}>Correo: <span style={{fontWeight: 600}}>info@gafpri.com</span></span>
                  </div>
                </div>
              }

              {useWallet.attributesRecharge.states.paymentType !== '' && 
                <>  
                  <InputAppContainer 
                      inputProps={{
                        placeholder: 'Monto',
                        type: 'number',
                        value: useWallet.attributesRecharge.states.amount,
                        onChange: (e) => useWallet.attributesRecharge.actions.setAmount(e.target.value)
                      }}
                    />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '85%',
                      margin: '2em auto',

                    
                    }}
                  >
                    <span className={textResumeStyles}>{`Comisión (${useWallet.attributesRecharge.states.commissionRate}): `}</span>
                    <span className={textResumeStyles} style={{fontWeight: '600'}}>{decimalFormatPriceConverter(
                              useWallet.attributesRecharge.states.commission || 0,
                              siteOptions.DECIMAL_NUMBERS,
                              siteOptions.CURRENCY_SYMBOL,
                              siteOptions.CURRENCY_LOCATION
                            )}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '85%',
                      margin: '2em auto',

                    
                    }}
                  >
                    <span className={textResumeStyles}>Total de recarga: </span>
                    <span className={textResumeStyles} style={{fontWeight: '600'}}>{decimalFormatPriceConverter(
                              useWallet.attributesRecharge.states.total || 0,
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
                          title="Siguiente"
                          containerProps={{
                            id: 'amount-recharge-button',
                            onClick: next
                          }}
                      />
                  </div>
                </>
              }
          
          
          </div>
        </>
      }
    </>
  );
}