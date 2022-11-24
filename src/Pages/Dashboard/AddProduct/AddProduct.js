import React from 'react';
import './AddProdcut.css';

const AddProduct = () => {

    const handleAddProduct=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;

    }
    return (
        <div>
            <h3 clss='text-center'>Add a category</h3>
            <form onSubmit={handleAddProduct}>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='name' name="name" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='category' name="category" />
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
                            <input type="text" className="form-control" placeholder='mobile' name="mobile" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='location' name="location" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder=' which year did you purchase' name="purchase_year" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='posted time' name="posted_time" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="file" className="form-control" placeholder='image' name="image" />
                        </div>
                        <div className="mb-3">
                            <div className="">
                                <textarea className="form-control textArea" placeholder="write your product description" ></textarea>

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