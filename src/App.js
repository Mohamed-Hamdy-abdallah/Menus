import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './App.css';

const allcategory = items.map ((item)=>item.category);
const set1 = new Set(allcategory);
const final_category = ['all',...set1];



function App() {
  const[menuItems,setMenuItems] = useState(items);
  const [categories, setCategories] = useState(final_category);

  const filtercategorey =(category_name)=>{
    if (category_name==='all')
    {
      setMenuItems(items);
      return ;
    }
   setMenuItems( items.filter((cat)=> cat.category===category_name))
  }

 

  return<main>
    <section className="menu section">
      <div className='title'>
        <h2>Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories final_category={categories} filtercategorey={filtercategorey} />
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;