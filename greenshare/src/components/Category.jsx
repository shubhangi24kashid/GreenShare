import React from "react";
import './Category.css';

const categories=[
    { name: 'Electronics', image: '/images/electronics.jpg' },
    { name: 'Books', image: '/images/books.jpg' },
    { name: 'Clothing and accessories', image: '/images/clothing.jpg' },
    { name: 'Furniture', image: '/images/furniture.jpg' },
    { name: 'Toys', image: '/images/toys.jpg' },
   
];

const CategoriesSection= () =>{
    
    return(
<section className="categories">
    <h2>Explore Categories</h2>
    <div className="category-container">

    {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}

    </div>

</section>
    );
};

export default CategoriesSection;