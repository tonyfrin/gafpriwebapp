import { cx, css } from '@emotion/css';
import { MainFooter } from '../Footer/Footer';
import Logo from '../assets/img/logo-blanco.png';
import { AppHeader } from '../Header/AppHeader';
import { MenuFooterApp } from '../Menu/MenuFooterApp'

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
  background-color: #f9f9f9;
  ${styles.custom || ''}
`;


export type LayoutAppProps = {
  children: React.ReactNode;
  containerStyles?: LayoutContainerStyleProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const LayoutApp = ({ 
  children,
  containerStyles = {},
  containerProps = {},
}: LayoutAppProps) => {
  const { className: containerClassName, ...restContainerProps } = containerProps;
  return (
      <div className={cx(layoutContainerStyle(containerStyles), containerClassName)} {...restContainerProps}>
      <>
      <AppHeader
            props={{
                image: Logo,
            }}
        />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <MenuFooterApp />
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
