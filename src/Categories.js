import React from 'react';

const Categories = (props) => {
  return (
    <div className='btn-container'>
     {props.final_category.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => props.filtercategorey(category)}
          >
            {category}
          </button>
        );
      })}
      
    </div>
  )
};

export default Categories;