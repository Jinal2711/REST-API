import React from 'react';
import { Link } from 'react-router-dom';

const LeftPanel = () => {
    return(
        <>
            <Link to="/category"><div className="left_panel_name">Catagory</div></Link>
            <Link to="/product"><div className="left_panel_name">Product</div></Link>

            <div className="left_panel_name">Products</div>

            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>

            <div className="left_panel_name">Products</div>
            <div className="left_panel_name">Products</div>

            <div className="left_panel_name">Products</div>

            <div className="left_panel_name">Products</div> <div className="left_panel_name">Products</div>
        </>
    )
}
export default LeftPanel;