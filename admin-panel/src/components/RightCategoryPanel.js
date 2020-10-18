import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catagoryApi, categoryDeleteApi } from "../API";
import { Link } from "react-router-dom";
import PaginationMarkup from "./PaginationMarkup";

const RightCategoryPanel = () => {
  const categoryData = useSelector((state) => state.CatagoryReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catagoryApi());
  }, []);

  const categoryDelete = (id) => {
    alert(id)
    dispatch(categoryDeleteApi(id))
    // Window.location('./category')
  }
  return (
    <div className="container">
      <div className="row banner">
        <div className="col-sm-6">
          <h4>Category List</h4>
        </div>
        <div className="col-sm-6 text-right">
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
              <th>Description</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categoryData?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.date}</td>
                
                <td>
                  <span className="badge badge-pill badge-success">
                    <i className="fas fa-edit"></i>Edit
                  </span>
                </td>
                <td>
                  <span className="badge badge-pill badge-danger" onClick={categoryDeleteApi(data._id)}>
                    <i className="fas fa-trash"></i>Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationMarkup data={categoryData}/>
    </div>
  );
};
export default RightCategoryPanel;
