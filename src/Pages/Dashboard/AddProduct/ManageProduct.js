import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const ManageProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProduct?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h3>All Product</h3>

            <div>
                <table className="table table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">category</th>
                            <th scope="col">resell Price</th>
                            <th scope="col">original price</th>
                            <th scope="col">condition</th>
                            <th scope="col">posted time</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <tr className='text-center' key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    <img className='image' src={product.image} alt="" />
                                </td>
                                <td>{product.category}</td>
                                <td>{product.resell_price}</td>
                                <td>{product.original_price}</td>
                                <td>{product.condition}</td>
                                <td>{product.posted_time}</td>
                                <td>
                                    <FontAwesomeIcon className='text-danger' icon={faTrash}>

                                    </FontAwesomeIcon>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;