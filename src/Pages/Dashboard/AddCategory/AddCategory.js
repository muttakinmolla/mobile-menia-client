import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import './AddCategory.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Loader from '../../Shared/Loader/Loader';

const AddCategory = () => {

    const { data: categories, isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    });

    const handleAddCategory = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = {
            name: name
        }
        console.log(category);

        fetch('http://localhost:5000/addCategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('category is added successfully');
                    form.reset();
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
                <h4>All category</h4>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <form onSubmit={handleAddCategory}>
                        <div className="mb-3">
                            <label className="form-label">Category name</label>
                            <input type="text" className="form-control" name='name' placeholder='please write your category name' />
                        </div>
                        <input type="submit" className='btn save-btn' />
                    </form>
                </div>
                <div className="col-lg-8">
                    <table className="table table-hover">
                        <thead className='text-center'>
                            <tr>
                                <th scope="col">Sl.</th>
                                <th scope="col">Name</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((category, index) => <tr className='text-center' key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{category.name}</td>
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
        </div>
    );
};

export default AddCategory;