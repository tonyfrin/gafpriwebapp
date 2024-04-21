export const getApiUrl = (): string | undefined => process.env.API_URL;
export const API_URL = getApiUrl();
export const TOKEN_STORAGE = 'GS_AUTH_TOKEN_V2';
export const CURRENT_USER_STORAGE = 'GS_CURRENT_USER_V2';
export const LOGIN_ROUTE = '/auth/login';
export const LOGIN_TOKEN_ROUTE = '/auth/jwt';
export const CATEGORY_ROUTE = '/category';
export const PRODUCTS_ROUTE = '/products';
export const CART_ITEMS_ROUTE = '/cart-items';
export const CART_ROUTE = '/cart';
export const USER_ROUTE = '/users';
export const ENTITY_ROUTE = '/entity';
export const ADDRESS_ROUTE = '/address';
export const SITES_ROUTE = '/sites';
export const ORDER_ROUTE = '/orders';
export const WALLET_ACCOUNT_ROUTE = '/wallet-account';
export const PAYMENT_WALLET = '/payment-wallet';
export const WALLET_TRANSACTIONS = '/wallet-transactions';
export const EMAIL_CHECK_ROUTE = '/email-check';
export const UPLOAD_PHOTO_ROUTE = `${getApiUrl()}//upload-file`;
export const TYPE_DOCUMENT_ID_ROUTE = '/type-document-id';
export const PAYMENT_METHODS_ROUTE = '/payment-methods';
export const PAYMENT_ORDER_APP_ROUTE = '/payment-order-app';