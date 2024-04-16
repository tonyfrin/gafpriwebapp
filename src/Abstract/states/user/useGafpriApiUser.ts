import React from 'react';
import { gafpriFetch } from '../../helpers';
import { USER_ROUTE } from '../../constants';
import { UseGafpriLoginReturn } from '../login/useGafpriLogin';
import { EntityAttributesReturn } from './useGafpriApiEntity';
import { SiteOptions } from '../../config/gafpriConfig';
import { UseGafpriAttributesUserReturn } from './useGafpriAttributesUser';

export type UserAttributesReturn = {
    id: string;
    login: string;
    email: string;
    phone: string;
    rolesId: string;
    name: string;
    lastName: string | null;
    photo: string | null;
    emailConfirmation: boolean;
    phoneConfirmation: boolean;
    isActive: boolean;
    createdAt: string;
    modifiedAt: string;
    entity: EntityAttributesReturn[];
}

type Actions = {
    getUser: () => Promise<any>;
    getUserPending: (offset: number, limit:  number) => Promise<any>;
    getUserById: (id: string) => Promise<any>;
    userAproval: (id: string) => Promise<any>;
    userCancel: (id: string) => Promise<any>;
}

export type UseGafpriApiUserReturn = {
    actions: Actions;
}

export type UseGafpriApiUserProps = {
    useLogin: UseGafpriLoginReturn;
    siteOptions: SiteOptions;
    attributes: UseGafpriAttributesUserReturn;
}

export function useGafpriApiUser({
    useLogin,
    siteOptions,
    attributes,
}: UseGafpriApiUserProps): UseGafpriApiUserReturn {

    const getUser = async (): Promise<any> => {
        try {
    
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'GET',
              initRoute: `${USER_ROUTE}/current`,
              initToken: { token: useLogin.data.states.token }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    };

    const getUserById = async (id: string): Promise<any> => {
        try {
    
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'GET',
              initRoute: `${USER_ROUTE}/${id}`,
              initToken: { token: useLogin.data.states.token }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    }

    const getUserPending = async (offset: number, limit:  number): Promise<any> => {
        try {
    
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'GET',
              initRoute: `${USER_ROUTE}?status=pending&orderBy=id&order=ASC&offset=${offset}&limit=${limit}&include=entity`,
              initToken: { token: useLogin.data.states.token }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    }

    const userAproval = async (id: string): Promise<any> => {
        try {
    
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'PATCH',
              initRoute: `${USER_ROUTE}/aproved/${id}`,
              initToken: { token: useLogin.data.states.token },
              initCredentials: {
                currenciesId: siteOptions.currencyId,
                entityId: attributes.states.entityId,
                roleName: attributes.states.roleName
              }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    }

    const userCancel = async (id: string): Promise<any> => {
        try {
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'DELETE',
              initRoute: `${USER_ROUTE}/${id}`,
              initToken: { token: useLogin.data.states.token }
            });
            return data;
          }
          return null;
        } catch (error) {
          return error;
        }
    }

    const actions = {
        getUser,
        getUserPending,
        getUserById,
        userAproval,
        userCancel
    }

    return {
        actions
    }
}