import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { css, cx } from '@emotion/css'
import { FiChevronLeft } from 'react-icons/fi';
import { formatDate, formatPhoneNumber,  scrollToTop } from '../../helpers'
import { useTheme } from '../../context/ThemeContext';
import { Loading } from '../../Loading';
import { UserAttributesReturn } from '../../states/user/useGafpriApiUser';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { SelectApp } from '../../Select/SelectApp';
import { useRouter } from 'next/router';
import { Error } from '../../Error';
import { PaymentMethodsAttributesReturn } from '@/Abstract/states/paymentMethods/useGafpriApiPaymentMethods';
import { InputApp } from '@/Abstract/Input/InputApp';

const arrowStyle = css`
    font-size: 1.5rem;
    color: #314577;
    margin: auto 0px;
`

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const amountTitleAppStyles = css`
  font-size: 1.1em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`

const statusButtonStyles = (color?: string, backgroundColor?: string) => css`
    width: fit-content;
    font-size: 0.7em;
    margin: 0.6rem 0px 0px 0px;
    line-height: 1rem;
    font-weight: 400;
    max-width: 18rem;
    overflow: hidden;
    word-break: break-word;
    text-transform: none;
    -webkit-line-clamp: 2;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    height: auto;
    padding: 0.125rem 0.5rem;
    border-radius: 0.5rem;
    color: ${color || 'rgb(255, 255, 255)'};
    background-color: ${backgroundColor || 'rgb(15, 133, 20)'};
`

const textInfoTitleStyles = css`
  font-size: 0.6em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  color: #9e9e9e;
`

const imageStyle = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 10px;
`;

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

export const Recharge = ({id}: {id: string | string[] | undefined}) => {
    const router = useRouter();
    const { useLogin, useUser, useError, usePaymentMethods } = useTheme();
    const [isReadyRecharge, setIsReadyRecharge] = useState<boolean>(false);
    const [recharge, setRecharge] = useState<PaymentMethodsAttributesReturn | null>(null);
    const [fetching, setFetching] = useState<boolean>(false);

    const aproval = async () => {
        if(id && typeof id === 'string') {
            scrollToTop();
            try {
               
            } catch (error) {
                
            } finally {
               
            }
        }
    }

    const cancel = async () => {
        if(id && typeof id === 'string') {
            scrollToTop();
            try {
            
            } catch (error) {
                
            } finally {
                
            }
        }
    }

    useEffect(() => {
        if(id && typeof id === 'string') {
            const fetchRecharge = async () => {
                try {
                    setIsReadyRecharge(false);
                    const data = await usePaymentMethods.api.actions.getWalletPendingByPostsId(id);
                    console.log(data);
                    if(data && data.success){
                        setRecharge(data.item);
                        
                    } else{
                        setRecharge(null);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setRecharge(null);
                } finally {
                    setIsReadyRecharge(true);
                }
            }

            fetchRecharge();
        }
      
    }, [useLogin.data.states.token]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div 
                style={{
                    margin: '0px auto 6em auto',
                }}
            > 
            <Error 
                error={useError.states.error}
            />
                {fetching || !isReadyRecharge || recharge === null ? <Loading /> :
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '1em 0px',
                            width: '90%',
                            margin: 'auto',
                        }}> 
                            <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Recarga</h1>
                            <Link href='/users/pending' style={{
                                textDecoration: 'none',
                                display: 'flex',
                                }}>
                                <FiChevronLeft 
                                    className={arrowStyle}
                                />
                            </Link>
                        </div>
                        
                        <div>
                            <div style={{
                                margin: 'auto',
                                padding: '0px',
                                display: 'flex',
                                flexDirection: 'column',
                                }}>
                                    <div style={{
                                    width: '80%',
                                    margin: 'auto',
                                    }}>
                                    <span className={textInfoTitleStyles}>Fecha de transacción</span>
                                    </div>
                                    <InputAppContainer 
                                        inputProps={{
                                            
                                            type: 'date',

                                            
                                        }}
                                        containerStyles={{
                                        customStyles: 'width: 95%; margin: auto;'
                                        }}
                                    />
                            </div>
                            
                            <div 
                                style={{
                                    margin: 'auto',
                                    padding: '0px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <ButtonAppMobile 
                                    title="Aprobar"
                                    containerProps={{
                                        onClick: aproval,
                                    }}
                                />
                            </div>
                            <div 
                                style={{
                                    margin: 'auto',
                                    padding: '0px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <ButtonAppMobile 
                                    title="Cancelar"
                                    containerStyles={{
                                        backgroundColor: '#C12422',
                                    }}
                                    containerProps={{
                                        onClick: cancel,
                                    }}
                                />
                            </div>
                        </div>
                    </>
                } 
            </div>
        </>
    )
}


