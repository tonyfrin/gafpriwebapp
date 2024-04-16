import { UseGafpriApiAddressReturn, useGafpriApiAddress } from "./useGafpriApiAddress";
import { UseGafpriAttributesAddressReturn, useGafpriAttributesAddress } from "./useGafpriAttributesAddress";
import { UseGafpriLoginReturn } from "../../login/useGafpriLogin";

export type UseGafpriAddressProps = {
    useLogin: UseGafpriLoginReturn;
} 

export type UseGafpriAddressReturn = {
    attributes: UseGafpriAttributesAddressReturn;
    api: UseGafpriApiAddressReturn;
}

export const useGafpriAddress = ({
    useLogin,
}: UseGafpriAddressProps): UseGafpriAddressReturn => {
    const attributes = useGafpriAttributesAddress();
    const api = useGafpriApiAddress({useLogin, attributes});
    
    return {
        attributes,
        api,
    }
}