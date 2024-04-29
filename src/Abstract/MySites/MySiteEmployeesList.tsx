import React from 'react';
import { css } from '@emotion/css';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';
import { FiChevronLeft } from 'react-icons/fi';
import { UseGafpriCheckOutReturn } from '../states/checkout/useGafpriCheckOut';
import { IoPersonOutline } from 'react-icons/io5';
import { UserAttributesReturn } from '../states/user/useGafpriApiUser';
import { useTheme } from '../context/ThemeContext';
import { BiMap } from 'react-icons/bi';
import Link from 'next/link';
import { Loading } from '../Loading';
import { MySitesEmpty } from './MySitesEmpty';
import Image from 'next/image';
import { useRouter } from 'next/router';

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
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
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
`

const containerColumnEndStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  align-items: flex-start;
`

const arrowStyle = css`
    font-size: 1.5rem;
    color: #314577;
    margin: auto 0px;
`

const checkboxStyles = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #aaa;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:checked {
    border-color: #000;
    background-color: #000;
  }

  &:checked::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    margin: 2px;
  }
`;

const containerButtonCheckOutStyle = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 996;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    box-shadow: 0 0 6px 0 #20212447;
    padding: 1em 0px;
`

export type AddressListProps = {
  useCheckOut: UseGafpriCheckOutReturn;
  user: UserAttributesReturn;
}

type items = {
  id: string;
  name: string;
  email: string;
}

type options = {
  value: string;
  label: string;
}

const photoProfile = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
`

export function MySiteEmployeesList({id}: {id: string | string[] | undefined}) {
  const { useProfile, useSites, useError } = useTheme();
  const [fetching, setFetching] = React.useState<boolean>(false);
  const router = useRouter();

  if(id && typeof id !== 'string') { return <Loading />}

    
  const site = id && typeof id === 'string' ? useSites.api.actions.getMySiteById(id) : null;

  if(!site){
    return null;
  }

  const items: items[] = site.sitesEmployees.map((item) => {
    return {
      id: item.id ? item.id.toString() : '',
      name: `${item.user.name} ${item.user?.lastName || ''}`,
      email: item.user.email,
    }
  });

  items.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  const removeEmployees = async (employeesId: string) => {
   
        try{
            setFetching(true);
            const data = await useSites.api.actions.deleteEmployees(employeesId);
            if(data && data.success){
              useSites.api.actions.handleUpdatedMySites(data.item);
            } else {
                useError.actions.changeError(['no se pudo agregar el usuario.', 'Por favor, vuelva a intentarlo.']);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            useError.actions.changeError(['no se pudo agregar el usuario.', 'Por favor, vuelva a intentarlo.']);
        } finally {
            setFetching(false);
        }
}

  return (
    <> 

      {fetching || !useSites.api.states.mySitesIsReady ? <Loading /> : 
        <>
         {useSites.api.states.mySites && useSites.api.states.mySites.length > 0 ?
          <div
            style={{
              marginBottom: '220px'
            }}
          >
            <Link 
              style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1em 0px',
                  width: '90%',
                  margin: 'auto',
                  borderBottom: '1px solid #e1e1e1',
                  textDecoration: 'none',
                  color: 'inherit',
              }}
              href={'/perfil'}
            > 
                <h1 style={{textAlign: 'center', padding: '0.3em'}} className={title1AppStyles}>Autorizados</h1>
                <FiChevronLeft 
                    className={arrowStyle}
                    onClick={useProfile.pages.actions.onInit}
                />
            </Link>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: '100px',
                    height: '100px',
                    margin: '2em auto'
                }}
            >
                <Image 
                    src='https://categorygafpri.s3.us-east-2.amazonaws.com/store-default.jpg' 
                    alt="profile" width={200} height={200} 
                    className={photoProfile}
                />
            </div>
            <div>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontSize: '1.2em',
                    margin: '0.5em 0',
                }}>
                    {`${site?.tradename}`}
                </h1>
            </div>
            <div
                style={{
                    margin: '1em',
                    borderBottom: '1px solid #e1e1e1'
                }}
            ></div>
            
            
            {items.length === 0 ? 
            
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '90%',
                        margin: '2em auto',
                    }}
                >
                    <div>   
                        <IoPersonOutline 
                            style={{
                                fontSize: '3em'
                            }}
                        />
                    </div>
                    <p
                        style={{
                            margin: '10px 0px 0px 0px',
                            padding: '0px',
                            fontSize: '0.7em',
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center'
                        }}
                    >No tienes personas autorizadas para esta tienda.</p>
                </div>
            
            :
              <>
                {items.map((item, index) => (
                
                  <div className={fila3} key={`address-${index}`}>
                    <div style={{
                      width: '80%',
                      display: 'flex',
                      flexDirection: 'column',
                    }} className={containerColumnCenterStyles}>
                      <span className={priceStyles} style={{fontWeight: 600}}>{item.name}</span>
                      <span className={priceStyles}>{item.email}</span>
                    </div>
                    <div 
                      style={{
                        width: '10%',
                        display: 'flex',
                        margin: 'auto',
                        textDecoration: 'none',
                        color: 'inherit',
                      }} 
                      className={containerColumnCenterStyles}
                      onClick={() => removeEmployees(item.id)}
                    >
                      <span style={{
                        fontSize: '0.6em',
                        color: '#314577',
                        cursor: 'pointer',
                        fontFamily: 'Poppins',
                      }}
                      >Eliminar</span>
                    </div>
                </div>
                  
                ))}
              </>
            }

           
              <Link
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  margin: '2em auto',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                href={'/mis-tiendas/tienda/empleados/agregar/[id]'}
                as={`/mis-tiendas/tienda/empleados/agregar/${id}`}
              >
                <ButtonAppMobile 
                    title="Agregar Autorizado"
                    containerStyles={{
                      backgroundColor: '#314577'
                    }}
                />
              </Link>
            
          </div>
          : <MySitesEmpty />}
        </>
      }
    </>
  );
}