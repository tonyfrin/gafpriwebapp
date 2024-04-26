import { useState, useEffect } from 'react';
import { gafpriFetch } from '../../helpers';
import { SITES_ROUTE } from '../../constants';
import { UseGafpriLoginReturn } from '../login/useGafpriLogin';
import { EntityAttributesReturn } from '../user/useGafpriApiEntity';

type SitesEntityAttributesReturn = {
    id: string;
    sitesId: string;
    entityId: string;
    entity: EntityAttributesReturn;
}

export type SitesAttributesReturn = {
    id: string;
    name: string;
    tradename: string;
    documentIndex: string;
    documentNumber: string;
    address1: string;
    address2: string | null;
    city: string;
    state: string;
    postCode: string | null;
    country: string;
    email: string | null;
    phone: string | null;
    currenciesId: number;
    currencyLocation: string;
    thousandsSeparator: string;
    decimalSeparator: string;
    decimalNumbers: number;
    taxes: boolean;
    host: string;
    createdAt: string;
    modifiedAt: string;
    sitesEntity: SitesEntityAttributesReturn[];
}

type States = {
    sites: SitesAttributesReturn[] | null;
    sitesIsReady: boolean;
}

type Actions = {
    getSites: () => Promise<any>;
}

export type UseGafpriApiSitesReturn = {
    actions: Actions;
    states: States;
}

type UseGafpriApiSitesProps = {
    useLogin: UseGafpriLoginReturn;
}

export const useGafpriApiSites = ({
    useLogin,
}: UseGafpriApiSitesProps): UseGafpriApiSitesReturn => {
    const [sites, setSites] = useState<SitesAttributesReturn[] | null>(null);
    const [sitesIsReady, setSitesIsReady] = useState<boolean>(false);
    
    
    const getSites = async (): Promise<any> => {
        try {
    
          if(useLogin.data.states.token){
            const data = await gafpriFetch({
              initMethod: 'GET',
              initRoute: SITES_ROUTE,
              initToken: { token: useLogin.data.states.token }
            });
            return data;
          }
        } catch (error) {
          return error;
        }
    };

    useEffect(() => {
      
        const fetchSites = async () => {
          try {
            setSitesIsReady(false);
            const data = await getSites();
            console.log('data', data);
            if(data && data.success){
              setSites(data.data.items);
            } else {
              setSites([]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setSitesIsReady(true);
          }
        }
    
   
    
        fetchSites();
     
    }, [useLogin.data.states.token]);  // eslint-disable-line react-hooks/exhaustive-deps

    const actions = {
        getSites
    }

    const states = {
        sites,
        sitesIsReady
    }

    return {
        actions,
        states
    }
}