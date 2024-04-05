import { useGafpriPagesSingUp, UseGafpriPagesSingUpReturn } from "./useGafpriPagesSingUp";
import { useGafpriAttributesSingUp, UseGafpriAttributesSingUpReturn } from "./useGafpriAttributesSingUp";

type state = {
    pages: UseGafpriPagesSingUpReturn;
    attributes: UseGafpriAttributesSingUpReturn;
}

export const useGafpriSingUp = (): state => {
    return {
        pages: useGafpriPagesSingUp(),
        attributes: useGafpriAttributesSingUp(),
    }
}