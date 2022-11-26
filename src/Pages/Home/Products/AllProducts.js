import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="row mt-3 mb-5">
            {
                products?.map(product => <SingleProduct product={product} key={product._id}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;