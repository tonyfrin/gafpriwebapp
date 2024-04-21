'use client'
import { useState } from "react";
import { UseGafpriLoginReturn, useGafpriLogin } from "./login/useGafpriLogin";
import { UseGafpriErrorReturn, useGafpriError } from "./useGafpriError";
import { UseGafpriCategoryReturn, useGafpriCategory } from "./category/useGafpriCategory";
import { siteOptions, SiteOptions } from "../config/gafpriConfig";
import { UseGafpriProductsReturn, useGafpriProducts } from "./products/useGafpriProducts";
import { useGafpriCartItems, UseGafpriCartItemsReturn } from "./cartItems/useGafpriCartItems";
import { UseGafpriCartReturn, useGafpriCart } from "./cart/useGafpriCart";
import { UseGafpriCheckOutReturn, useGafpriCheckOut } from "./checkout/useGafpriCheckOut";
import { UseGafpriUserReturn, useGafpriUser } from "./user/useGafpriUser";
import { UseGafpriAddressReturn, useGafpriAddress } from "./user/address/useGafpriAddress";
import { UseGafpriSitesReturn, useGafpriSites } from "./sites/useGafpriSites";
import { UseGafpriOrderReturn, useGafpriOrder } from "./order/useGafpriOrder";
import { UseGafpriProfileReturn, useGafpriProfile } from "./profile/useGafpriProfile";
import { UseGafpriWalletReturn, useGafpriWallet } from "./wallet/useGafpriWallet";
import { UseGafpriSingUpReturn, useGafpriSingUp } from "./singUp/useGafpriSingUp";
import { UseGafpriPaymentMethodsReturn, useGafpriPaymentMethods } from "./paymentMethods/useGafpriPaymentMethods";

type State = {
    isFetchingGlobal: boolean;
}

type Actions = {
    globalResetInfo: () => void;
}

export type UseGafpriAppWebReturn = {
    state: State;
    actions: Actions;
    useLogin: UseGafpriLoginReturn;
    useError: UseGafpriErrorReturn;
    useCategory: UseGafpriCategoryReturn;
    siteOptions: SiteOptions;
    useProducts: UseGafpriProductsReturn;
    useCartItems: UseGafpriCartItemsReturn;
    useCart: UseGafpriCartReturn;
    useCheckOut: UseGafpriCheckOutReturn;
    useUser: UseGafpriUserReturn;
    useAddress: UseGafpriAddressReturn;
    useSites: UseGafpriSitesReturn;
    useOrder: UseGafpriOrderReturn;
    useProfile: UseGafpriProfileReturn;
    useWallet: UseGafpriWalletReturn;
    useSingUp: UseGafpriSingUpReturn;
    usePaymentMethods: UseGafpriPaymentMethodsReturn;
}

export const useGafpriAppWeb = (): UseGafpriAppWebReturn => {
    const [isFetchingGlobal, setIsFetchingGlobal] = useState<boolean>(false);

    const globalResetInfo = (): void => {
        
    }
    const useError = useGafpriError();
    const useLogin = useGafpriLogin({ setIsFetchingGlobal, globalResetInfo, useError});
    const useCategory = useGafpriCategory({ useError, useLogin });
    const useProducts = useGafpriProducts({useError, useLogin});
    const useCartItems = useGafpriCartItems({useLogin});
    const useCart = useGafpriCart({useLogin});
    const useCheckOut = useGafpriCheckOut();
    const useUser = useGafpriUser({useLogin, siteOptions});
    const useAddress = useGafpriAddress({useLogin});
    const useSites = useGafpriSites({useLogin});
    const useOrder = useGafpriOrder({useLogin, useCheckOut, siteOptions});
    const useProfile = useGafpriProfile();
    const useWallet = useGafpriWallet({useLogin, useUser, siteOptions});
    const useSingUp = useGafpriSingUp({useError});
    const usePaymentMethods = useGafpriPaymentMethods({useLogin});

    const state = {
        isFetchingGlobal
    }

    const actions = {
        globalResetInfo
    }
    
    return {
        useError,
        useLogin,
        useCategory,
        siteOptions,
        useProducts,
        state,
        actions,
        useCartItems,
        useCart,
        useCheckOut,
        useUser,
        useAddress,
        useSites,
        useOrder,
        useProfile,
        useWallet,
        useSingUp,
        usePaymentMethods
    }
}