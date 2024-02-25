import React from "react";

const CategoryForm = ({
  edit,
  handleSubmit,
  name,
  setName,
  description,
  setDescription,
}) => {
  return (
    <form onSubmit={handleSubmit} className="row g-2 ">
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter tiltle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          className="form-control mt-2"
          placeholder="Enter description"
          style={{ height: edit ? "200px" : "100px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="col-2">
        <button type="submit" className="btn btn-primary">
          {edit ? "Update" : "Add Course"}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
