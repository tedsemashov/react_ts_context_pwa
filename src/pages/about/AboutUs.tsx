import React, { useContext } from 'react';
import Card from '../../components/productCard/Card';
import { AppContext } from '../../store';
import './products.scss';

export const AboutUs:React.FC = () => {
    const { state } = useContext(AppContext);
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
