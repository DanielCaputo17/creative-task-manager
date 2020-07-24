import React from 'react';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Listit(props){
    const items = props.items;
    const listit = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="icons" onClick={() => {
           props.deleteItem(item.key)  
        }} icon="trash" />

        </span>
     </p> 
    </div>})

    
    
    return <div>
        
        <div>    
        {listit}
        </div>
    
    </div>;
  }

  export default Listit;