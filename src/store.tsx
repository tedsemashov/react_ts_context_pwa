import React, { createContext, useReducer } from 'react';
import allEyesImage from '../src/images/products/allEyes.jpg';
import ceramidinImage from '../src/images/products/ceramidin.jpg';

interface IInitialProps {
    products: object[],
    customers: string[],
}
interface IContextProps {
    state: IInitialProps;
    dispatch: ({ type }:{type:string}) => void;
}

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
const AppContext = createContext({} as IContextProps);
const { Provider } = AppContext;

const StateProvider = ( { children }:any ) => {
    // TODO Use if want change state
    const [state, dispatch] = useReducer((state:IInitialProps, action:any) =>
    {
        switch(action.type) {
            case 'SET_CUSTOMER':
                return {...initialState, customers: [...state.customers, ...action.payload]};
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }} >{children}</Provider>;
};

export { AppContext, StateProvider }
