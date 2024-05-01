import React from 'react';
import { LayoutAdmin } from './LayoutAdmin';
import { Recharge } from '../Wallet/Recharge/Recharge';

export function WalletRechargeDetails({id}: {id: string | string[] | undefined}) {

  return (
    <>
      <LayoutAdmin>
        <>
          <div>

            <Recharge id={id}/>
          
          </div>
        </>
      </LayoutAdmin>
    </>
  );
}