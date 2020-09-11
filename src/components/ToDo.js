import React, {useState} from 'react';

// Create a component function
function ToDo ()
{   // Assignment deconstructor array. It places returns info to multiple data sources, like filling an array

/*     const [num1, num2] = [1, 2];
    console.log ( num1);
    console.log (num2);  */

    /*Set up a state - '' is default. 
        First item is a varaiable that holds the state value
        Second value is a function that we use to update the state value
        Important! We will never update the first item Directly...EVER!

    */
    const [newTask, setNewTask] = useState( 'default' ); // Argument in useState()' is the default value for this state. 

    return (    // The return is the output of the component, we will use a form, which will render
        <>
        <form>
            <label htmlFor="task">New Task:</label>
            <input 
            type="text" 
            id="task" 
            onChange= { e => { setNewTask ( e.target.value ) } }
            value= { newTask } />
            <p>
                <strong>Current Task Value:</strong>
                <em>{newTask}</em>
            </p>
            <input type="submit" value="Add To-Do" />
        </form>
        <ul></ul>
        </>
    );
}

export default ToDo;