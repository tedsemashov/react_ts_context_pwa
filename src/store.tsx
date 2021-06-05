import React, { createContext, useReducer } from 'react';
import allEyesImage from '../src/images/products/allEyes.jpg';
import ceramidinImage from '../src/images/products/ceramidin.jpg';

const initialState = {
    products: [
        {
            img: ceramidinImage,
            title: 'Ceramidin від корейського бренду Dr. Jart',
            description: 'Глибого очищує та зволожує шкіру, надає їй шовковитості та неймовірної гладкості.'
        },
        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },
        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },        {
            img: allEyesImage,
            title: 'Набір патчів All Eyes On You',
            description: 'Патчі з вітаміном С для сяяння шкіри навколо очей'
        },
        {
            img: ceramidinImage,
            title: 'Ceramidin від корейського бренду Dr. Jart',
            description: 'Глибого очищує та зволожує шкіру, надає їй шовковитості та неймовірної гладкості.'
        },
        {
            img: ceramidinImage,
            title: 'Ceramidin від корейського бренду Dr. Jart',
            description: 'Глибого очищує та зволожує шкіру, надає їй шовковитості та неймовірної гладкості.'
        },
        {
            img: ceramidinImage,
            title: 'Ceramidin від корейського бренду Dr. Jart',
            description: 'Глибого очищує та зволожує шкіру, надає їй шовковитості та неймовірної гладкості.'
        },
        {
            img: ceramidinImage,
            title: 'Ceramidin від корейського бренду Dr. Jart',
            description: 'Глибого очищує та зволожує шкіру, надає їй шовковитості та неймовірної гладкості.'
        },
    ],
    customers: ['Ted'],
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children }:any ) => {
    const [state, dispatch] = useReducer((state: { customers: string[]; }, action: { type: string; payload: string[]; }) =>
    {
        switch(action.type) {
            case 'SET_CUSTOMER':
                return {...initialState, customers: [...state.customers, ...action.payload]};
            default:
                throw new Error();
        }
    }, initialState);

    // @ts-ignore
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
