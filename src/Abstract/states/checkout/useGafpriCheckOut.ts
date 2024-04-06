import { useGafpriPagesCheckOut, UseGafpriPagesCheckOutReturn } from "./useGafpriPagesCheckOut";

export type UseGafpriCheckOutReturn = {
    pages: UseGafpriPagesCheckOutReturn;
}

export const useGafpriCheckOut = (): UseGafpriCheckOutReturn => {
    return {
        pages: useGafpriPagesCheckOut(),
    }
}