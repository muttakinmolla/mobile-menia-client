import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyWishlist = () => {
    const { user } = useContext(AuthContext);

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className='w-25 primary-bg mt-2 p-2 rounded text-center m-auto'>
                <h4>All Wishlist</h4>
            </div>

            <table className="table table-hover">
                <thead className='text-center'>
                    <tr>
                        <th scope="col">Sl.</th>
                        <th scope="col">Seller Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">original Price</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => <tr className='text-center' key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                {product.seller_name}
                            </td>
                            <td>{product.productName}</td>
                            <td>{product.resell_price}</td>
                            <td>
                                {product.original_price}
                            </td>
                            <td>
                                <button className='btn primary-bg'>Pay</button>
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyWishlist;