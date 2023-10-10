import React,{useState} from 'react'

export default function TextForms(props) {
    const handleClick = ()=> { 
        console.log("you clicked" + mytxt);
        let newTxt = mytxt.toUpperCase();
        setText(newTxt);
    }
    const handleUpdate = (event)=> {
        console.log("onchanged");
        setText(event.target.value);
    }
    const [mytxt, setText] = useState('Enter Text here...');
    return (
        <>
        <div className="container">
            <h1>{props.headingTxt} - </h1>
            <div className="mb-3">
                <textarea value={mytxt} className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleUpdate}>{mytxt}</textarea>
                <button className="btn btn-primary" onClick={handleClick}>Process now</button>
            </div>
        </div>
        </>
    )
}
