import React from 'react'
import { categories } from '../utils/content'

const Category = ({ selectCategory, setSelectcategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? '#a42121' : 'transparent',
            color: category.name === selectCategory ? '#fff' : '#999',
            border:
              category.name === selectCategory
                ? '2px solid #aa0000'
                : '0px solid #000',
          }}
          key={category.name}
          onClick={() => setSelectcategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Category
