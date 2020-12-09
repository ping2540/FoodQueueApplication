import React, { Component } from "react";
export default class FoodInput extends Component {
  inputChange = (event) => {
    if (event.key === "Enter" && event.target.value === "") {
      event.preventDefault();
    }
  };
  render() {
    const { handleSubmit, item, handleChange, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-secondary">Please Food Items</label>
            <input
              type="text"
              className={editItem ? "form-control is-invalid" : "form-control"}
              value={item}
              onKeyPress={this.inputChange}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            hidden={item ? false : true}
            className={editItem ? "btn btn-danger" : "btn btn-primary"}
            value={editItem ? "Edit" : "Confirm"}
          />
        </form>
      </div>
    );
  }
}
