import React from 'react';
import './Que.css'

const Que = () => {
    return (
        <div className='que-section'>

            <div className="que1">
                <h2>Question 1 : How does React works?</h2>
                <p> <strong> Answer : </strong>  ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            </div>
            <div className="que2">
                <h2>Question 2 : Differences between Props and State?</h2>
                <p><strong> Answer : </strong>  <br></br>    State:The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible<br></br> Props : Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function.</p>
            </div>
            <div className="que1">
                <h2>Question 3 : What are the work of UseEffect without api load?</h2>
                <p> <strong> Answer :</strong>  UseState, you tell React that your component needs to do something after render.It is one kind of side effect.It used for laod data,dom manupulationBy using  and else </p>
            </div>
        </div>
    );
};

export default Que;