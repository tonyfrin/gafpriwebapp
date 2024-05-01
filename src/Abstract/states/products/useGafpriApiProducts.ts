import { gafpriFetch } from '../../helpers';
import {
  PRODUCTS_ROUTE,
} from '../../constants';
import { UseGafpriErrorReturn } from '../useGafpriError';
import { UseGafpriLoginReturn } from '../login/useGafpriLogin';
import { GeneralAttribute } from '../../Product/Product';
import { CategoryAttributesReturn } from '../category/useGafpriApiCategory';

export type ProductsAttributesReturn = {
  postsId: number,
  categoryId: number | null,
  tags: string[],
  sku: string,
  name: string,
  publicName: string,
  description: string,
  image: string,
  galleryImage: string[],
  note: string,
  salesPrice: string,
  offerPrice: string | null,
  cost: string,
  type: string,
  taxStatus: string,
  taxClass: string,
  shippingClass: string | null,
  packageType: string,
  qtyPack: string,
  undCbm: string,
  attributes: GeneralAttribute[],
  weight: string,
  height: string,
  width: string,
  length: string,
  catalogOrder: number | null,
  reviews: boolean,
  projectsPostsId: number | null,
  posts: {
    id: string,
    authorId: string,
    postType: string,
    status: string,
    permanentLink: string,
    visibility: string,
    createdAt: string,
    modifiedAt: string,
  },
  category: CategoryAttributesReturn,

};

type dataGetAll = {
  data : {
    items?: ProductsAttributesReturn[], 
  }
  success?: boolean,
  initToken?: string | undefined,
}

type dataGetById = {
  item?: ProductsAttributesReturn,
  success?: boolean,
  initToken?: string | undefined,
}

type Actions = {
  getProductsAll: (
    setItems: (items: ProductsAttributesReturn[]) => void,
    offset: number,
    setOffset: (offset: number) => void,
  ) => Promise<void>;
  getProductById: (
    postsId: string,
    setItem: (item: ProductsAttributesReturn) => void,
  ) => Promise<void>;
  getProductsByCategoryId: (
    categoryId: string,
    setItems: (items: ProductsAttributesReturn[]) => void,
    offset: number,
    setOffset: (offset: number) => void,
  )=> Promise<void>;
};

export type UseGafpriApiProductsReturn = {
  actions: Actions;
};

export type UseGafpriProductsProps = {
  useLogin: UseGafpriLoginReturn;
  useError: UseGafpriErrorReturn;
};

export function useGafpriApiProducts({
  useLogin,
  useError,
}: UseGafpriProductsProps): UseGafpriApiProductsReturn {

  const getProductsAll = async (
    setItems: (items: ProductsAttributesReturn[]) => void,
    offset: number,
    setOffset: (offset: number) => void,
  ): Promise<void> => {
    const limit = 2;
    try {
      const success = (data: dataGetAll) => {
        if(data.success){
          if(data && data.data.items) setItems(data.data.items);
          setOffset(offset + limit);
        }
        
      }
      if(useLogin.data.states.token){
        gafpriFetch<dataGetAll>({
          initMethod: 'GET',
          initRoute: `${PRODUCTS_ROUTE}?limit=${limit}&orderBy=name&order=ASC&offset=${offset}`,
          initToken: { token: useLogin.data.states.token },
          functionSuccess: success as (data: dataGetAll) => void,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getProductsByCategoryId = async (
    categoryId: string,
    setItems: (items: ProductsAttributesReturn[]) => void,
    offset: number,
    setOffset: (offset: number) => void,
  ): Promise<void> => {
    const limit = 2;

    try {

      const success = (data: dataGetAll) => {
        if(data.success){
          if(data && data.data.items){
            if(data.data.items.length > 0){
              setItems(data.data.items);
              setOffset(offset + limit);
            }
          }
        }
        
      }
      if(useLogin.data.states.token){
        gafpriFetch<dataGetAll>({
          initMethod: 'GET',
          initRoute: `${PRODUCTS_ROUTE}?limit=${limit}&orderBy=name&order=ASC&offset=${offset}&categoryId=${categoryId}`,
          initToken: { token: useLogin.data.states.token },
          functionSuccess: success as (data: dataGetAll) => void,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProductById = async (
    postsId: string,
    setItem: (item: ProductsAttributesReturn) => void,
  ): Promise<void> => {
    try {

      const success = (data: dataGetById) => {
        if(data.success){
          if(data && data.item) setItem(data.item);
        }
        
      }
      if(useLogin.data.states.token){
        gafpriFetch<dataGetById>({
          initMethod: 'GET',
          initRoute: `${PRODUCTS_ROUTE}/${postsId}`,
          initToken: { token: useLogin.data.states.token },
          functionSuccess: success as (data: dataGetById) => void,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Export
   *
   *
   */

  const actions = {
    getProductsAll,
    getProductById,
    getProductsByCategoryId
  };

  return {
    actions,
  };
}
