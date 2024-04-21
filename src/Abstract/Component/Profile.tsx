import React, { use, useEffect, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { LayoutApp } from './LayoutApp';
import { css } from '@emotion/css';
import { BoxCart } from '../Box/BoxCart';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { Modal } from '../Modal/Modal';
import { CheckOut } from './CheckOut';
import { CartAttributesReturn } from '../states/cart/useGafpriApiCart';
import { useTheme } from '../context/ThemeContext';
import { Loading } from '../Loading';
import { FadeIn } from '../Fade/FadeIn';
import { InitProfile } from '../Profile/InitProfile';
import { Orders } from '../Profile/Orders';
import { OrderAttributesReturn } from '../states/order/useGafpriApiOrder';
import { Password } from '../Profile/Password';
import { SuccessPassword } from '../Profile/SuccessPassword';
import { AddressList } from '../Address/AddressList';
import { AddressAdd } from '../Address/AddressAdd';
import { AddressUpdate } from '../Address/AddressUpdate';


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

export function Profile() {
  const { useProfile, useOrder, useLogin } = useTheme();
  const [orders, setOrders] = useState<OrderAttributesReturn[]>([]);

  useEffect(() => {
      
    const getOrders = async () => {
      useProfile.pages.actions.onFetching();
      const data = await useOrder.api.actions.getOrders();
      if(data && data.success){
        setOrders(data.items);
        useProfile.pages.actions.onInit();
      }
  }

  getOrders();
}, [useLogin.data.states.token]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      <LayoutApp>
        <>
              { useProfile.pages.states.isFetching ? <Loading /> :
                <div>

                    {
                      useProfile.pages.states.isInit &&
                      <FadeIn keyName='isInit' isVisible={useProfile.pages.states.isInit}>
                        <InitProfile />
                      </FadeIn>
                    }

                    {
                      useProfile.pages.states.isOrderList &&
                      <FadeIn keyName='isOrderList' isVisible={useProfile.pages.states.isOrderList}>
                        <Orders orders={orders}/>
                      </FadeIn>
                    }

                    {
                      useProfile.pages.states.isPassword &&
                      <FadeIn keyName='isPassword' isVisible={useProfile.pages.states.isPassword}>
                        <Password />
                      </FadeIn>
                    }

                    {
                      useProfile.pages.states.isSuccessPassword &&
                      <FadeIn keyName='isSuccessPassword' isVisible={useProfile.pages.states.isSuccessPassword}>
                        <SuccessPassword />
                      </FadeIn>
                    }

                    {
                      useProfile.pages.states.isAddressList &&
                      <FadeIn keyName='isAddressList' isVisible={useProfile.pages.states.isAddressList}>
                        <AddressList />
                      </FadeIn>
                    }

                    {
                      useProfile.pages.states.isAddressAdd &&
                      <FadeIn keyName='isAddressAdd' isVisible={useProfile.pages.states.isAddressAdd}>
                        <AddressAdd />
                      </FadeIn>
                    }

                    {
                      useProfile.pages.states.isAddressUpdate &&
                      <FadeIn keyName='isAddressUpdate' isVisible={useProfile.pages.states.isAddressUpdate}>
                        <AddressUpdate />
                      </FadeIn>
                    }



                
                </div>
              }
        </>
      </LayoutApp>
    </>
  );
}