import React, { useState } from "react";
import { generalValidationButtonNext } from '../../helpers';

type state = {
    roleName: string;
    roleNameOptions: { value: string; label: string }[];
    entityId: string;
    currentPassword: string;
    newPassword: string;
}

type actions = {
    setRoleName: (value: string) => void;
    setEntityId: (value: string) => void;
    setCurrentPassword: (value: string) => void;
    setNewPassword: (value: string) => void;
    validationPasswordBotton: () => boolean;
}

export type UseGafpriAttributesUserReturn = {
    states: state;
    actions: actions;
}


export const useGafpriAttributesUser = (): UseGafpriAttributesUserReturn => {
    const [entityId, setEntityId] = useState<string>('');
    const [roleName, setRoleName] = useState<string>('');
    const roleNameOptions = [
        {value: 'Customer', label: 'Customer'},
        {value: 'Employee', label: 'Employee'},
        {value: 'Technical', label: 'Technical'},
    ];
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');

    const validationPasswordBotton = (): boolean => {
        const valid = generalValidationButtonNext({
            validations: [
                currentPassword !== '',
                newPassword !== '',
                newPassword.length >= 8,
            ],
            inputId: 'password',
        });
        return valid;
    }

    return {
        states: {
            roleName,
            roleNameOptions,
            entityId,
            currentPassword,
            newPassword,
        },
        actions: {
            setRoleName,
            setEntityId,
            setCurrentPassword,
            setNewPassword,
            validationPasswordBotton
        }
    }

}