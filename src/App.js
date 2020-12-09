import React, { Component } from "react";
import FoodInput from "./FoodInput";
import FoodList from "./FoodList";
import { v1 as uuid } from "uuid";
// กำหนดให้ id ไม่ซ้ำกัน
// สร้าง Component -JSX
class App extends Component {
 
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleSubmit = (e) => {
  
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item,
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  
  };

  handleChange = (e) => {
    if (/^[a-zA-Z0-9]{0,}$/.test(e.target.value))
      this.setState({ item: e.target.value });
    else e.target.value = null;
    // console.log(this.state.item);
    // console.log(this.state.id);
  };

  handleDelete = (id) => {
   
    console.log("Remove Item");
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItems,
    });

  };
  handleEdit = (id) => {

    const filterItems = this.state.items.filter((item) => item.id !== id);
    const selectItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filterItems,
      item: selectItem.name,
      id: id,
      editItem: true,
    });

  };

  clearList = () => {
  
    this.setState({
      items: [],
    });
  
  };
  
  render() {
    return (
      <div className="container">
        <h2 align="center" className="text-secondary">
          Food Queue Application
        </h2>
        <div className="row">
          <FoodInput
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem}
          />
        </div>
        <FoodList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          clearList={this.clearList}
        />
      </div>
    );
  }
}
export default App;
