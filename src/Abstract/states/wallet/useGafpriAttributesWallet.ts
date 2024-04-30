import { useState,  useEffect } from 'react';
import { EntityAttributesReturn } from '../user/useGafpriApiEntity';
import { WalletAccountAtrributesReturn } from './useGafpriApiWalletAccount';
import { UseGafpriUserReturn } from '../user/useGafpriUser';
import { UseGafpriApiWalletAccountReturn } from './useGafpriApiWalletAccount';
import { UseGafpriLoginReturn } from '../login/useGafpriLogin';

type states ={
    entities: EntityAttributesReturn[];
    entityIsReady: boolean;
    walletAccount: WalletAccountAtrributesReturn[];
    walletAccountIsReady: boolean;
}

type actions = {
    setEntities: (_entities: EntityAttributesReturn[]) => void;
    setWalletAccount: (_walletAccount: WalletAccountAtrributesReturn[]) => void;
    infoReset: () => void;
}

export type UseGafpriAttributesWalletReturn = {
    states: states;
    actions: actions;
}

export type UseGafpriAttributesWalletProps = {
    useUser: UseGafpriUserReturn;
    account: UseGafpriApiWalletAccountReturn;
    useLogin: UseGafpriLoginReturn;
}


export const useGafpriAttributesWallet = ({useUser, account, useLogin}: UseGafpriAttributesWalletProps): UseGafpriAttributesWalletReturn => {
    const [entities, setEntities] = useState<EntityAttributesReturn[]>([]);
    const [entityIsReady, setEntityIsReady] = useState<boolean>(false);
    const [walletAccount, setWalletAccount] = useState<WalletAccountAtrributesReturn[]>([]);
    const [walletAccountIsReady, setWalletAccountIsReady] = useState<boolean>(false);

    const infoReset = (): void => {
        
    }

    useEffect(() => {
      
        const getEntities = async () => {
          try {
            setEntityIsReady(false);
            const data = await useUser.apiEntity.actions.getEntity();
            if(data && data.success){
              setEntities(data.items);
            } else {
              setEntities([]);
              setEntityIsReady(true);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setEntityIsReady(true);
          }
        }
    
        const getWalletAccount = async () => {
          try {
            setWalletAccountIsReady(false);
            const data = await account.actions.getWalletAccount();
            if(data && data.success){
              setWalletAccount(data.items);
            } else {
              setWalletAccount([]);
              setWalletAccountIsReady(true);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setWalletAccountIsReady(true);
          }
        }
    
      getEntities();
      getWalletAccount();
    }, [useLogin.data.states.token]); // eslint-disable-line react-hooks/exhaustive-deps




    const states: states = {
        entities,
        walletAccount,
        entityIsReady,
        walletAccountIsReady
    }

    const actions: actions = {
        setEntities,
        setWalletAccount,
        infoReset
    }

    return {
        states,
        actions
    }

}