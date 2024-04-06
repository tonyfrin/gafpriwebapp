import React from 'react';
import { css, cx } from '@emotion/css';
import Image from 'next/image';
import { AttributeTable } from '../Table/AttributeTable';
import { BoxCategoryApp } from '../Box/BoxCategoryApp';
import { ButtonAppMobile } from '../Button/ButtonAppMobile';

export interface GeneralAttribute {
  name: string;
  value: string;
}

export interface CategoryAttributes {
  id?: number;
  slug?: string;
  parentId?: number | null;
  name?: string;
  description?: string | null;
  photo?: string | null;
  status?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  parent?: CategoryAttributes;
  children?: CategoryAttributes[];
}

type ProductAttributes = {
  postsId: number;
  tags?: string[];
  sku?: string;
  name: string;
  publicName?: string;
  description?: string;
  image: string;
  galleryImage?: string[];
  note?: string;
  salesPrice?: number;
  offerPrice?: number;
  cost?: number;
  type?: string;
  taxStatus?: string;
  taxClass?: string;
  packageType?: string;
  qtyPack?: number;
  undCbm?: number;
  attributes?: GeneralAttribute[];
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  catalogOrder?: number;
  category?: CategoryAttributes;
}

const title1AppStyles = css`
  font-size: 1.2em;
  padding: 0.9em;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`

const containerStyles = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const contentProductStyles = css`
    display: flex;
    flex-direction: column; 
`

const producto = css`
    width: 90%;
    margin: auto 5px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 1px 6px 0 #1f20241c;
`

const metaContainerStyles = css`
  margin: 0.5em 0px;
`

const imgStyles = css`
  width: 100%;
  height: auto;
  object-fit: contain;
`

const titleProductStyles = css`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  margin: 0.5em 0px;
`

const categoryStyles = css` 
    font-size: 0.6em;
    background-color: #ebebeb;
    width: auto;
    text-align: center;
    padding: 3px 7px;
    border-radius: 5px;
    color: #1f2024;
    font-weight: 600;
`

const stockStyles = (backgroundColor?: string) => css` 
    font-size: 0.6em;
    font-weight: 600;
    margin: 0.5em 0px;
    background-color: ${backgroundColor || '#ebebeb'};
    width: auto;
    text-align: center;
    padding: 2px 6px;
    border-radius: 5px;
    color: #FFF;
`

const priceStyles = css`
    font-size: 1em;
    font-weight: 700;
    margin: 0.5em 0px;
`

const productos = css`
  display: block;
  margin-bottom: 1em;
`

const fila = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 5px; /* Espacio entre productos */
  width: 90%;
  margin: 1em auto;
`

const infoSections = css`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0px auto 1em auto;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 1em;
`

const descriptionStyles = css`
  margin: 0.5em 0px;
`

const metaStyles = css`
  font-size: 0.6em;
  margin: 0.5em 0px 0.5em 3px;
`

const containerTagsStyles = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 0px;
`

const tagsStyles = css` 
    font-size: 0.6em;
    font-weight: 400;
    margin: 5px 5px 5px 0px;
    background-color: #ebebeb;
    text-align: center;
    padding: 3px 7px;
    border-radius: 5px;
    color: #1f2024;
    font-weight: 600;
`

const subTitleStyles = css`
  font-size: 0.8em;
  font-weight: 400;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  margin: 0.5em 0px;
`

export type ProductProps = {
    item: ProductAttributes;
}

export const Product = ({ item }: ProductProps) => {

  const dimensionAttributes = [
    {
      name: 'Peso',
      value: `${item.weight} kg`,
    },
    {
      name: 'Altura',
      value: `${item.height} cm`,
    },
    {
      name: 'Ancho',
      value: `${item.width} cm`,
    },
    {
      name: 'Largo',
      value: `${item.length} cm`,
    }
  ]

  return (
    <div className={containerStyles}>
        <h1 className={title1AppStyles}>{item.publicName}</h1>
        <div className={producto}>
            <div className={contentProductStyles}>
                <Image src={item.image} alt={item.name} className={imgStyles} width={500} height={500}/>
            </div>
        </div>
        <section className={productos}>
            <div className={fila}>
              {item.galleryImage?.map((img, index) => (
                <div className={producto} key={`product-${index}`}>
                  <div>
                    <Image src={img} alt='galery-product' className={imgStyles} width={500} height={500}/>
                  </div>
                </div>
              ))}
            </div>
        </section>
        <section className={infoSections}>
          <h3 className={titleProductStyles}>{item.publicName}</h3>
          
          <p className={descriptionStyles}>
            {item.description && item.description}
          </p>
          
            {item.category?.name && <div className={metaContainerStyles}><span className={categoryStyles}>{item.category.name}</span></div>}
          
          {true ? <div className={metaContainerStyles}><span className={cx(stockStyles('#77a464'))}>Disponible</span></div> : <div className={metaContainerStyles}><span className={stockStyles('#c12429')}>Agotado</span></div>}
          

          <span className={priceStyles}>{`$ ${item.salesPrice}`}</span>
        </section>
        <section className={infoSections}>
          <ButtonAppMobile 
            title='Agregar al carrito'
          />
        </section>
        <section className={infoSections}>
          {item.sku && 
            <div>
              <span className={metaStyles}>SKU: <span>{item.sku}</span></span>
            </div>
          }
          
          <div className={containerTagsStyles}>
            {item.tags && item.tags.length > 0 &&
            
              item.tags.map((tag, index) => {
                return (
                  <div key={`tag-${index}`}>
                    <span className={tagsStyles}>{`#${tag}`}</span>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className={infoSections}>
          <h4 className={subTitleStyles}>Detalles del producto</h4>
          <AttributeTable 
            data={item.attributes || []}
          />
        </section>
        <section className={infoSections}>
          <h4 className={subTitleStyles}>Dimensiones del producto</h4>
          <AttributeTable 
            data={dimensionAttributes || []}
          />
        </section>
        <section className={infoSections}>
        <BoxCategoryApp 
            title = 'También te puede interesar'
            items = {[
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
            buttonProps={false}
          />
        </section>


        
    </div>
  );
};