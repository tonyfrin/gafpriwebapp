import { UseGafpriApiOrderReturn, useGafpriApiOrder } from "./useGafpriApiOrder";
import { UseGafpriLoginReturn } from "../login/useGafpriLogin";
import { UseGafpriCheckOutReturn } from "../checkout/useGafpriCheckOut";

export type UseGafpriOrderProps = {
    useLogin: UseGafpriLoginReturn;
    useCheckOut: UseGafpriCheckOutReturn;
} 

export type UseGafpriOrderReturn = {
    api: UseGafpriApiOrderReturn;
}

export const useGafpriOrder = ({
    useLogin,
    useCheckOut,
}: UseGafpriOrderProps): UseGafpriOrderReturn => {
    const api = useGafpriApiOrder({useLogin, useCheckOut});
    
    return {
        api,
    }
}