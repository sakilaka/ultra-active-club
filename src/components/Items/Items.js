import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items , setItems] = useState([]);
    const [exTime , setExTime] = useState(0);
    const [breakTime, setBreakTime] = useState();


    const handleBreakTime = selectedBreakTime => {
        localStorage.setItem("Break-Time", selectedBreakTime);
        setBreakTime(selectedBreakTime);
    };

    useEffect(() => {
        const getBreakTime = localStorage.getItem("Break-Time");
        setBreakTime(getBreakTime);
    }, []);


    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    
    const addTime = (time) =>{
      setExTime(exTime + parseInt(time))
    }

    const completeBtn = () =>{
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
 
    

    return (
        <div className='container'>
           
            <div className='all-items'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        btn={addTime}>
                        </Item>)      
                }
            </div>
            <div className='calculation-cart'>
              <div className='info'>
                <img src="WhatsApp Image 2022-09-29 at 2.05.18 AM.jpeg" alt="" />
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
                    <button onClick={(e)=>handleBreakTime(e.target.innerText)}>10</button>
                    <button onClick={(e)=>handleBreakTime(e.target.innerText)}>20</button>
                    <button onClick={(e)=>handleBreakTime(e.target.innerText)}>30</button>
                    <button onClick={(e)=>handleBreakTime(e.target.innerText)}>40</button>
                    <button onClick={(e)=>handleBreakTime(e.target.innerText)}>50</button>
                </div>
              </div>

              <hr />
               <div className='Ex-details'>
                 <h2>Exercise Details</h2>
                 <div className='time'>
                    <h2>Exercise Time</h2>
                    <p>{exTime} seconds</p>
                 </div>
                 <div className="break-time">
                    <h2>Break Time</h2>
                    <p>{breakTime} seconds</p>
                 </div>
               </div>

               <hr />

               <div>
                 <button onClick={completeBtn} className='com-btn'>Activity Completed</button>
               </div>
            </div>
        </div>
      
    );
};

export default Items;