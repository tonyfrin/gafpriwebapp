import React from 'react';
import { css } from '@emotion/css';
import { useGafpriCheckOut } from '../states/checkout/useGafpriCheckOut';
import { InitCheckOut } from '../CheckOut/InitCheckOut';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AddressList } from '../CheckOut/AddressList';
import { AddressAdd } from '../CheckOut/AddressAdd';
import { PaymentMethod } from '../CheckOut/PaymentMethod';
import { Summary } from '../CheckOut/Summary';

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
}

export function CheckOut({
    setModal,
    modal,
}: CheckOutProps) {
  const useCheckOut = useGafpriCheckOut();

  return (
    <> 
          <div className={containerModalStyle}>
              <button 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 'auto',
                }}  
                onClick={() => setModal(false)}
              >
                <AiOutlineCloseCircle style={{margin: '0.5em auto 0px auto', display: 'block', fontSize: '2em', color: '#909090'}}/> 
              </button>
              <div>
                  {modal && useCheckOut.pages.states.isInit && 
                    <InitCheckOut setModal={setModal} useCheckOut={useCheckOut} />
                  }

                  {useCheckOut.pages.states.isAddressList &&
                    <AddressList setModal={setModal} useCheckOut={useCheckOut} />
                  }

                  {useCheckOut.pages.states.isAddressAdd &&
                    <AddressAdd setModal={setModal} useCheckOut={useCheckOut} />
                  }

                  {
                    useCheckOut.pages.states.isPaymentList &&
                    <PaymentMethod setModal={setModal} useCheckOut={useCheckOut} />
                  }

                  {
                    useCheckOut.pages.states.isSummary &&
                    <Summary setModal={setModal} useCheckOut={useCheckOut} />
                  }
              </div>
        </div>
    </>
  );
}