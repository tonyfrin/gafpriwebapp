'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { UseGafpriAttributesLoginReturn } from './useGafpriAttributesLogin';

type State = {
  isLogin: string;
};

type Actions = {
  login: () => boolean;
};



export type UseGafpriApiLoginReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriApiLoginProps = {
  attributes: UseGafpriAttributesLoginReturn;
}

export function useGafpriApiLogin({
  attributes,
}: UseGafpriApiLoginProps): UseGafpriApiLoginReturn {
  const [isLogin, setIsLogin] = useState<string>('');
  

  const login = () => {
    return attributes.states.userName === 'mary' && attributes.states.password === '1234'
  }

  /**
   * Export
   *
   *
   */
  const states = {
    isLogin,
  };

  const actions = {
    login,
  };

  return {
    states,
    actions,
  };
}
