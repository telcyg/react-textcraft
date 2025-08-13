import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
}
const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
}
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
const handleCapClick = () =>{
    let newText = text.split(" ") .map(word => capitalize(word)) .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalize", "success")
}
const handleCopyClick = () =>{
      navigator.clipboard.writeText(text).then(()=>{
        console.log("Text copied succesfully");
      }).catch(()=>{
        console.log("Error in copying text")
      })
      props.showAlert("Copied text to clipboard!", "success")

}
const handleClearClick = () =>{
     let newText = '';
     setText(newText)
    props.showAlert("Text cleared succesfully!", "success")

}
const handleExtraSpacesClick = () =>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra spaces have been removed", "success")

}
const handleTextToSpeechClick =() =>{
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("myBox").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
}
const handleOnChange = (event) =>{
    setText(event.target.value);
}
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#3d4146ff' : 'white', color: props.mode === 'dark' ? '#fff' : '#000'}}></textarea>
        </div>
        <button   disabled={text.length===0}
className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button   disabled={text.length===0}
className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCapClick}>Convert to Capitalize</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCopyClick}>Copy text to Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleExtraSpacesClick}>Remove extra spaces</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleTextToSpeechClick}>Play Text Content</button>
        
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.replace(/\s/g, '').length} characters</p>
      <p>This can be read in {text.split(" ").filter((ele)=>{return ele.length!==0}).length * 0.008} minutes</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
