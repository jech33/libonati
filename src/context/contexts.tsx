import { createContext } from 'react';

type Context = {
    cld: any
  };

const initialContext: Context = { cld: {} };
export const appContext = createContext<Context>(initialContext);
export const testContext = createContext('');
