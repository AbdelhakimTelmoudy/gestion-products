import React from 'react';
import { Link } from 'react-router-dom';

function ProductItemComponent(props) {
    return (
        <>
           <tr>
                <td className="col ">{props.product.title}</td>
                <td className="col text-center col-md-2 ">{props.product.price}</td>
                <td className="col text-center col-md-2">{props.product.stock}</td>
                <td className="col col-md-1">
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-danger">
                            delete
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>
                </td>
                <td className="col col-md-1">
                    <div class="d-grid gap-2">
                        <Link class="btn btn-outline-warning"  to={`/products/edite/${props.product.id}`}>
                            edite
                            <i className="bi bi-pencil"></i>
                        </Link>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default ProductItemComponent;