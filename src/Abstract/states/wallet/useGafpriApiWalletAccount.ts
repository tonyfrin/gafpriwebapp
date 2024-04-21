import { PostsAttributesReturn } from "../posts/useGafpriApiPosts";
import { gafpriFetch } from "../../helpers";
import { WALLET_ACCOUNT_ROUTE, PAYMENT_WALLET, WALLET_TRANSACTIONS } from "../../constants";
import { UseGafpriLoginReturn } from "../login/useGafpriLogin";
import { EntityAttributesReturn } from "../user/useGafpriApiEntity";
import { UseGafpriAttributesRechargeReturn } from "./useGafpriAttributesRecharge";
import { SiteOptions } from '../../config/gafpriConfig';
import { UseGafpriAttributesTransfersReturn } from "./useGafpriAttributesTransfers";

export type WalletAccountAtrributesReturn = {
    postsId: string;
    id: string;
    entityId: string;
    currenciesId: string;
    name: string;
    available: string;
    pending: string;
    balance: string;
    posts: PostsAttributesReturn;
    email: string;
    phone: string;
    entity: EntityAttributesReturn;
}

export interface WalletBeneficiariesAttributesReturn {
    id: number;
    walletAccountId: number;
    type: string;
    name: string;
    email?: string;
    zelle?: string;
    phone?: string;
    bankName?: string;
    accountNumber?: string;
    routing?: string;
    swift?: string;
    address1?: string;
    city?: string;
    state?: string;
    postCode?: string;
    country?: string;
    status?: string;
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
    walletAccount: WalletAccountAtrributesReturn;
}

type DataItemsReturn = {
    items?: WalletAccountAtrributesReturn[];
    totalCount?: number;
    success: boolean;
    statusCode?: number;
    error?: string;
    message?: string;
 }

 type DataItemsBeneficiariesReturn = {
    items?: WalletBeneficiariesAttributesReturn[];
    totalCount?: number;
    success: boolean;
    statusCode?: number;
    error?: string;
    message?: string;
 }

 type DataItemReturn = {
    item?: WalletAccountAtrributesReturn;
    success: boolean;
    statusCode?: number;
    error?: string;
    message?: string;
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
    getBeneficiaries: () => Promise<DataItemsBeneficiariesReturn>;
    getWalletAccountByEmail: (email: string) => Promise<DataItemReturn>; 
    addTransfer: () => Promise<any>;
}

export type UseGafpriApiWalletAccountReturn = {
    actions: actions;
}

export type UseGafpriApiWalletAccountProps = {
    useLogin: UseGafpriLoginReturn;
    attributesRecharge: UseGafpriAttributesRechargeReturn;
    siteOptions: SiteOptions;
    attributesTransfers: UseGafpriAttributesTransfersReturn;
}


export const useGafpriApiWalletAccount = ({useLogin, attributesRecharge, siteOptions, attributesTransfers}: UseGafpriApiWalletAccountProps): UseGafpriApiWalletAccountReturn  => {
    
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

    const addTransfer = async (): Promise<any> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'POST',
                    initRoute: PAYMENT_WALLET,
                    initToken: { token: useLogin.data.states.token },
                    initCredentials:{
                        total: attributesTransfers.states.amount,
                        note: 'Transferencia de saldo',
                        posts: {
                            visibility: 'public',
                        },
                        paymentMethods: [
                            {
                                paymentMethods:{
                                    type: 'deposit',
                                    methodType: 'wallet',
                                    paymentType: 'wallet-transfer',
                                    currenciesId: siteOptions.currencyId,
                                    amount: attributesTransfers.states.amount,
                                    change: attributesTransfers.states.amount,
                                    nameSend: attributesTransfers.states.account?.name,
                                    note: 'Transferencia de saldo',
                                    posts: {
                                        visibility: 'public',
                                    },
                                },
                                walletTransactions: {
                                    walletAccountPostsId: attributesTransfers.states.beneficiary?.postsId,
                                    type: 'deposit',
                                    transactionsType: 'transfer',
                                    amount: attributesTransfers.states.amount,
                                }
                            },
                            {
                                paymentMethods:{
                                    type: 'debit',
                                    methodType: 'wallet',
                                    paymentType: 'wallet-transfer',
                                    currenciesId: siteOptions.currencyId,
                                    amount: attributesTransfers.states.amount,
                                    change: attributesTransfers.states.amount,
                                    nameSend: attributesTransfers.states.beneficiary?.entity.name,
                                    note: 'Transferencia de saldo',
                                    posts: {
                                        visibility: 'public',
                                    },
                                },
                                walletTransactions: {
                                    walletAccountPostsId: attributesTransfers.states.account?.id,
                                    type: 'debit',
                                    transactionsType: 'transfer',
                                    amount: attributesTransfers.states.amount,
                                }
                            }    
                    ]
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

    const getBeneficiaries = async (): Promise<DataItemsBeneficiariesReturn> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'GET',
                    initRoute: `${WALLET_ACCOUNT_ROUTE}/beneficiaries`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
            return { success: false, error: 'No token' };
        } catch (error) {
            console.error(error);
            return {
                success: false,
                error: 'Error en consola',
            };
        }
    }

    const getWalletAccountByEmail = async (email: string): Promise<DataItemReturn> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'GET',
                    initRoute: `${WALLET_ACCOUNT_ROUTE}/byemail/${email}`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
            return { success: false, error: 'No token' };
        } catch (error) {
            console.error(error);
            return {
                success: false,
                error: 'Error en consola',
            };
        }
    }


    const actions = {
        getWalletAccount,
        addRecharge,
        getWalletAccountByPostsId,
        getWalletTransactionsByPostsId,
        getBeneficiaries,
        getWalletAccountByEmail,
        addTransfer
    }

    return {
        actions
    }


}