import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers')
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

            <div className='p-3 border rounded'>
                <table className="table table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">user type</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr className='text-center' key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.userType}</td>
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

export default AllUsers;