import React from 'react';
import { LayoutApp } from './LayoutApp';
import { css } from '@emotion/css';
import { ProductList } from '../List/ProductList';
import { Product } from '../Product/Product';

const mainStyles = css`
  margin-bottom: 100px;
`

const items = [
  {
    postsId: 1,
    name: 'Protector de nevera tienda',
    publicName: 'Protector de nevera',
    image: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector1.png',
    salesPrice: 20.87,
    category: {
      name: 'Protector',
    },
    description: 'Protectores marca Gafpri 110 voltios para neveras y refrigeradores con 3 años de garantía y certificación de calidad.',
    galleryImage: [
      'https://categorygafpri.s3.us-east-2.amazonaws.com/protector-atras.png',
      'https://categorygafpri.s3.us-east-2.amazonaws.com/protector2.png',
      'https://categorygafpri.s3.us-east-2.amazonaws.com/protector-atras-2.png',
    ],
    tags: ['refrigerador', '110v', 'gafpri', 'protector', 'nevera'],
    sku: '02-001',
    attributes: [
      {
        name: 'Marca',
        value: 'Gafpri',
      },
      {
        name: 'Voltaje',
        value: '110v',
      },
      {
        name: 'Garantía',
        value: '3 años',
      },
      {
        name: 'Certificación',
        value: 'Calidad',
      }
    ],
    weight: 0.5,
    height: 0.5,
    width: 0.7,
    length: 0.7,
  },
  
]

export function Products() {
  return (
    <>
      <LayoutApp>
        <>
          <main className={mainStyles}>
            <div>
              <Product item={items[0]} />
            </div>
          </main>
        </>
      </LayoutApp>
    </>
  );
}