import React, { useState } from 'react';
import { generalValidationButtonNext } from '../../helpers';
import { siteOptions } from '../../config/gafpriConfig';
import { UseGafpriPagesCheckOutReturn } from './useGafpriPagesCheckOut';


type state = {
    shippingType: string;
    addressId: string;
    sitesId: string;
    paymentMethod: string;
    salesChannel: string;
    mainSitesId: number;
}

type Actions = {
    setShippingType: (shippingType: string) => void;
    setAddressId: (addressId: string) => void;
    setSitesId: (sitesId: string) => void;
    setPaymentMethod: (paymentMethod: string) => void;
    validationButtonNext: () => boolean;
    infoReset: () => void;
}

export type UseGafpriAttributesCheckOutReturn = {
    states: state;
    actions: Actions;
}

export type UseGafpriApiAttributesCheckOutProps = {
    usePages: UseGafpriPagesCheckOutReturn;
}

export function useGafpriAttributesCheckOut({usePages}: UseGafpriApiAttributesCheckOutProps): UseGafpriAttributesCheckOutReturn {
    const [shippingType, setShippingType] = useState<string>('');
    const [addressId, setAddressId] = useState<string>('');
    const [sitesId, setSitesId] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const salesChannel = 'online';
    const mainSitesId = siteOptions.id;

    const infoReset = (): void => {
        setShippingType('');
        setAddressId('');
        setSitesId('');
        setPaymentMethod('');
        usePages.actions.onInit();
    }

    const validationButtonNext = () => {
       return generalValidationButtonNext({
        validations: [
            shippingType !== '',
            (addressId !== '' || sitesId !== ''),
            paymentMethod !== ''
        ],
        inputId: 'gs-button-purchase'
       })
    }


    const states = {
        shippingType,
        addressId,
        sitesId,
        paymentMethod,
        salesChannel,
        mainSitesId
    }

    const actions = {
        setShippingType,
        setAddressId,
        setSitesId,
        setPaymentMethod,
        validationButtonNext,
        infoReset
    }

    return {
        states,
        actions
    }
}