import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Shared/Loader/Loader';
import verify from '../../../assets/images/verify.jpg';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://bike-picker-server.vercel.app/allUsers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    const handleDelteUser = (user) => {
        fetch(`https://bike-picker-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('user deleted successfully');
                    refetch();
                }
            })
    }

    const handleMakeAdmin = id => {
        fetch(`https://bike-picker-server.vercel.app/allUser/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make admin successfull');
                    refetch();
                }
            })
    }


    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className='w-25 primary-bg mt-2 p-2 rounded text-center m-auto'>
                <h4>All user</h4>
            </div>

            <div className='p-3 border rounded'>
                <table className="table table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">user type</th>
                            <th scope="col">verify</th>
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

                                    {
                                        user.isVerified !== 'verify' ? <button className='btn btn-warning' onClick={() => handleMakeAdmin(user._id)}>verify </button> : <img className='img-fluid verify' src={verify} alt="" />
                                    }

                                </td>
                                <td>
                                    <FontAwesomeIcon onClick={() => handleDelteUser(user)} className='text-danger' icon={faTrash}>

                                    </FontAwesomeIcon>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;