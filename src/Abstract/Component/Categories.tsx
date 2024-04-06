import React from 'react';
import { LayoutApp } from './LayoutApp';
import { css } from '@emotion/css';
import { ProductList } from '../List/ProductList';

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const mainStyles = css`
  margin-bottom: 100px;
`

const items = [
  {
    name: 'Neveras',
    src: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector1.png',
    price: '$ 20.87',
    category: 'Protector'
  },
  {
    name: 'Electrodomésticos',
    src: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector2.png',
    price: '$ 20.87',
    category: 'Protector'
  },
  {
    name: 'Aires 110 V',
    src: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector3.png',
    price: '$ 23.87',
    category: 'Protector'
  },
  {
    name: 'Aires 220v',
    src: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector4.png',
    price: '$ 3.87',
    category: 'Protector'
  },
  {
    name: 'Supervisores',
    src: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector5.png',
    price: '$ 5.87',
    category: 'Protector'
  },
  {
    name: 'Enchufe',
    src: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector6.png',
    price: '$ 9.87',
    category: 'Protector'
  },
  {
    name: 'Contactor 24v 15 amp 2 polos',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/contactores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 10.00',
    category: 'Contactor'
  },
  {
    name: 'Antivibrador 7/8',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/antivibradores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 12.00',
    category: 'Antivibradores'
  },
  {
    name: 'Filtro de Succión de 3/8',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/filtro-de-succion-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 12.00',
    category: 'Filtros'
  },
  {
    name: 'Termostato Analogico',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/termostato-analogo-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 11.00',
    category: 'Termostatos'
  },
  {
    name: 'Filtro de Línea 365',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/filtro-de-linea-liquido-secadores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.png',
    price: '$ 9.00',
    category: 'Filtros'
  },
  {
    name: 'Capacitor 10uf 440v',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/capacitore-capacitadores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri-2.png',
    price: '$ 87.00',
    category: 'Capacitores'
  },
  {
    name: 'Bimetal L70',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/bimetal-para-neveras-cavas-refris-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 6.00',
    category: 'Bimetales'
  },
  {
    name: 'Rele 24v',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/relay-fan-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 5.00',
    category: 'Reles'
  },
  {
    name: 'Térmico 12.000 btu 220v',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/protectores-termicos-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 3.00',
    category: 'Térmicos'
  },
  {
    name: 'Acumulador de succión 7/8',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/acumulador-de-succion-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 1.00',
    category: 'Acumulador'
  },
  {
    name: 'Portaelemento 1 piedra',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/portafiltros-de-succion-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 87.00',
    category: 'Filtros'
  },
  {
    name: 'Separador de aceite 7/8',
    src: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/separador-de-aceite-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
    price: '$ 43.00',
    category: 'Separadores'
  }
]

export function Categories() {
  return (
    <>
      <LayoutApp>
        <>
          <main className={mainStyles}>
          <div>
              <h1 className={title1AppStyles}>Tienda</h1>
          </div>
            <div>
              <ProductList items={items} />
            </div>
          </main>
        </>
      </LayoutApp>
    </>
  );
}
