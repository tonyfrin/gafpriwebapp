import React, {use, useEffect, useState} from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBicycleOutline } from 'react-icons/io5';
import { FiChevronLeft } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { UseGafpriCheckOutReturn } from '../states/checkout/useGafpriCheckOut';
import { InputAppContainer } from '../Input/InputAppContainer';
import { SelectApp  } from '../Select/SelectApp';
import { useTheme } from '../context/ThemeContext';
import { AddressAttributesReturn } from '../states/user/address/useGafpriApiAddress';
import { Loading } from '../Loading';
import { UserAttributesReturn } from '../states/user/useGafpriApiUser';

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

interface Location {
  latitude: number;
  longitude: number;
}

type AddressUpdateProps = {
  setUser: (value: UserAttributesReturn) => void;
}

export function AddressUpdate({
  setUser
}: AddressUpdateProps) {
  const { useAddress, useCheckOut } = useTheme();
  const address = useAddress.attributes.states.address;

  useEffect(() => {
    if(address){
      useAddress.attributes.actions.changeAddress1(address.address1);
      if(address.address2)useAddress.attributes.actions.changeAddress2(address.address2);
      useAddress.attributes.actions.changeCity(address.city);
    }
  }, [address]); // eslint-disable-line

  useEffect(() => {
    if(address){
      useAddress.attributes.actions.validationAddress1(address.address1);
      if(address.address2) useAddress.attributes.actions.validationAddress2(address.address2);
      useAddress.attributes.actions.validationCity(address.city);
      useAddress.attributes.actions.validationButton();
    }
  }, [ address, useAddress.attributes.states.address1, useAddress.attributes.states.address2, useAddress.attributes.states.city,]); // eslint-disable-line

  if(!address) return(<Loading />);

  const update = async () => {
    if(useAddress.attributes.actions.validationButton()){
      useCheckOut.pages.actions.onFetching();
      const data = await useAddress.api.actions.updateAddress();
      if(data && data.success){
        setUser(data.item);
        useCheckOut.pages.actions.onAddressList();
      }
    }
  }

  

  const returnList = () => {
    useAddress.attributes.actions.resetInfo();
    useCheckOut.pages.actions.onAddressList();
  }
  

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
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Actualiza dirección</h1>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={returnList}
                />
            </div>
           
              <InputAppContainer 
                inputProps={{
                  placeholder: 'Dirección',
                  type: 'text',
                  value: useAddress.attributes.states.address1,
                  onChange: (e) => useAddress.attributes.actions.changeAddress1(e.target.value)
                }}
              />

              <InputAppContainer 
                inputProps={{
                  placeholder: 'Continuar Dirección',
                  type: 'text',
                  value: useAddress.attributes.states.address2,
                  onChange: (e) => useAddress.attributes.actions.changeAddress2(e.target.value)
                }}
              />

              <div style={{
                margin: 'auto',
                padding: '0px',
                display: 'flex',
              }}>
                <SelectApp
                  options={useAddress.attributes.states.cityOptions}
                  value={useAddress.attributes.states.city}
                  onChange={(e) => useAddress.attributes.actions.changeCity(e)}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  margin: 'auto',
                  flexDirection: 'column',
                }}
              >
                <span style={{
                  fontSize: '0.6em',
                  fontFamily: 'Poppins',
                  margin: 'auto',
                  textAlign: 'center',
                  width: '90%',
                }}>Si te encuentras en la dirección, agrega la posición en el mapa</span>
                <ButtonAppMobile 
                  title='Agrega tu posición'

                  containerStyles={{
                    backgroundColor: '#314577',
                  }}
                  containerProps={{
                    onClick: () => useAddress.attributes.actions.changeCurrentLocation()
                  }}
                  contentStyles={{
                    fontSize: '1.2em',
                  }}
                />
              </div>
            
            <div className={containerButtonCheckOutStyle}>
              <ButtonAppMobile 
                title="Actualizar"
                containerProps={{
                  id: 'add-update-address-button',
                  onClick: () => update()
                }}
              />
            </div>
          </div>
    </>
  );
}