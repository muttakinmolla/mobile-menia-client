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
            this is buyer all orders

            <div>
                <table className="table table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">product</th>
                            <th scope="col">Seller Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">seller Mob.</th>
                            <th scope="col">Meat Location</th>
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
                                <td>{order.condition}</td>
                                <td>{order.meting_location}</td>
                                <td>
                                    {/* <FontAwesomeIcon className='text-danger' icon={faTrash}>

                                    </FontAwesomeIcon> */}
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