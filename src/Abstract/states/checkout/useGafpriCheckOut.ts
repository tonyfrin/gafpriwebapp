import { useGafpriPagesCheckOut, UseGafpriPagesCheckOutReturn } from "./useGafpriPagesCheckOut";
import { useGafpriAttributesCheckOut, UseGafpriAttributesCheckOutReturn } from "./useGafpriAttributesCheckOut";

export type UseGafpriCheckOutReturn = {
    pages: UseGafpriPagesCheckOutReturn;
    attributes: UseGafpriAttributesCheckOutReturn;
}

export const useGafpriCheckOut = (): UseGafpriCheckOutReturn => {
    const pages = useGafpriPagesCheckOut();
    const attributes = useGafpriAttributesCheckOut({usePages: pages});
    
    return {
        pages,
        attributes
    }
}