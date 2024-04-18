import React from 'react';;
import { LayoutApp } from '../Component/LayoutApp';
import { useTheme } from '../context/ThemeContext';
import { AmountRecharge } from './Recharge/AmountRecharge';
import { InfoRecharge } from './Recharge/InfoRecharge';
import { ConfirmationRecharge } from './Recharge/ConfirmationRecharge';
import { SuccessRecharge } from './Recharge/SuccessRecharge';
import { Loading } from '../Loading';


export function Recharge() {
  const { useWallet } = useTheme();


  return (
    <>
      <LayoutApp>
        <>
          {useWallet.pagesRecharge.states.isFetching ? <Loading /> : 
            <div>
                {useWallet.pagesRecharge.states.isInit && <AmountRecharge />}

                {useWallet.pagesRecharge.states.isInfo && <InfoRecharge />}

                {useWallet.pagesRecharge.states.isConfirmation && <ConfirmationRecharge />}

                {useWallet.pagesRecharge.states.isSuccess && <SuccessRecharge />}
            </div>
          }
        </>
      </LayoutApp>
    </>
  );
}