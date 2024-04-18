import React, { useEffect, useState } from 'react';
import { cx, css } from '@emotion/css';
import { useRouter } from 'next/router';
import { useTheme } from '../context/ThemeContext';
import { MainFooter } from '../Footer/Footer';
import Logo from '../assets/img/logo-blanco.png';
import { SingleHeader } from '../Header/SingleHeader';
import { Loading } from '../Loading';

type LayoutContainerStyleProps = {
  display?: string;
  backgroundImage?: string;
  flexDirection?: string;
  minHeight?: string;
  custom?: string;
};

const layoutContainerStyle = (
  styles: LayoutContainerStyleProps
) => css`
  ${styles.backgroundImage ? `background-image: url(${styles.backgroundImage});` : ''}
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'column'};
  min-height: ${styles.minHeight || '100vh'};
  ${styles.custom || ''}
`;


export type LayoutLoginProps = {
  children: React.ReactNode;
  containerStyles?: LayoutContainerStyleProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const LayoutLogin = ({ 
  children,
  containerStyles = {},
  containerProps = {},
}: LayoutLoginProps) => {
  const { className: containerClassName, ...restContainerProps } = containerProps;
  const { useLogin } = useTheme();
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await useLogin.data.actions.checkLoginToken(); // Llamar a la API
        useLogin.data.actions.onCheckLoginTokenLogin(response); // Actualizar el estado con la respuesta
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Marcar la carga como completa, independientemente del resultado
      }
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
      <div className={cx(layoutContainerStyle(containerStyles), containerClassName)} {...restContainerProps}>
      <>
      <SingleHeader
            props={{
                image: Logo,
                styleSection: {
                    padding: '0'
                },
            }}
        />
        <main style={{ flexGrow: 1 }}>{loading ? (<Loading />) : children}</main>
        <MainFooter 
            siteName="Gafpri Store"
            isLogin={false}
            styles={{
                position: 'relative',
            }}
        />
        </> 
      </div>
  );
};
