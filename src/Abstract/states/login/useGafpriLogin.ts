import { useGafpriApiLogin, UseGafpriApiLoginReturn } from "./useGafpriApiLogin";
import { useGafpriAttributesLogin, UseGafpriAttributesLoginReturn } from "./useGafpriAttributesLogin";

export type UseGafpriLoginReturn = {
    api: UseGafpriApiLoginReturn;
    attributes: UseGafpriAttributesLoginReturn;
}

export const useGafpriLogin = (): UseGafpriLoginReturn => {
    const attributes = useGafpriAttributesLogin();
    const api = useGafpriApiLogin({ attributes});
    
    return {
        api,
        attributes,
    }
}