import React from 'react';
import toast from 'react-hot-toast';
import './AddCategory.css';

const AddCategory = () => {

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
                }

            })

    }
    return (
        <div>
            <h3 className='text-center'>Add a category</h3>
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
                    table
                </div>
            </div>
        </div>
    );
};

export default AddCategory;