import React from 'react';
import { css } from '@emotion/css';
import { FiChevronLeft } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { decimalFormatPriceConverter, formatPhoneNumber } from '../../helpers';
import { Loading } from '../../Loading';
import { Error } from '../../Error';

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
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
  const { useWallet, siteOptions, useError } = useTheme();
  const [fetching, setFetching] = React.useState<boolean>(false);

  const returnToAmount = () => {
    useWallet.attributesTransfers.actions.setAccount(null);
    useWallet.attributesTransfers.actions.setAmount('');
    useWallet.pagesTransfers.actions.onInfo();
  }

  const add =  async (): Promise<void> => {
    try{
      setFetching(true);
      const data = await useWallet.account.actions.addTransfer();
      if(data && data.success){
        useWallet.pagesTransfers.actions.onSuccess();
      } else{
   
        useError.actions.changeError([data.message]);
      }
    } catch (error) {
      console.log(error);
      useError.actions.changeError(['Error al realizar la transferencia']);
    } finally {
      setFetching(false);
    }
  }
  

  return (
    <>
          <div
            style={{
              marginBottom: '100px'
            }}
          >
            
            {fetching ? <Loading /> :
              <>
                  <Error 
                    error={useError.states.error}
                  />
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
                    <div
                      style={{
                        textAlign: 'center',
                      }}
                    ><h1 className={title1AppStyles} style={{
                      textAlign: 'center',
                    }}>Verificación</h1></div>
                          <div
                              style={{
                                margin: '0.5em auto',
                              }}
                            >
                              <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>Enviar a:</h1>
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
                            }}>{useWallet.attributesTransfers.states.beneficiary?.entity.name.substring(0, 1)}</span>
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
                            }}>{useWallet.attributesTransfers.states.beneficiary?.entity.name}</span>
                            <span style={{
                              fontSize: '0.6em',
                              fontWeight: 400,
                            }}>{useWallet.attributesTransfers.states.beneficiary?.email ? useWallet.attributesTransfers.states.beneficiary.email : useWallet.attributesTransfers.states.beneficiary?.phone ? formatPhoneNumber(useWallet.attributesTransfers.states.beneficiary.phone) : useWallet.attributesTransfers.states.beneficiary?.id ? useWallet.attributesTransfers.states.beneficiary?.id : ''}</span>
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
                                onClick: add,
                              }}
                          />
                      </div>
              </>
            }
          </div>
    </>
  );
}