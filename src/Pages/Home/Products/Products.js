import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../Category/Category';
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
            <div className='w-50 m-auto'>
                <h5 className='mt-5 mb-5 p-3 rounded primary-bg text-center text-white'>
                    Please select a Category
                </h5>
            </div>
            <div className="row">
                {
                    categories?.map(category => <Category category={category} key={category._id}></Category>)
                }
                {/* <div className="col-lg-4 mt-3 rounded">

                    
                        {
                            categories?.map((category, index) => <Link to={`/products/:${category._id}`} key={category._id}>{category.name}</Link>)
                        }
                        
                </div>
                <div className="col-lg-9 mt-3">
                    <AllProducts></AllProducts>
                </div> */}
            </div>
        </div>
    );
};

export default Products;