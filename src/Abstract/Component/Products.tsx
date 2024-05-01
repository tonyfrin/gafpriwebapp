import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../context/ThemeContext';
import { LayoutApp } from './LayoutApp';
import { Product } from '../Product/Product';
import { ProductsAttributesReturn } from '../states/products/useGafpriApiProducts';
import { Loading } from '../Loading';

const mainStyles = css`
  margin-bottom: 100px;
`

export function Products({id}: {id: string | string[] | undefined}) {
  const [fetching, setFetching] = useState<boolean>(true);
  const [item, setItem] = useState<ProductsAttributesReturn | null>(null);
  const { useLogin, useProducts } = useTheme();

  useEffect(() => {
      if(id && typeof id === 'string') {
      const fetchData = async () => {
        try {
          useProducts.api.actions.getProductById(id, setItem);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setFetching(false);
        }
          
      }

      fetchData();
    };
  }, [useLogin.data.states.token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <LayoutApp>
        <>
          <main className={mainStyles}>
            {fetching ? ( <Loading /> ) :
            
            !item ? 
            (
              <h1 style={{
                textAlign: 'center',
                fontSize: '1em',
                padding: '2em 0em',
              }}>Producto no encontrado</h1> 
            ) : 
            (
              <div>
                <Product item={item} />
              </div>
            )}
          </main>
        </>
      </LayoutApp>
    </>
  );
}