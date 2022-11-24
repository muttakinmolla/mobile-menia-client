import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import './AddProdcut.css';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP')


    const { data: categories, isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const seller_name = user.displayName;
        const name = form.name.value;
        const category = form.category.value;
        const resell_price = form.resell.value;
        const original_price = form.original_price.value;
        const condition = form.condition.value;
        const mobile = form.mobile.value;
        const location = form.location.value;
        const purchase_year = form.purchase_year.value;
        const posted_time = date;
        const description = form.description.value;

        const image = e.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;


        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: name,
                        seller_name: seller_name,
                        category: category,
                        resell_price: resell_price,
                        condition: condition,
                        mobile: mobile,
                        location: location,
                        purchase_year: purchase_year,
                        posted_time: posted_time,
                        description: description,
                        original_price: original_price,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${result.name} is added successfully`);
                            form.reset();
                        })

                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h3 className='text-center'>Add a category</h3>
            <form onSubmit={handleAddProduct}>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='name' name="name" />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" aria-label="Default select example" name='category'>
                                <option selected defaultValue='0'>Open this select menu</option>
                                {
                                    categories?.map(category => <option key={category._id} value={category._id}>{category.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='resell Price' name="resell" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Original Price' name="original_price" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='condition' name="condition" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='enter your mobile number' name="mobile" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='location' name="location" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder=' which year did you purchase' name="purchase_year" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="file" className="form-control" placeholder='image' name="image" />
                        </div>
                        <div className="mb-3">
                            <div className="">
                                <textarea className="form-control textArea" name='description' placeholder="write your product description" ></textarea>

                            </div>
                        </div>
                    </div>
                </div>
                <input className='btn save-btn' type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default AddProduct;