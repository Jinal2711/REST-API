import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catagoryAddApi } from '../API';


const AddCategory = ({ history }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const categoryData = useSelector(state => state.CatagoryReducer.data);
  const dispatch = useDispatch();

  const submitCategoryData = (e) => {
    e.preventDefault()
    const categoryObj = {
      name,
      description,
    };
    console.log(categoryObj)
    dispatch(catagoryAddApi(categoryObj));
    // history.push('/category');
    window.location = '/category';
  }

  return (
    <div className="container add_category_form">
      <h2>Add Category</h2>
      <form>
        <div className="form-group">
          <label for="name">Category Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter category name" name="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label for="desc">Category description:</label>
          <textarea className="form-control" rows="5" id="desc" name="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={e => submitCategoryData(e)}>SUBMIT</button>
      </form>
    </div>

  );
};
export default AddCategory;
