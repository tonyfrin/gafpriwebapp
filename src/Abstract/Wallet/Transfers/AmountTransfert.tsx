import React, { use, useEffect } from 'react';;
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { FiChevronLeft } from 'react-icons/fi';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { SelectApp } from '../../Select/SelectApp';
import { decimalFormatPriceConverter } from '../../helpers';


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

type account = {
  id: string;
  name: string;
  balance: string;
}

export function AmountTransfert() {
  const { useWallet, siteOptions } = useTheme();

  const accounts: account[] = [];

  useWallet.attributes.states.walletAccount.forEach((account) => {
    accounts.push({
      id: account.postsId,
      name: account.name,
      balance: account.available,
    });
  });

  console.log('accounts', accounts);

  const accountOptions = accounts.map((account) => {
    return { value: account.id, label: account.name };
  });

  accountOptions.unshift({ value: '', label: 'Selecciona una cuenta' });

  const labelAccount = accountOptions.find(option => option.value === useWallet.attributesTransfers.states.account?.id)?.label || 'Selecciona una cuenta';

  const changeAccount = (id: string): void => {
    const newAccount = accounts.find((account) => `${account.id}` === `${id}`);
    if (newAccount) {
        useWallet.attributesTransfers.actions.setAccount(newAccount);
    } else{
        useWallet.attributesTransfers.actions.setAccount(null);
    }
  };

  const returnToBeneficiary = () => {
    useWallet.attributesTransfers.actions.setBeneficiary(null);
    useWallet.attributesTransfers.actions.setEmail('');
    useWallet.pagesTransfers.actions.onBeneficiary();
  }


  return (
    <>
        <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1em 0px',
                  width: '90%',
                  margin: 'auto',
                  borderBottom: '1px solid #e1e1e1'
              }}> 
                  <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Indique el monto</h1>
                  <div style={{
                    textDecoration: 'none',
                    display: 'flex',
                  }}>
                  <FiChevronLeft 
                      className={arrowStyle}
                      onClick={returnToBeneficiary}
                  />
                  </div>
              </div>
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1em 0px',
          }}
        >
          <div
            style={{
              margin: '0.5em auto',
            }}
          >
            <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>Enviar:</h1>
          </div>
          <InputAppContainer 
            inputProps={{
              placeholder: 'Monto',
              type: 'number',
              value: useWallet.attributesTransfers.states.amount,
              onChange: (e) => useWallet.attributesTransfers.actions.setAmount(e.target.value),
            }}
            containerStyles={{
              customStyles: `
              width: 95%; 
              margin: auto;`
            }}
          />
          
          <div
            style={{
              margin: '0.5em auto',
            }}
          >
            <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 400}} className={title1AppStyles}>a</h1>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', 
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '100%',
              background: '#324d7f',
              margin: '0 auto',
              display: 'flex',
            }}>
              <span style={{
                color: '#FFF',
                fontSize: '1.5em',
                margin: 'auto',
                textTransform: 'uppercase',
              }}>{useWallet.attributesTransfers.states.beneficiary?.entity.name.substring(0, 1)}</span>
            </div>
          </div>
          <div
            style={{
              margin: 'auto',
            }}
          >
            <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '1em', fontWeight: 600}} className={title1AppStyles}>{useWallet.attributesTransfers.states.beneficiary?.entity.name}</h1>
          </div>
          <div
            style={{
              margin: 'auto',
            }}
          >
            <h1 style={{textAlign: 'center', padding: '0.3em', fontSize: '0.8em', fontWeight: 600}} className={title1AppStyles}>{useWallet.attributesTransfers.states.beneficiary?.email}</h1>
          </div>
          <div style={{
                margin: 'auto',
                padding: '0px',
                display: 'flex',
                flexDirection: 'column',
                width: '95%'
              }}>
                <div style={{
                  width: '85%',
                  margin: 'auto',
                  textAlign: 'center'
                }}>
                  <span className={textInfoTitleStyles}>desde:</span>
                </div>
                <SelectApp
                  options={accountOptions}
                  value={labelAccount}
                  onChange={(e) => changeAccount(e)}
                />
                <div style={{
                  width: '85%',
                  margin: 'auto',
                  textAlign: 'center'
                }}>
                  {useWallet.attributesTransfers.states.account && 
                    <span className={textInfoTitleStyles} style={{
                      textAlign: 'center',
                      color: '#000'
                    }}>Saldo disponible: {decimalFormatPriceConverter(
                      useWallet.attributesTransfers.states.account?.balance || 0,
                      siteOptions.DECIMAL_NUMBERS,
                      siteOptions.CURRENCY_SYMBOL,
                      siteOptions.CURRENCY_LOCATION
                    )}</span>
                  }
                </div>
            </div>
        </div>
        <div className={containerButtonCheckOutStyle}>
            <ButtonAppMobile 
                title="Cancelar"
                containerStyles={{
                    width: '45%',
                    backgroundColor: '#c12429'
                }}
                contentStyles={{
                    fontSize: '1.2em',
                    padding: '0.9em',
                }}
                containerProps={{
                  onClick: () => useWallet.pagesTransfers.actions.returnInit()
                
                }}
            />
            <ButtonAppMobile 
                title="Enviar"
                containerStyles={{
                    width: '45%'
                }}
                contentStyles={{
                    fontSize: '1.2em',
                    padding: '0.9em',
                }}
                containerProps={{
                  onClick: () => useWallet.pagesTransfers.actions.onConfirmation()
                
                }}
            />
        </div>
    </>
  );
}