import { generalValidationButtonNext } from '@/Abstract/helpers';
import { parse } from 'path';
import React, {useState, useEffect }from 'react';

type states = {
    paymentType: string;
    amount: string;
    paymentTypeOptions: {label: string, value: string}[];
    commission: string;
    commissionRate: string;
    total: string;
    nameSend: string;
    number: string;
    walletAccountPostsId: string;
}

type actions = {
    setPaymentType: (paymentType: string) => void;
    setAmount: (amount: string) => void;
    infoReset: () => void;
    validationAmountButton: () => boolean;
    setNameSend: (nameSend: string) => void;
    setNumber: (number: string) => void;
    validationInfoButton: () => boolean;
    setWalletAccountPostsId: (walletAccountPostsId: string) => void;
}

export type UseGafpriAttributesRechargeReturn = {states: states, actions: actions};

export const useGafpriAttributesRecharge = ():UseGafpriAttributesRechargeReturn  => {
    const [paymentType, setPaymentType] = useState<string>('');
    const paymentTypeOptions: {label: string, value: string}[] = [
        {label: '', value: ''},
        {label: 'Zelle', value: 'zelle'},
        {label: 'Paypal', value: 'paypal'},
    ];
    const [amount, setAmount] = useState<string>('');
    const [commission, setCommission] = useState<string>('');
    const [commissionRate, setCommissionRate] = useState<string>('');
    const [total, setTotal] = useState<string>('');
    const [nameSend, setNameSend] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [walletAccountPostsId, setWalletAccountPostsId] = useState<string>('');

    const changeTotal = (): void => {
        if (paymentType === 'zelle') {
            setCommissionRate('0 %');
            setCommission('0.00');
            setTotal((parseFloat(amount) + parseFloat(commission)).toFixed(2));
        } else if (paymentType === 'paypal') {
            setCommissionRate('3 %');
            const newCommission = (parseFloat(amount) * 0.03).toFixed(2);
            const newTotal = (parseFloat(amount) - parseFloat(newCommission)).toFixed(2);
            setCommission(newCommission);
            setTotal(newTotal);
        }
    }

    const validationAmountButton = (): boolean => {
        const valid = generalValidationButtonNext({
            validations: [
                parseFloat(amount) > 0,
                paymentType !== '',
                walletAccountPostsId !== ''
            ],
            inputId: 'amount-recharge-button',
        })
        return valid;
    }

    const validationInfoButton = (): boolean => {
        const valid = generalValidationButtonNext({
            validations: [
                nameSend !== '',
                number !== ''
            ],
            inputId: 'info-recharge-button',
        })
        return valid;
    }

    const infoReset = (): void => {
        setPaymentType('');
        setAmount('');
        setCommission('');
        setTotal('');
        setCommissionRate('');
        setNameSend('');
        setNumber('');
        setWalletAccountPostsId('');
    }

    useEffect(() => {
        changeTotal();
    }, [paymentType, amount]); // eslint-disable-line react-hooks/exhaustive-deps

    const states = { paymentType, amount, paymentTypeOptions, commission, total, commissionRate, nameSend, number, walletAccountPostsId};
    const actions = { setPaymentType, setAmount, infoReset, validationAmountButton, setNameSend, setNumber, validationInfoButton, setWalletAccountPostsId};

    return { states, actions };

}