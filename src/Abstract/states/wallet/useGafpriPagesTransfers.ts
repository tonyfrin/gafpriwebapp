import { useState } from 'react';
import { UseGafpriAttributesTransfersReturn } from './useGafpriAttributesTransfers';



type states = {
    isInit: boolean;
    isCode: boolean;
    isInfo: boolean;
    isBeneficiary: boolean;
    isConfirmation: boolean;
}

type actions = {
    onInit: () => void;
    onCode: () => void;
    onInfo: () => void;
    onBeneficiary: () => void;
    onConfirmation: () => void;
    returnInit: () => void;
}

export type UseGafpriPagesTransfersProps = {
    attributesTransfers: UseGafpriAttributesTransfersReturn;
}

export type UseGafpriPagesTransfersReturn = {states: states, actions: actions};

export const useGafpriPagesTransfers = ({
    attributesTransfers
}: UseGafpriPagesTransfersProps): UseGafpriPagesTransfersReturn => {
    const [isInit, setIsInit] = useState<boolean>(true);
    const [isCode, setIsCode] = useState<boolean>(false);
    const [isInfo, setIsInfo] = useState<boolean>(false);
    const [isBeneficiary, setIsBeneficiary] = useState<boolean>(false);
    const [isConfirmation, setIsConfirmation] = useState<boolean>(false);

    const onInit = () => {
        setIsInit(true);
        setIsCode(false);
        setIsInfo(false);
        setIsBeneficiary(false);
        setIsConfirmation(false);
    }

    const onCode = () => {
        setIsInit(false);
        setIsCode(true);
        setIsInfo(false);
        setIsBeneficiary(false);
        setIsConfirmation(false);
    }

    const onInfo = () => {
        setIsInit(false);
        setIsCode(false);
        setIsInfo(true);
        setIsBeneficiary(false);
        setIsConfirmation(false);
    }  

    const onBeneficiary = () => {
        setIsInit(false);
        setIsCode(false);
        setIsInfo(false);
        setIsBeneficiary(true);
        setIsConfirmation(false);
    }

    const onConfirmation = () => {
        setIsInit(false);
        setIsCode(false);
        setIsInfo(false);
        setIsBeneficiary(false);
        setIsConfirmation(true);
    }

    const returnInit = (): void => {
        attributesTransfers.actions.infoReset();
        onInit();
    }

    const states = {
        isInit,
        isCode,
        isInfo,
        isBeneficiary,
        isConfirmation
    };

    const actions = { 
        onInit, 
        onCode,
        onInfo,
        onBeneficiary,
        onConfirmation,
        returnInit
     };

    return { states, actions };
}