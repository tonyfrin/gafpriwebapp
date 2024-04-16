import React from 'react';
import { Layout } from './Layout';
import { LoginStep } from '../Step/Login/LoginStep';
import { useGafpriLogin } from '../states/login/useGafpriLogin';
import { useTheme } from '../context/ThemeContext';

export const LoginForm = () => {
  const { useLogin } = useTheme();

  

  return (
    <>
     <Layout
        containerStyles={{
            custom: `
                background-color: #f9f9f9;
            `,
        }}
     ><>

     <LoginStep 
      useLogin={useLogin}
     />


     </>
    </Layout>
    </>
  );
}
