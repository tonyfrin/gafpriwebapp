import React from 'react';
import { LayoutApp } from '@/Abstract/Component/LayoutApp';
import { css } from '@emotion/css';
import { BoxCategoryApp } from '../Abstract/Box/BoxCategoryApp';

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

export default function Home() {
  return (
    <>
      <LayoutApp>
        <>
          <main className={mainStyles}>
          <div>
              <h1 className={title1AppStyles}>Tienda</h1>
          </div>
          <BoxCategoryApp 
            title = 'Protectores de Voltaje'
            items = {[
              {
                title: 'Neveras',
                img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector1.png',
                href: '#'
              },
              {
                title: 'Electrodomésticos',
                img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector2.png',
                href: '#'
              },
              {
                title: 'Aires 110 V',
                img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector3.png',
                href: '#'
              },
              {
                title: 'Aires 220v',
                img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector4.png',
                href: '#'
              },
              {
                title: 'Supervisores',
                img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector5.png',
                href: '#'
              },
              {
                title: 'Enchufe',
                img: 'https://categorygafpri.s3.us-east-2.amazonaws.com/protector6.png',
                href: '#'
              }
            ]}
          />
          <BoxCategoryApp 
            title = 'Refrigeración comercial'
            items = {[
              {
                title: 'Contactores',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/contactores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Antivibradores',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/antivibradores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Filtros de Succión',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/filtro-de-succion-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Termostatos',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/termostato-analogo-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Filtros de Línea',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/filtro-de-linea-liquido-secadores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.png',
                href: '#'
              },
              {
                title: 'Capacitores',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/capacitore-capacitadores-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri-2.png',
                href: '#'
              }
            ]}
          />
          <BoxCategoryApp 
            title = 'Refrigeración en General'
            items = {[
              {
                title: 'Bimetales',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/bimetal-para-neveras-cavas-refris-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Reles',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/relay-fan-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Térmicos',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/protectores-termicos-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Acumulador',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/acumulador-de-succion-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Portaelemento',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/portafiltros-de-succion-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              },
              {
                title: 'Separadores',
                img: 'https://tiendasgafpri.com/wp-content/uploads/2021/07/separador-de-aceite-para-aires-acondicionados-repuestos-de-refrigeracion-al-mayor-marca-gafpri.jpg',
                href: '#'
              }
            ]}
          />
          </main>
        </>
      </LayoutApp>
    </>
  );
}
