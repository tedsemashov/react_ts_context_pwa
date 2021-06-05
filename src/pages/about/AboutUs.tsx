import React, { useContext } from 'react';
import Card from '../../components/productCard/Card';
import { store } from '../../store';
import './products.scss';

export const AboutUs:React.FC = () => {
    // @ts-ignore
    const { state } = useContext(store);
    const { products } = state;

    return (
        <div className="main-page">
            <div className="cards-row">
                {products.map((product:any) => (
                        <Card
                            image={product.img}
                            title={product.title}
                            description={product.description}
                        />
                    )
                )}
            </div>
        </div>
    )
}
