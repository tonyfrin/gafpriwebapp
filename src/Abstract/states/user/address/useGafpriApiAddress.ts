import React from 'react';
import { gafpriFetch } from '../../../helpers';
import { ADDRESS_ROUTE } from '../../../constants';
import { UseGafpriLoginReturn } from '../../login/useGafpriLogin';
import { UseGafpriAttributesAddressReturn } from './useGafpriAttributesAddress';

export type AddressAttributesReturn = {
    id: string;
    type: string;
    address1: string;
    address2: string | null;
    city: string;
    state: string;
    postCode: string | null;
    country: string;
    entityId: string;
    latitude: string | null;
    longitude: string | null;
}

type Actions = {
    addAddress: () => Promise<any>;
    updateAddress: () => Promise<any>;
    getAddress: (id: string) => Promise<any>;
}

export type UseGafpriApiAddressReturn = {
    actions: Actions;
}

export type UseGafpriApiAddressProps = {
    useLogin: UseGafpriLoginReturn;
    attributes: UseGafpriAttributesAddressReturn;
}

export function useGafpriApiAddress({
    useLogin,
    attributes
}: UseGafpriApiAddressProps): UseGafpriApiAddressReturn {

    const addAddress = async (): Promise<any> => {
        try {
    
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'POST',
              initRoute: ADDRESS_ROUTE,
              initToken: { token: useLogin.data.states.token },
              initCredentials: {
                type: attributes.states.type,
                address1: attributes.states.address1,
                address2: attributes.states.address2,
                city:  attributes.states.city,
                state: attributes.states.state,
                postCode: attributes.states.postCode,
                country:  attributes.states.country,
                entityId: attributes.states.entityId,
                latitude: attributes.states.latitude,
                longitude: attributes.states.longitude
              }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    };

    const updateAddress = async (): Promise<any> => {
        try {
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'PATCH',
              initRoute: `${ADDRESS_ROUTE}/${attributes.states.id}`,
              initToken: { token: useLogin.data.states.token },
              initCredentials: {
                address1: attributes.states.address1,
                address2: attributes.states.address2,
                city: attributes.states.city,
                latitude: attributes.states.latitude,
                longitude: attributes.states.longitude
              }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    };

    const getAddress = async (id: string): Promise<any> => {
      try {
        if(useLogin.data.states.token){
          const data = await gafpriFetch({
            initMethod: 'GET',
            initRoute: `${ADDRESS_ROUTE}/${id}`,
            initToken: { token: useLogin.data.states.token }
          });
          return data;
        }
      } catch (error) {
        return error;
      }
  };

    const actions = {
        addAddress,
        updateAddress,
        getAddress
    }

    return {
        actions
    }
}