import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from './AllProducts';
import './Products.css';

const Products = () => {

    const { data: categories, isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='container'>
            <h5 className='mt-3 text-center primary-bg w-50 m-auto p-3 rounded'>
                Please select a Category
            </h5>
            <div className="row">
                <div className="col-lg-2 mt-4 rounded">

                    <div className="vertical-menu">
                        {
                            categories?.map((category, index) => <Link to={`/products/category/${category._id}`} key={category._id}>{category.name}</Link>)
                        }

                    </div>
                </div>
                <div className="col-lg-10 mt-3">
                    <AllProducts></AllProducts>
                </div>
            </div>
        </div>
    );
};

export default Products;