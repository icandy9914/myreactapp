import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpperClick = ()=> { 
        console.log("you clicked" + mytxt);
        let newTxt = mytxt.toUpperCase();
        setText(newTxt);
    }

    const handleLowerClick = ()=> { 
        console.log("you clicked" + mytxt);
        let newTxt = mytxt.toLowerCase();
        setText(newTxt);
    }
    const handleClearText = ()=> { 
        let newTxt = '';
        setText(newTxt);
    }

    const handleExtraSpace = ()=> {
        let newTxt = mytxt.split(/[ ]+/);
        setText(newTxt.join(" "));
    }

    const handleCopyText = ()=> {
        var copyText = document.getElementById("exampleFormControlTextarea1");
        navigator.clipboard.writeText(copyText.value);
    }

    const handleUpdate = (event)=> {
        console.log("onchanged");
        setText(event.target.value);
    }

    const [mytxt, setText] = useState('Enter Text here...');
    return (
        <>
        <div className="container" data-bs-theme={`${props.mode==='light'?'light':'dark'}`}>
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.headingTxt} - </h1>
            <div className="mb-3">
                <textarea value={mytxt} className="form-control my-3" id="exampleFormControlTextarea1" rows="10" onChange={handleUpdate}>{mytxt}</textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                
            </div>
        </div>
        <div className="container" data-bs-theme={`${props.mode==='light'?'light':'dark'}`}>
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{mytxt.split(" ").length} words & {mytxt.length} characters</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`} >{0.008 * mytxt.split(" ").length} Minutes took to read</p>
            <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview Text</h3>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{mytxt}</p>
        </div>
        </>
    )
}
