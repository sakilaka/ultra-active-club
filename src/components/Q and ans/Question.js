import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='ques'>
            <h1>React Question and Answer</h1>
            <div className='ques1'>
                <h2>Question 1 : How does react work??</h2>
                <p>
                    ReactJS divides the UI into isolated reusable pieces of code known as components. <br /> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. <br /> It's possible to have as many components as necessary without cluttering your code.
                </p>
            </div>
            <div className='ques2'>
                <h2>Question 2 : Difference between props and state??</h2>
                <p>
                    PROPS: <br />
                    The Data is passed from one component to another. <br />	
                    It is Immutable (cannot be modified). <br />	
                    Props can be used with state and functional components.
    
                </p>
                <p>
                    STATE: <br />
                    The Data is passed within the component only. <br />
                 	It is Mutable ( can be modified). <br />
	                State can be used only with the state components/class component.
                </p>

                <p>
                POINT DISCUSSED : <br />
                Props are used to pass data from one component to another. <br />
                The state is a local data storage that is local to the component only and cannot be passed to other components. <br />
                The this.setState property is used to update the state values in the component.
                </p>
            </div>
            <div className='ques3'>
                <h2>Question 3 : What does useEffect do without data load??</h2>
                <p>
                    1. Reading from local storage. <br />
                   2. Registering and deregistering event listeners.
                </p>
            </div>
        </div>
    );
};

export default Question;