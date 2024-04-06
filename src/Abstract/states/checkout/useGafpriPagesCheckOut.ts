'use client'
import { useState } from 'react';

type State = {
    isFetching: boolean;
    isInit: boolean;
    isAddressList: boolean;
    isAddressAdd: boolean;
    isPaymentList: boolean;
    isSummary: boolean;
    isFinal: boolean;
};

type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onAddressList: () => void;
    onAddressAdd: () => void;
    onPaymentList: () => void;
    onSummary: () => void;
    onFinal: () => void;
};



export type UseGafpriPagesCheckOutReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesCheckOut(): UseGafpriPagesCheckOutReturn {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isInit, setIsInit] = useState<boolean>(true);
  const [isAddressList, setIsAddressList] = useState<boolean>(false);
  const [isAddressAdd, setIsAddressAdd] = useState<boolean>(false);
  const [isPaymentList, setIsPaymentList] = useState<boolean>(false);
  const [isSummary, setIsSummary] = useState<boolean>(false);
  const [isFinal, setIsFinal] = useState<boolean>(false);

  const onFetching = () => {
    setIsFetching(true);
    setIsInit(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsPaymentList(false);
    setIsSummary(false);
    setIsFinal(false);
  }

  const onInit = () => {
    setIsFetching(false);
    setIsInit(true);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsPaymentList(false);
    setIsSummary(false);
    setIsFinal(false);
  }

  const onAddressList = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsAddressList(true);
    setIsAddressAdd(false);
    setIsPaymentList(false);
    setIsSummary(false);
    setIsFinal(false);
  }

  const onAddressAdd = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsAddressList(false);
    setIsAddressAdd(true);
    setIsPaymentList(false);
    setIsSummary(false);
    setIsFinal(false);
  }

  const onPaymentList = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsPaymentList(true);
    setIsSummary(false);
    setIsFinal(false);
  }

  const onSummary = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsPaymentList(false);
    setIsSummary(true);
    setIsFinal(false);
  }

  const onFinal = () => {
    setIsFetching(false);
    setIsInit(false);
    setIsAddressList(false);
    setIsAddressAdd(false);
    setIsPaymentList(false);
    setIsSummary(false);
    setIsFinal(true);
  }

   /**
   * Export
   *
   *
   */

  const states = {
    isFetching,
    isInit,
    isAddressList,
    isAddressAdd,
    isPaymentList,
    isSummary,
    isFinal,
  };

  const actions = {
    onFetching,
    onInit,
    onAddressList,
    onAddressAdd,
    onPaymentList,
    onSummary,
    onFinal,
  };

  return {
    states,
    actions,
  };
}
