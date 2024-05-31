import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const LineItem = () => {
  return (
    <li className = 'item' key={item.id}>
        <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)}></input>
        <label onDoubleClick={() => handleCheck(item.id)} style={(item.checked) ? { textDecoration: 'line-through' } : null} >{item.item}</label>
        <FaTrashAlt role='button' tabIndex='0' onClick={() => handleDelete(item.id)}/>
    </li>
  )
}

export default LineItem