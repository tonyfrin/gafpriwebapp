'use client'
import { useState } from 'react';

type State = {
    isFetching: boolean;
    isInit: boolean;
    isOrderList: boolean;
    isAddressList: boolean;
    isAddressAdd: boolean;
    isAddressUpdate: boolean;
    isEmail: boolean;
    isPhone: boolean;
    isLegal: boolean;
};

type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onOrderList: () => void;
    onAddressList: () => void;
    onAddressAdd: () => void;
    onAddressUpdate: () => void;
    onEmail: () => void;
    onPhone: () => void;
    onLegal: () => void;
    infoReset: () => void;
};



export type UseGafpriPagesProfileReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesProfile(): UseGafpriPagesProfileReturn {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isInit, setIsInit] = useState<boolean>(true);
  const [isOrderList, setIsOrderList] = useState<boolean>(false);
  const [isAddressList, setIsAddressList] = useState<boolean>(false);
  const [isAddressAdd, setIsAddressAdd] = useState<boolean>(false);
  const [isAddressUpdate, setIsAddressUpdate] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isLegal, setIsLegal] = useState<boolean>(false);

  const onFetching = () => {
    setIsFetching(true);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(false);  
  }

  const onInit = () => {
    setIsFetching(false);
    setIsInit(true);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(false);
  }

  const onOrderList = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(true);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(false);    
  }

  const onAddressList = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(true);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(false);
  }

  const onAddressAdd = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(true);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(false);
  }

  const onAddressUpdate = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(true);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(false);
  }

  const onEmail = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(true);
    setIsPhone(false);
    setIsLegal(false);
  }

  const onPhone = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(true);
    setIsLegal(false);
  }

  const onLegal = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsOrderList(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsAddressUpdate(false);
    setIsEmail(false);
    setIsPhone(false);
    setIsLegal(true);
  }

    const infoReset = (): void => {
      onInit();
    }

   /**
   * Export
   *
   *
   */

  const states = {
    isFetching,
    isInit,
    isOrderList,
    isAddressList,
    isAddressAdd,
    isAddressUpdate,
    isEmail,
    isPhone,
    isLegal,
  };

  const actions = {
    onFetching,
    onInit,
    onOrderList,
    onAddressList,
    onAddressAdd,
    onAddressUpdate,
    onEmail,
    onPhone,
    onLegal,
    infoReset,
  };

  return {
    states,
    actions,
  };
}
