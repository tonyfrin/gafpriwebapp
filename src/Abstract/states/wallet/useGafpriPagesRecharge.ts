import { useState } from 'react';
import { UseGafpriAttributesRechargeReturn } from './useGafpriAttributesRecharge';


type states = {
    isInit: boolean;
    isInfo: boolean;
    isConfirmation: boolean;
    isSuccess: boolean;
}

type actions = {
    onInit: () => void;
    onInfo: () => void;
    onConfirmation: () => void;
    returnInit: () => void;
    onSuccess: () => void;
}

export type UseGafpriPagesRechargeProps = {
    attributesRecharge: UseGafpriAttributesRechargeReturn;
}

export type UseGafpriPagesRechargeReturn = {states: states, actions: actions};

export const useGafpriPagesRecharge = ({attributesRecharge}: UseGafpriPagesRechargeProps ): UseGafpriPagesRechargeReturn => {
    const [isInit, setIsInit] = useState<boolean>(true);
    const [isInfo, setIsInfo] = useState<boolean>(false);
    const [isConfirmation, setIsConfirmation] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const onInit = (): void => {
        setIsInit(true);
        setIsInfo(false);
        setIsConfirmation(false);
        setIsSuccess(false);
    }

    const onInfo = (): void => {
        setIsInit(false);
        setIsInfo(true);
        setIsConfirmation(false);
        setIsSuccess(false);
    }

    const onConfirmation = (): void => {
        setIsInit(false);
        setIsInfo(false);
        setIsConfirmation(true);
        setIsSuccess(false);
    }

    const onSuccess = (): void => {
        setIsInit(false);
        setIsInfo(false);
        setIsConfirmation(false);
        setIsSuccess(true);
    }

    const returnInit = (): void => {
        attributesRecharge.actions.infoReset();
        onInit();
    }

    const states = { isInit, isInfo, isConfirmation, isSuccess };

    const actions = { onInit, onInfo, onConfirmation, returnInit, onSuccess };

    return { states, actions };
}