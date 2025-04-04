import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

function Add() {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-image-upload flex-col">
          <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input type="text" name="name" placeholder="Type here" />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <input
              type="text"
              name="description"
              rows="6"
              placeholder="Write content here"
              required
            />
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select name="category">
                <option value=""></option>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add;
