import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productApi } from "../API";
import { Link } from "react-router-dom";
import PaginationMarkup from "./PaginationMarkup";

const RightProductPanel = () => {
  const productData = useSelector((state) => state.ProductReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productApi());
  }, []);
  return (
    <div className="container">
      <div className="row banner">
        <div class="col-sm-6">
          <h4>Product List</h4>
        </div>
        <div class="col-sm-6 text-right">
          <Link to="/add-category">
            <button type="button" className="btn btn-primary btn-sm">
              Add Category
            </button>
          </Link>
        </div>
      </div>

      <div className="category_table">
        <table className="table table-bordered table-hover table-sm text-center">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Sale Price</th>
              <th>List Price</th>
              <th>isAvilable</th>
              <th>Img</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData?.map((data, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.price.sale_price}</td>
                <td>{data.price.list_price}</td>
                <td>{data.isAvailable ? "Available" : "Not Available"}</td>
                <td>
                  <img src={data.img} />
                </td>
                <td>{data.date}</td>

                <td>
                  <span className="badge badge-pill badge-success">
                    <i className="fas fa-edit"></i>Edit
                  </span>
                </td>

                <td>
                  <span className="badge badge-pill badge-danger">
                    <i className="fas fa-trash"></i>Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationMarkup data={productData}/>
    </div>
  );
};
export default RightProductPanel;
