import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleProduct from '../Home/Products/SingleProduct';

const Categories = () => {
    const products = useLoaderData();

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

            <div className="row">
                <div className="col-12 col-sm-3 mt-5 rounded">

                    <div className="vertical-menu">
                        {
                            categories?.map((category, index) => <Link to={`/products/category/${category._id}`} key={category._id}>{category.name}</Link>)
                        }

                    </div>
                </div>
                <div className="col-12 col-sm-9 mt-5">
                    <div className="row">
                        {
                            products?.map(product => <SingleProduct

                                product={product}
                                key={product._id}

                            ></SingleProduct>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Categories;