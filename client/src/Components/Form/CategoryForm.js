import React from "react";

const CategoryForm = ({edit, handleSubmit, value, setValue }) => {
  return (
    <form onSubmit={handleSubmit} className="row g-2">
      <div className="col-8">
        <input
          type="text"
          className="form-control"
          placeholder="Enter tiltle"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="col-4">
        <button type="submit" className="btn btn-primary">
          {edit ? "Update" : "Add Course"}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
