import React, { Component } from "react";
import FoodItem from "./FoodItem";

export default class FoodList extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props;
    return (
      <ul className="list-group my">
        <h3 className="text-secondary">Food Items</h3>
        {items.map((item) => {
          return (
            <FoodItem
              key={item.id}
              name={item.name}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          className="btn btn-danger font-weight-bold"
          onClick={clearList}
          hidden={items.length === 0 ? true : false}
        >
          Clear Food
        </button>
      </ul>
    );
  }
}
