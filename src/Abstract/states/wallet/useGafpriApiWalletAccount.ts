import { PostsAttributesReturn } from "../posts/useGafpriApiPosts";
import { gafpriFetch } from "../../helpers";
import { WALLET_ACCOUNT_ROUTE, PAYMENT_WALLET, WALLET_TRANSACTIONS } from "../../constants";
import { UseGafpriLoginReturn } from "../login/useGafpriLogin";
import { EntityAttributesReturn } from "../user/useGafpriApiEntity";
import { UseGafpriAttributesRechargeReturn } from "./useGafpriAttributesRecharge";
import { SiteOptions } from '../../config/gafpriConfig';

export type WalletAccountAtrributesReturn = {
    postsId: string;
    entityId: string;
    currenciesId: string;
    name: string;
    available: string;
    pending: string;
    balance: string;
    posts: PostsAttributesReturn;
    entity: EntityAttributesReturn;
}

export type WalletTransactionsAttributesReturn = {
    id: string;
    walletAccountPostsId: string;
    paymentMethodsPostsId: string;
    type: string;
    transactionType: string;
    description: string;
    amount: string;
    change: string;
    status: string;
    createdAt: string;
}

type actions = {
    getWalletAccount: () => Promise<any>;
    addRecharge: () => Promise<any>;
    getWalletAccountByPostsId: (postsId: string) => Promise<any>;
    getWalletTransactionsByPostsId: (
        postsId: string,
        status: string,
        limit: number,
        offset: number,
    ) => Promise<any>;
}

export type UseGafpriApiWalletAccountReturn = {
    actions: actions;
}

export type UseGafpriApiWalletAccountProps = {
    useLogin: UseGafpriLoginReturn;
    attributesRecharge: UseGafpriAttributesRechargeReturn;
    siteOptions: SiteOptions;
}


export const useGafpriApiWalletAccount = ({useLogin, attributesRecharge, siteOptions}: UseGafpriApiWalletAccountProps): UseGafpriApiWalletAccountReturn  => {
    
    const getWalletAccount = async (): Promise<any> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'GET',
                    initRoute: `${WALLET_ACCOUNT_ROUTE}/app`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
        } catch (error) {
            return error;
        }
    }

    const getWalletAccountByPostsId = async (postsId: string): Promise<any> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'GET',
                    initRoute: `${WALLET_ACCOUNT_ROUTE}/app/${postsId}`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
        } catch (error) {
            return error;
        }
    }


    const addRecharge = async (): Promise<any> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'POST',
                    initRoute: PAYMENT_WALLET,
                    initToken: { token: useLogin.data.states.token },
                    initCredentials:{
                        total: attributesRecharge.states.amount,
                        note: 'Recarga de saldo',
                        posts: {
                            visibility: 'public',
                        },
                        paymentMethods: [{
                            paymentMethods:{
                                type: 'deposit',
                                methodType: 'wallet',
                                paymentType: attributesRecharge.states.paymentType,
                                currenciesId: siteOptions.currencyId,
                                number: attributesRecharge.states.number,
                                amount: attributesRecharge.states.amount,
                                change: attributesRecharge.states.amount,
                                note: 'Recarga de saldo',
                                nameSend: attributesRecharge.states.nameSend,
                                posts: {
                                    visibility: 'public',
                                },
                            },
                            walletTransactions: {
                                walletAccountPostsId: attributesRecharge.states.walletAccountPostsId,
                                type: 'deposit',
                                transactionsType: 'recharge',
                                amount: attributesRecharge.states.amount,
                            }
                        }]
                    }
                });
                return data;
            }
        } catch (error) {
            return error;
        }
    }

    const getWalletTransactionsByPostsId = async (
        postsId: string,
        status: string,
        limit: number,
        offset: number,
    ): Promise<any> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'GET',
                    initRoute: `${WALLET_TRANSACTIONS}?walletAccountPostsId=${postsId}&status=${status}&limit=${limit}&offset=${offset}&orderBy=id&order=DESC`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
        } catch (error) {
            return error;
        }
    }


    const actions = {
        getWalletAccount,
        addRecharge,
        getWalletAccountByPostsId,
        getWalletTransactionsByPostsId
    }

    return {
        actions
    }


}