import React from 'react';

// Create a component function
function ToDo ()
{
    return (    // The return is the output of the component, we will use a form, which will render
        <>
        <form>
            <label htmlFor="task">New Task:</label>
            <input type="text" id="task" ></input>
            <input type="submit" value="Add To-Do" />
        </form>
        <ul></ul>
        </>
    );
}

export default ToDo;