import { gafpriFetch } from '../../helpers';
import { SITES_ROUTE } from '../../constants';
import { UseGafpriLoginReturn } from '../login/useGafpriLogin'

export type SitesAttributesReturn = {
    id: string;
    name: string;
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
}

type Actions = {
    getSites: () => Promise<any>;
}

export type UseGafpriApiSitesReturn = {
    actions: Actions;
}

type UseGafpriApiSitesProps = {
    useLogin: UseGafpriLoginReturn;
}

export const useGafpriApiSites = ({
    useLogin,
}: UseGafpriApiSitesProps): UseGafpriApiSitesReturn => {
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

    const actions = {
        getSites
    }

    return {
        actions
    }
}