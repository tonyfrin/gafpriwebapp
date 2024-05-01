import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { css } from '@emotion/css'
import { FiChevronLeft } from 'react-icons/fi';
import { scrollToTop } from '../../helpers'
import { useTheme } from '../../context/ThemeContext';
import { Loading } from '../../Loading';
import { InputAppContainer } from '../../Input/InputAppContainer';
import { ButtonAppMobile } from '../../Button/ButtonAppMobile';
import { Error } from '../../Error';
import { PaymentMethodsAttributesReturn } from '../../states/paymentMethods/useGafpriApiPaymentMethods';

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

const textInfoTitleStyles = css`
  font-size: 0.6em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  color: #9e9e9e;
`

export const Recharge = ({id}: {id: string | string[] | undefined}) => {
    const router = useRouter();
    const { useLogin, useError, usePaymentMethods } = useTheme();
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


