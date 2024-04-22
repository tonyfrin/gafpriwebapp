import React from 'react';
import { LayoutApp } from './LayoutApp';
import { useTheme } from '../context/ThemeContext';
import { Loading } from '../Loading';
import { AddressList } from '../Address/AddressList';


export function ListAddress() {
  const { useProfile } = useTheme();


  return (
    <>
      <LayoutApp>
        <>
              { useProfile.pages.states.isFetching ? <Loading /> :
                <div>
                
                    <AddressList />

                </div>
              }
        </>
      </LayoutApp>
    </>
  );
}