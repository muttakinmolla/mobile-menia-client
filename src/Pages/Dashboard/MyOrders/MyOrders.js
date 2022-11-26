import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order?email=${user?.email}`, {
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
                <h4>All Order</h4>
            </div>

            <div className='px-3'>
                <table className="table table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">product</th>
                            <th scope="col">image</th>
                            <th scope="col">Seller Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">seller Mob.</th>
                            <th scope="col">Meat Location</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr className='text-center' key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {order.product_name}
                                </td>
                                <td>
                                    <img className='image' src={order.image} alt="" />
                                </td>
                                <td>{order.seller_name}</td>
                                <td>{order.resell_price}</td>
                                <td>{order.seller_mobile}</td>
                                <td>{order.meting_location}</td>
                                <td>
                                    <button className='btn btn-warning'>Pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;