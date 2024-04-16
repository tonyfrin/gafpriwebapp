import { UseGafpriPagesRechargeReturn, useGafpriPagesRecharge } from "./useGafpriPagesRecharge";
import { UseGafpriAttributesRechargeReturn, useGafpriAttributesRecharge } from "./useGafpriAttributesRecharge";
import { UseGafpriPagesTransfersReturn, useGafpriPagesTransfers } from "./useGafpriPagesTransfers";
import { UseGafpriAttributesTransfersReturn, useGafpriAttributesTransfers } from "./useGafpriAttributesTransfers";
import { UseGafpriApiWalletAccountReturn, useGafpriApiWalletAccount } from "./useGafpriApiWalletAccount";
import { UseGafpriLoginReturn } from "../login/useGafpriLogin";
import { UseGafpriAttributesWalletReturn, useGafpriAttributesWallet } from "./useGafpriAttributesWallet";
import { UseGafpriUserReturn } from "../user/useGafpriUser";
import { SiteOptions } from "../../config/gafpriConfig";

type actions = {
    globalResetInfo: () => void;
}

export type UseGafpriWalletReturn = {
    pagesRecharge: UseGafpriPagesRechargeReturn;
    attributesRecharge: UseGafpriAttributesRechargeReturn;
    pagesTransfers: UseGafpriPagesTransfersReturn;
    attributesTransfers: UseGafpriAttributesTransfersReturn;
    account: UseGafpriApiWalletAccountReturn;
    attributes: UseGafpriAttributesWalletReturn;
    actions: actions;
}

export type UseGafpriWalletProps = {
    useLogin: UseGafpriLoginReturn;
    useUser: UseGafpriUserReturn;
    siteOptions: SiteOptions;
}



export const useGafpriWallet = ({useLogin, useUser, siteOptions}: UseGafpriWalletProps): UseGafpriWalletReturn => {
    const attributesRecharge = useGafpriAttributesRecharge();
    const pagesRecharge = useGafpriPagesRecharge({attributesRecharge});
    const attributesTransfers = useGafpriAttributesTransfers();
    const pagesTransfers = useGafpriPagesTransfers({attributesTransfers});
    const account = useGafpriApiWalletAccount({useLogin, attributesRecharge, siteOptions});
    const attributes = useGafpriAttributesWallet({account, useLogin, useUser});
    
    const globalResetInfo = (): void => {
        attributes.actions.infoReset();
        pagesRecharge.actions.returnInit();
        pagesTransfers.actions.returnInit();
    }
    
    const actions: actions = {
        globalResetInfo
    }

    return { 
        pagesRecharge, 
        attributesRecharge,
        pagesTransfers,
        attributesTransfers,
        account,
        attributes,
        actions,
    };
}