import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

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


    // Set up state for to-do list items. 
    const [toDos, setToDos] = useState( [  // Default list of To-Do items.
        { id: uuidv4(), task: "Unlock the Boss Door" },
        { id: uuidv4(), task: "Reach level 10" },
        { id: uuidv4(), task: "Main Quest: Defeat the Pyromancer" }
    // Turn the array into a map with key-value pairs, easy to output in JSX this way. 
    ] ); // Defining an assignment deconstructor


    // Make a function that adds a new task to the UL
const addNewTask = event => {
    // Don't let the page reload for the submission...! Prevents default action.
    event.preventDefault();

 //'...' spread operator to break up an array, so that we can each item inside is treated as an argument (value separated by comma)
const newToDosList = [...toDos];   // Fresh array with the same values as toDos

// !! Remember, we never update the state variable directly. 
// Now we add a new task to our new array (push), but make sure it matches the other objects in the array (giving it task: )
newToDosList.push( { id: uuidv4(), task: newTask } );

// Now we try to update the state:
setToDos ( newToDosList );

setNewTask( '' );   // Set it to blank after submission so the user doesn't have to erase!
}

    return (    // The return is the output of the component, we will use a form, which will render
        <>
        <form onSubmit={addNewTask}>
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
    <ul>{toDos.map( toDo => <li key={ToDo.id}>{toDo.task}</li> )}</ul>    
        </>
    );
}

export default ToDo;