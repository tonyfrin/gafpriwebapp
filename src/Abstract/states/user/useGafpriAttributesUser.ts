import { useState } from "react";
import { generalValidationButtonNext, validationInput } from '../../helpers';

type state = {
    roleName: string;
    roleNameOptions: { value: string; label: string }[];
    entityId: string;
    currentPassword: string;
    newPassword: string;
    email: string;
    emailValid: boolean;
}

type actions = {
    setRoleName: (value: string) => void;
    setEntityId: (value: string) => void;
    setCurrentPassword: (value: string) => void;
    setNewPassword: (value: string) => void;
    validationPasswordBotton: () => boolean;
    validationPasswordResetBotton: () => boolean;
    validationEmail: (value: string) => boolean;
    changeEmail: (value: string) => void;
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
    const [email, setEmail] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);


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

    const validationPasswordResetBotton = (): boolean => {
        const valid = generalValidationButtonNext({
            validations: [
                emailValid
            ],
            inputId: 'password-reset',
        });
        return valid;
    }

    const validationEmail = (value: string) => {
        const valid = validationInput(
            value,
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            true
        );
        if (valid !== emailValid) {
            setEmailValid(valid);
        }
        return valid;
    }

    const changeEmail = (value: string) => {
        const newValue = value.toLowerCase();
        validationEmail(newValue);
        setEmail(value);
    }

    return {
        states: {
            roleName,
            roleNameOptions,
            entityId,
            currentPassword,
            newPassword,
            email,
            emailValid
        },
        actions: {
            setRoleName,
            setEntityId,
            setCurrentPassword,
            setNewPassword,
            validationPasswordBotton,
            validationPasswordResetBotton,
            validationEmail,
            changeEmail
        }
    }

}