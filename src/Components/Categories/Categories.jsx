import React, { use } from 'react';
import { NavLink } from 'react-router';
import './Categories.css'

const categoryPromise=fetch('/categories.json').then(res=>res.json());


const Categories = () => {
    const categories=use(categoryPromise); 
    return (
        <div>
           <h2 className='text-xl font-bold text-gray-800 mb-7 '>
             All Categories
           </h2>
           <div id='categories' className='grid grid-cols-1 gap-3 text-lg font-semibold text-gray-400'>
            {
                categories.map(category=> <NavLink key={category.id} to={`/categories/${category.id}`} className='border border-gray-200 text-center py-2 rounded-md'>{category.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;