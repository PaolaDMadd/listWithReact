import React, { useState } from 'react';

function ToDoList (){
  const [ textInput, updateValue ] = useState('');
  const [list,updateList] = useState([
    
]);

return (
  <div>
  <h3> Daily to Do List </h3>
  <p> Add an item or activity filling the form here below. </p>
  <p> You can update its status marking it as done or removing it from the list.</p>
  <form>
      <input type="text"  className='text-box' value={textInput} onChange={(event) => updateValue(event.target.value)} />
      <button onClick={(e) => {
        e.preventDefault()
        updateList([...list, { value: textInput, checked: false }])

        updateValue('')
      }
      }> add </button>
    </form>
  <ul>
  {list.map(
    (item, index) => (
      <li>
        <span className={item.checked && "lineThrough"}>{item.value}</span> 
        <input type="checkbox" className="box1" checked={item.checked} onClick={() => {updateList(list.map((currentItem, position) => {
          if(index === position) {
            return {value: currentItem.value, checked: !currentItem.checked }
          }
          return currentItem
        }))}}   />
        
        <span className="infoText"> done </span>

        <input type="checkbox" className="box2" onClick={() => updateList(list.filter((_, i)=>index !== i))}/> <span className="infoText"> remove </span>
      </li>)
  )}
</ul>
</div>
)
}
export default ToDoList

  
