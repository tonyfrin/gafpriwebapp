import React, { use, useEffect, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { LayoutApp } from './LayoutApp';
import { css } from '@emotion/css';
import { BoxCart } from '../Box/BoxCart';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { Modal } from '../Modal/Modal';
import { CheckOut } from './CheckOut';
import { CartAttributesReturn } from '../states/cart/useGafpriApiCart';
import { useTheme } from '../context/ThemeContext';
import { Loading } from '../Loading';


const mainStyles = css`
  margin-bottom: 100px;
`

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const containerButtonCheckOutStyle = css`
    position: fixed;
    bottom: 65px;
    left: 0;
    right: 0;
    z-index: 996;
    display: flex;
    background-color: #f9f9f9;
    box-shadow: 0 0 6px 0 #20212447;
`

const containerModalStyle = css`
  background-color: #ececec;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-top: 1px solid #e1e1e1;
  width: 100%;
  height: 100%;
  top: 20%;
  border-radius: 10px;
`

const containerBottonCheckOutStyle = css`
  display: flex;
  padding: 1em;
`

const buttonCheckOut = css`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1em;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  font-weight: 600;
  color: #1f2024;
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const fila3 = css`
  display: flex;
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #e1e1e1;
  padding: 1em 0px;
`

const priceTotalStyles = css`
  font-size: 0.8em;
  font-weight: 600;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const priceStyles = css`
  font-size: 0.8em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const containerColumnCenterStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
`

const containerColumnEndStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  align-items: flex-start;
`

export function Cart() {
  const [modal, setModal] = React.useState(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [item, setItem] = useState<CartAttributesReturn | null>(null);
  const { useCart, useCheckOut } = useTheme();

  useEffect(() => {
      const fetchData = async () => {
          try{
            const data = await (useCart.api.actions).getCart();
            if(data && data.success){
              setItem(data.item);
              useCheckOut.attributes.actions.setTotal(data.item.total);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setFetching(false);
          }
      }
      fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <LayoutApp>
        <>
          <main className={mainStyles}>
            {fetching ? ( <Loading /> ) : !item ?
                ( <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '20%',
                }}>
                   <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <IoCartOutline style={{
                      fontSize: '2em',
                    }}/>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                      <h1 className={title1AppStyles}>El Carrito esta vacío</h1>
                  </div>
                    <Link href="/tienda" style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                      <ButtonAppMobile 
                        title="Ir a la tienda"
                      />
                    </Link>
                </div> ) : (
                
                <>
                <div><h1 className={title1AppStyles}>Carrito</h1></div>
                  <BoxCart 
                    cart={item}
                    setFetching={setFetching}
                    setCart={setItem}
                  />
                  <div className={containerButtonCheckOutStyle}>
                    <ButtonAppMobile 
                      title="Comprar"

                      containerProps={{
                        onClick: () => setModal(true),
                      }}
                    />
                  </div>
              </>
            )}
          </main>
        </>
      </LayoutApp>
    
        <Modal open={modal}>
          <CheckOut setModal={setModal} modal={modal} cart={item} setCart={setItem}/>
        </Modal>
      
    </>
  );
}