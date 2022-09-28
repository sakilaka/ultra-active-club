import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items , setItems] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    
    return (
        <div className='container'>
           
            <div className='all-items'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}>
                        </Item>)
                            
                }
            </div>
            <div className='calculation-cart'>
              <div className='info'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Sm1438yn7VJ7OvRLUXjNdHwntH6JEmoonw&usqp=CAU" alt="" />
                <div>
                    <p>Kamrul Hasan</p>
                    <p>Sadarghat,Chittagong</p>
                </div>
              </div>

              <div className='more-info'>
                <div>
                  <p>Weight</p>
                  <p>70kg</p>
                </div>
                <div>
                  <p>Height</p>
                  <p>6 feet</p>
                </div>
                <div>
                  <p>Age</p>
                  <p>23yrs</p>
                </div>
              </div>
            </div>
        </div>
      
    );
};

export default Items;