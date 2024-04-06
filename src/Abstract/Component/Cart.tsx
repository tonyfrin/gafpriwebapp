import React, {useEffect} from 'react';
import { LayoutApp } from './LayoutApp';
import { css } from '@emotion/css';
import { BoxCart } from '../Box/BoxCart';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { Modal } from '../Modal/Modal';
import { FiTruck } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBicycleOutline } from 'react-icons/io5';
import { IoArrowDown } from 'react-icons/io5';
import { FiArrowDown } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { CheckOut } from './CheckOut';

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

  const openModal = () => {
    setModal(true);
  }

  return (
    <>
      <LayoutApp>
        <>
          <main className={mainStyles}>
            <div>
                <h1 className={title1AppStyles}>Carrito</h1>
            </div>
            <div>
              <BoxCart 
                items={[
                  {
                    title: 'Protector de nevera marca Gafpri',
                    img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector1.png',
                    href: '/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Donec ut est ut arcu tempor posuere.'
                  },
                  {
                    title: 'Protector de nevera marca Gafpri',
                    img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector2.png',
                    href: '/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Donec ut est ut arcu tempor posuere.'
                  },
                  {
                    title: 'Protector de nevera marca Gafpri',
                    img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector1.png',
                    href: '/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Donec ut est ut arcu tempor posuere.'
                  },
                  {
                    title: 'Protector de nevera marca Gafpri',
                    img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector2.png',
                    href: '/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Donec ut est ut arcu tempor posuere.'
                  },
                  {
                    title: 'Protector de nevera marca Gafpri',
                    img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector1.png',
                    href: '/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Donec ut est ut arcu tempor posuere.'
                  },
                  {
                    title: 'Protector de nevera marca Gafpri',
                    img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector2.png',
                    href: '/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Donec ut est ut arcu tempor posuere.'
                  },
                ]}
              />
            </div>
            <div className={containerButtonCheckOutStyle}>
              <ButtonAppMobile 
                title="Comprar"

                containerProps={{
                  onClick: openModal
                }}
              />
            </div>
            <Modal open={modal}>
             <>
                <CheckOut setModal={setModal}/>
             </>
            </Modal>
          </main>
        </>
      </LayoutApp>
    </>
  );
}