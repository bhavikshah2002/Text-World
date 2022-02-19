import React, {useState} from 'react';

export default function TextForm(props) {
const [text,setText]=useState('');

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
 
  navigator.clipboard.writeText(text);
  
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
        <textarea className="form-control "style={{color:props.mode==='dark'?'white':'black' , backgroundColor: props.mode==='dark'?'rgb(25 39 56)':'white'}} id='myBox' value={text} onChange={handleOnChange}  rows="10"></textarea>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleUpClick}>To Upper-Case</button>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleLoClick}>To Lower-Case</button>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleReverse}>Reverse</button>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleExtraSpaces}>Remove extra spaces</button>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.mode==='dark'? 'primary' : 'dark'} my-2 mx-2`} onClick={handleClr}>Clear Screen</button>
    </div>
    </div>
     
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>Number of Words: { (text.split(/\s+/).filter((element)=>{return element.length !== 0})).length} Number of Characters: {text.length}</p>
      <p>You Will require {0.008 * (text.split(/\s+/).filter((element)=>{return element.length !== 0})).length} minutes to read.</p>
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

