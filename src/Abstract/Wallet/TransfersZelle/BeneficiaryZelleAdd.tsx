import React, { useState, useEffect, use } from 'react';;
import { css } from '@emotion/css';
import { useTheme } from '../../context/ThemeContext';
import { FiChevronLeft } from 'react-icons/fi';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { WalletBeneficiariesAttributesReturn } from '@/Abstract/states/wallet/useGafpriApiWalletAccount';
import { Loading } from '@/Abstract/Loading';
import { Error } from '@/Abstract/Error';
import { ButtonAppMobile } from '@/Abstract/Button/ButtonAppMobile';


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

export function BeneficiaryZelleAdd() {
  const { useWallet, siteOptions, useLogin, useError } = useTheme();
  const [fetching, setFetching] = useState<boolean>(false);

  const changeEmail = (email: string) => {
    useWallet.attributesTransfersZelle.actions.setEmail(email);
    useWallet.attributesTransfersZelle.actions.setPhone('');
  }

  const changePhone = (phone: string) => {
    useWallet.attributesTransfersZelle.actions.setPhone(phone);
    useWallet.attributesTransfersZelle.actions.setEmail('');
  }

  const add = async (): Promise<void> => {
      if(useWallet.attributesTransfersZelle.actions.validationButtonBeneficiaryAdd()) {
        try{
          useWallet.pagesTransfersZelle.actions.onFetching();
          const data = await useWallet.account.actions.addBeneficiaryZelle();
      
          if(data && data.success) {
            useWallet.attributesTransfersZelle.actions.setBeneficiary(data.item);
            useWallet.pagesTransfersZelle.actions.onAmount();
          } else{
            useError.actions.changeError([`${data.message}`]);
            useWallet.pagesTransfersZelle.actions.onBeneficiaryAdd();
          }
        }catch(err) {
          useError.actions.changeError([`${err}`]);
          useWallet.pagesTransfersZelle.actions.onBeneficiaryAdd();
        }
    }
  };

  useEffect(() => {
    useWallet.attributesTransfersZelle.actions.validationButtonBeneficiaryAdd();
  }, [useWallet.attributesTransfersZelle.states.email, useWallet.attributesTransfersZelle.states.phone, useWallet.attributesTransfersZelle.states.name]); // eslint-disable-line

  

  return (
    <>
          <div>
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
                    <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Transferencia Zelle</h1>
                    <div style={{
                      textDecoration: 'none',
                      display: 'flex',
                    }}>
                    <FiChevronLeft 
                        className={arrowStyle}
                        onClick={useWallet.pagesTransfersZelle.actions.returnInit}
                    />
                    </div>
                </div>
                <div>
                    <div>
                      <h1
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '1em',
                          textAlign: 'center',
                          margin: '1em auto'
                        }}
                      >Agregar Beneficiario</h1>
                    </div>
                    <InputAppContainer 
                        title='Nombre y apellido'
                        inputProps={{
                          placeholder: 'Nombre y apellido',
                          type: 'text',
                          value: useWallet.attributesTransfersZelle.states.name,
                          onChange: (e) => useWallet.attributesTransfersZelle.actions.setName(e.target.value),
                        }}
                    />
                    {useWallet.attributesTransfersZelle.states.phone === '' &&
                    <InputAppContainer 
                        title= 'Email'
                        inputProps={{
                          title: 'Email',
                          placeholder: 'Email',
                          type: 'text',
                          value: useWallet.attributesTransfersZelle.states.email,
                          onChange: (e) => changeEmail(e.target.value.toLowerCase()),
                        }}
                        containerStyles={{
                          margin: '1em auto'
                        }}
                    />
                    }
                    {useWallet.attributesTransfersZelle.states.email === '' &&
                      <InputAppContainer 
                          title= 'Teléfono'
                          inputProps={{
                            placeholder: 'Teléfono',
                            type: 'number',
                            value: useWallet.attributesTransfersZelle.states.phone,
                            onChange: (e) => changePhone(e.target.value),
                          }}
                          containerStyles={{
                            margin: '1em auto'
                          }}
                      />
                    }
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      <ButtonAppMobile 
                        title="Agregar"
                        containerProps={{
                          id: 'beneficiary-add-button',
                          onClick: () => add()
                        }}
                      />
                    </div>
                </div>
              </>
            }
          </div>
    </>
  );
}