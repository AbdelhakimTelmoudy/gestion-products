import React from 'react';
import {Link, Outlet} from "react-router-dom";

function ProductsComponent(props) {
    return (
        <>
            <div className='mx-auto col-md-10 card mt-2 py-1 '>
                <div className='card-header py-1 d-flex justify-content-between'>
                    <h4>Products </h4>
                   <div>
                     <Link class="btn btn-outline-primary" to="/products">list</Link>
                     <Link class="btn btn-outline-primary" to="/products/add">Add</Link>
                   </div>
                </div>
                <div className='card-body py-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}

export default ProductsComponent;