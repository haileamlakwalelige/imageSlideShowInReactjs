import React from 'react';
 import './sass.scss';

function Sass(){
    function submit(){
        return(
            alert("you submit you form")
        )
    }
    return(
        <div className='container'>
        <div>
            <h1 className="hello">Hello Kingo</h1>
            <p>This is the paragraph of the page</p>
        </div>
        <div>
            <form>
                <p>Enter your name</p>
                <input type="text" /><br/>
                <button onClick={submit} className="but">Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Sass;