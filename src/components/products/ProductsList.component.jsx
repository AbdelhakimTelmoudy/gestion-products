import React from 'react';
import { connect } from 'react-redux';
import ProductItemComponent from './ProductItem.component';



const ProductsListComponent=(props)=> {
    return (
        <>
           <table class="table table-bordered m-1">
                <thead>
                    <tr>
                    
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col text-center" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((p) => {
                                    return (
                                        <>
                                       <ProductItemComponent product={p}/>
                                        </>
                                    );
                                })}
                </tbody>
                 <ul class="nav nav-pills m-1">
                    <li>
                        <button className='btn m-1 btn-success'> 1</button>
                        <button className='btn m-1 btn-outline-success'> 2</button>
                        <button className='btn m-1 btn-outline-success'> 3</button>
                        <button className='btn m-1 btn-outline-success'> 4</button>
                        <button className='btn m-1 btn-outline-success'> 5</button>
                    </li>
                </ul>
   
    
            </table>
        </>
    );
}





const mapStateToProps = state => ({
  products: state.productreducer,
});

export default connect(mapStateToProps)(ProductsListComponent);
