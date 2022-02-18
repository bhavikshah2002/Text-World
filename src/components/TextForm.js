import React, {useState} from 'react';

export default function TextForm(props) {
const [text,setText]=useState('Hello');

const handleUpClick = ()=>{
  let newT= text.toUpperCase();
  setText(newT);
  props.showAlert("Converted to uppercase!", "success");
}
const handleLoClick = ()=>{
  let newte= text.toLowerCase();
  setText(newte);
  props.showAlert("Converted to lowercase!", "success");
}
const handleClr = ()=>{
  setText("");
  props.showAlert("Text Cleared!", "success");
}
const handleReverse = ()=>{
  let myArray = text.split(" ");
  myArray.reverse();
  setText(myArray.join(" "));
  props.showAlert("Text Reversed!", "success");
}
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed", "success");
}
const handleOnChange=(event)=>{
  setText(event.target.value);
}

  return (
    <>
    <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3 my-4 container">
        <h3 className='text-center'>{props.textarea}</h3>
        <textarea className="form-control "style={{color:props.mode==='dark'?'white':'black' , backgroundColor: props.mode==='dark'?'#3e4348':'white'}} id='myBox' value={text} onChange={handleOnChange}  rows="10"></textarea>
    <button type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleUpClick}>To Upper-Case</button>
    <button type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleLoClick}>To Lower-Case</button>
    <button type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleReverse}>Reverse</button>
    <button type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleCopy}>Copy Text</button>
    <button type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleExtraSpaces}>Remove extra spaces</button>
    <button type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleClr}>Clear Screen</button>
    </div>
    </div>
     
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summery</h2>
      <p>Number of Words: { text.split(" ").length} Number of Characters: {text.length}</p>
      <p>You Will require {0.008 * text.split(" ").length} minutes to read.</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}


// import React, {useState} from 'react'



// export default function TextForm(props) {
// const [text,setText]=useState('Enter Value')
// const [text2,setText2]=useState(text.toUpperCase())

// const handleUpClick = ()=>{
//   let newT= text.toUpperCase();
//   setText(newT);
// }
// const handleOnChange=(event)=>{
//   setText(event.target.value);
//   let newT= event.target.value.toUpperCase();
//   setText2(newT);
  
// }

//   return (
//     <div>

//     <div className="mb-3 my-5 container">
//         <h3 className='text-center'>{props.textarea}</h3>
//         <textarea className="form-control " value={text} onChange={handleOnChange}  rows="10"></textarea>
//     <button type="button" className="btn btn-dark my-2" onClick={handleUpClick} >To Upper-Case</button>
//     <textarea className="form-control " value={text2}   rows="10"></textarea>
//     </div>
//     </div>
//   )
// }

