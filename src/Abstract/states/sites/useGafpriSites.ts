import { UseGafpriApiSitesReturn, useGafpriApiSites } from "./useGafpriApiSites";
import { UseGafpriLoginReturn } from "../login/useGafpriLogin";

export type UseGafpriSitesProps = {
    useLogin: UseGafpriLoginReturn;
} 

export type UseGafpriSitesReturn = {
    api: UseGafpriApiSitesReturn;
}

export const useGafpriSites = ({
    useLogin,
}: UseGafpriSitesProps): UseGafpriSitesReturn => {
    const api = useGafpriApiSites({useLogin});
    
    return {
        api,
    }
}