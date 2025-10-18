import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h3 className="font-semibold">All Categories</h3>
      <div className="grid gap-3 py-5 px-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`category/${category.id}`}
            className={"category btn bg-base-100 border-0 hover:bg-base-200"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
