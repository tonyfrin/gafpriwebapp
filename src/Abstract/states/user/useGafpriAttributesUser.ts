import React, { useState } from "react";

type state = {
    roleName: string;
    roleNameOptions: { value: string; label: string }[];
    entityId: string;
}

type actions = {
    setRoleName: (value: string) => void;
    setEntityId: (value: string) => void;
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

    return {
        states: {
            roleName,
            roleNameOptions,
            entityId,
        },
        actions: {
            setRoleName,
            setEntityId,
        }
    }

}