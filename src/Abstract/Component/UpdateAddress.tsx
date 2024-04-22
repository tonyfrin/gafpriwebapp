import React from 'react';
import { LayoutApp } from './LayoutApp';
import { useTheme } from '../context/ThemeContext';
import { Loading } from '../Loading';
import { AddressList } from '../Address/AddressList';
import { AddressUpdate } from '../Address/AddressUpdate';


export function UpdateAddress({id}: {id: string | string[] | undefined}) {
  const { useProfile } = useTheme();


  return (
    <>
      <LayoutApp>
        <>
             
                <div>
                
                    <AddressUpdate id={id} />

                </div>
             
        </>
      </LayoutApp>
    </>
  );
}