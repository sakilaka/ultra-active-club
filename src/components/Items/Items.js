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

              <hr />

              <div className='break'>
                <h2>Add a break</h2>
                <div className='btn'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
              </div>

              <hr />
               <div className='Ex-details'>
                 <h2>Exercise Details</h2>
                 <div className='time'>
                    <h2>Exercise Time</h2>
                    <p>{200}</p>
                 </div>
                 <div className="break-time">
                    <h2>Break Time</h2>
                    <p>{23}</p>
                 </div>
               </div>

               <hr />

               <div>
                <button>Activity Completed</button>
               </div>
            </div>
        </div>
      
    );
};

export default Items;