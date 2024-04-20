import React, { use } from 'react';;
import { LayoutApp } from '../Component/LayoutApp';
import { useTheme } from '../context/ThemeContext';
import { InitTransfers } from './Transfers/InitTransfers';
import { Beneficiary } from './Transfers/Beneficiary';
import { AmountTransfert } from './Transfers/AmountTransfert';
import { ConfirmationTransfers } from './Transfers/ConfirmationTransfers';
import { SuccessTransfers } from './Transfers/SuccessTransfers';


export function Transfers() {
  const { useWallet } = useTheme();


  return (
    <>
      <LayoutApp>
        <>
         <div>
            {useWallet.pagesTransfers.states.isInit && <InitTransfers />}

            {useWallet.pagesTransfers.states.isBeneficiary && <Beneficiary />}

            { useWallet.pagesTransfers.states.isInfo && <AmountTransfert />}

            { useWallet.pagesTransfers.states.isConfirmation && <ConfirmationTransfers />}

            { useWallet.pagesTransfers.states.isSuccess && <SuccessTransfers />}
         </div>
        </>
      </LayoutApp>
    </>
  );
}