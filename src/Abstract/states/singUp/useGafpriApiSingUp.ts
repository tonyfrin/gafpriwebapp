import {useEffect, useState} from 'react';
import { EMAIL_CHECK_ROUTE, USER_ROUTE } from '../../constants';
import { gafpriFetch } from '../../helpers';
import { UseGafpriAttributesSingUpReturn } from './useGafpriAttributesSingUp';


export type UseGafpriApiSingUpProps = {
    attributes: UseGafpriAttributesSingUpReturn;
}

type actions = {
    requestEmailCode: () => Promise<any>;
    checkEmailCode: () => Promise<any>;
    addUser: () => Promise<any>;
}

export type UseGafpriApiSingUpReturn = {
    actions: actions;
}

export const useGafpriApiSingUp = ({attributes}: UseGafpriApiSingUpProps)  => {

    const requestEmailCode = async (): Promise<any> => {
        try {
            const data = await gafpriFetch({
                initMethod: 'POST',
                initRoute: EMAIL_CHECK_ROUTE,
                initCredentials: { email: attributes.states.email }
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    const checkEmailCode = async (): Promise<any> => {
        try {
            const data = await gafpriFetch({
                initMethod: 'POST',
                initRoute: `${EMAIL_CHECK_ROUTE}/check`,
                initCredentials: { email: attributes.states.email, code: attributes.states.checkEmail }
            });
            return data;
        } catch (error) {
            return error;
        }
    }

    const addUser = async (): Promise<any> => {
        try {
            const data = await gafpriFetch({
              initMethod: 'POST',
              initRoute: `${USER_ROUTE}/app`,
              initCredentials:{
                email: attributes.states.email,
                code: attributes.states.checkEmail,
                phone: attributes.states.phone,
                name: attributes.states.name,
                lastName: attributes.states.lastName,
                photo: attributes.states.userPhoto,
                documentId: {
                    index: attributes.states.index,
                    digit: attributes.states.digit,
                    photo: attributes.states.documentIdPhoto,
                    typeDocumentIdId: attributes.states.typeDocumentIdId
                }
              }
            });
            return data;
        } catch (error) {
          return error;
        }
    }

    return {
        actions: {
            requestEmailCode,
            checkEmailCode,
            addUser
        }
    }

}