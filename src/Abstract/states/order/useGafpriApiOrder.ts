import { PostsAttributesReturn } from '../posts/useGafpriApiPosts';
import { OrderItemsAttributesReturn } from './useGafpriApiOrderItems';
import { OrderCustomerAttributesReturn } from './useGafpriApiOrderCustomer';
import { UseGafpriLoginReturn } from '../login/useGafpriLogin';
import { gafpriFetch } from '../../helpers';
import { UseGafpriCheckOutReturn } from '../checkout/useGafpriCheckOut';
import { ORDER_ROUTE } from '../../constants';

export type OrderAttributesReturn = {
    postsId: string;
    customerId: string;
    referredId: string;
    paymentPostsId: string;
    salesChannel: string;
    note: string | null;
    subTotal: string;
    subTotalTax: string;
    costTotal: string;
    total: string;
    refundAmount: string;
    posts: PostsAttributesReturn;
    orderItems: OrderItemsAttributesReturn[];
    orderCustomer: OrderCustomerAttributesReturn[];
}

type actions = {
    createOrder: () => Promise<any>;
    getOrders: () => Promise<any>;
}

export type UseGafpriApiOrderReturn = {
    actions: actions;
}

export type UseGafpriApiOrderProps = {
    useLogin: UseGafpriLoginReturn;
    useCheckOut: UseGafpriCheckOutReturn;
}

export function useGafpriApiOrder ({
    useLogin,
    useCheckOut,
}: UseGafpriApiOrderProps): UseGafpriApiOrderReturn {
    const createOrder = async (): Promise<any> => {
        const data = {
            shippingType: useCheckOut.attributes.states.shippingType,
            paymentMethod: useCheckOut.attributes.states.paymentMethod,
            mainSitesId: useCheckOut.attributes.states.mainSitesId,
            salesChannel: useCheckOut.attributes.states.salesChannel,
        }

        const updateData = {
            ...data,
            ...useCheckOut.attributes.states.addressId !== '' ? { addressId: useCheckOut.attributes.states.addressId } : {},
            ...useCheckOut.attributes.states.sitesId !== '' ? { sitesId: useCheckOut.attributes.states.sitesId } : {},
        }


        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'POST',
                    initCredentials: updateData,
                    initRoute: `${ORDER_ROUTE}/app`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
        } catch (error) {
            return error;
        }
    }

    const getOrders = async (): Promise<any> => {
        try {
            if(useLogin.data.states.token){
                const data = await gafpriFetch({
                    initMethod: 'GET',
                    initRoute: `${ORDER_ROUTE}/app`,
                    initToken: { token: useLogin.data.states.token }
                });
                return data;
            }
        } catch (error) {
            return error;
        }
    }

    return {
        actions: {
            createOrder,
            getOrders,
        }
    }
}