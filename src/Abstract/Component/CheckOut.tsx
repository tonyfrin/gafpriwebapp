import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../context/ThemeContext';
import { InitCheckOut } from '../CheckOut/InitCheckOut';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AddressList } from '../CheckOut/AddressList';
import { AddressAdd } from '../CheckOut/AddressAdd';
import { PaymentMethod } from '../CheckOut/PaymentMethod';
import { Summary } from '../CheckOut/Summary';
import { UserAttributesReturn } from '../states/user/useGafpriApiUser';
import { Loading } from '../Loading';
import { AddressUpdate } from '../CheckOut/AddressUpdate';
import { FadeIn } from '../Fade/FadeIn';
import { StoreList } from '../CheckOut/StoreList';
import { SitesAttributesReturn } from '../states/sites/useGafpriApiSites';
import { CartAttributesReturn } from '../states/cart/useGafpriApiCart';
import { Final } from '../CheckOut/Final';

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
  overflow-y: auto;
  height: 81vh;
`

export type CheckOutProps = {
  setModal: (value: boolean) => void;
  modal: boolean;
  cart: CartAttributesReturn | null;
  setCart: (value: CartAttributesReturn | null) => void;
}

export function CheckOut({
    setModal,
    modal,
    cart,
    setCart
}: CheckOutProps) {
  const { useCheckOut, useUser, useSites } = useTheme();
  const [user, setUser] = useState<UserAttributesReturn | null>(null);
  const [sites, setSites] = useState<SitesAttributesReturn[] | null>(null);
  const { useLogin } = useTheme();

  useEffect(() => {
      
      const fetchDataUser = async () => {
          useCheckOut.pages.actions.onFetching();
          const data = await useUser.api.actions.getUser();
          console.log(data);
          if(data && data.success) {
              setUser(data.item);
              useCheckOut.pages.actions.onInit();
          }
      }

      const fetchDataSites = async () => {
        useCheckOut.pages.actions.onFetching();
        const data = await useSites.api.actions.getSites();
        if(data.data && data.success){
            setSites(data.data.items);
            useCheckOut.pages.actions.onInit();
        }
        
    };

      fetchDataUser();
      fetchDataSites();
  }, [useLogin.data.states.token]); // eslint-disable-line react-hooks/exhaustive-deps

  const returnItit = () => {
    setModal(false);
    useCheckOut.pages.actions.onInit();
  }


  return (
    <> 
          <div className={containerModalStyle}>
              <button 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 'auto',
                }}  
                onClick={() => returnItit()}
              >
                <AiOutlineCloseCircle style={{margin: '0.5em auto 0px auto', display: 'block', fontSize: '2em', color: '#909090'}}/> 
              </button>
                <div>
                    {
                      modal && useCheckOut.pages.states.isFetching && !user &&
                      <FadeIn keyName='isFetching' isVisible={useCheckOut.pages.states.isFetching}>
                        <Loading />
                      </FadeIn>
                    }

                    {modal && useCheckOut.pages.states.isInit && user &&
                      <FadeIn keyName='isInit' isVisible={useCheckOut.pages.states.isInit}>
                        <InitCheckOut cart={cart} user={user} sites={sites} setCart={setCart}/>
                      </FadeIn>
                    }

                    {useCheckOut.pages.states.isAddressList && user &&
                      <FadeIn keyName='isAddressList' isVisible={useCheckOut.pages.states.isAddressList}>
                        <AddressList setModal={setModal} useCheckOut={useCheckOut} user={user}/>
                      </FadeIn>
                    }

                    {useCheckOut.pages.states.isAddressUpdate && user &&
                      <FadeIn keyName='isAddressUpdate' isVisible={useCheckOut.pages.states.isAddressUpdate}>
                        <AddressUpdate setUser={setUser}/>
                      </FadeIn>
                    }

                    {useCheckOut.pages.states.isAddressAdd && user &&
                      <FadeIn keyName='isAddressAdd' isVisible={useCheckOut.pages.states.isAddressAdd}>
                        <AddressAdd setUser={setUser}/>
                      </FadeIn>
                    }

                    {
                      useCheckOut.pages.states.isPaymentList && user &&
                      <FadeIn keyName='isPaymentList' isVisible={useCheckOut.pages.states.isPaymentList}>
                        <PaymentMethod />
                      </FadeIn>
                    }

                    {
                      useCheckOut.pages.states.isSummary && user &&
                      <FadeIn keyName='isSummary' isVisible={useCheckOut.pages.states.isSummary}>
                        <Summary cart={cart}/>
                      </FadeIn>
                    }

                    {
                      useCheckOut.pages.states.isStoreList && user &&
                      <FadeIn keyName='isStoreList' isVisible={useCheckOut.pages.states.isStoreList}>
                        <StoreList items={sites}/>
                      </FadeIn>
                    }

                    {
                      useCheckOut.pages.states.isFinal && user &&
                      <FadeIn keyName='isFinal' isVisible={useCheckOut.pages.states.isFinal}>
                        <Final />
                      </FadeIn>
                    }
                </div>
        </div>
    </>
  );
}