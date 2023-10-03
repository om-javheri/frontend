import React,{useState} from 'react'

export default function Textform(props) {
    const  [text,setText]=useState('');
    //setText("New Text")
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked");
        let newText=text.toUpperCase(text);
setText(newText);
props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick=()=>{
        //console.log("UpperCase was clicked");
        let newText=text.toLowerCase(text);
setText(newText);
props.showAlert("Converted to Lower Case","success")
    }

    const handleExtraSpaces=()=>{
      //console.log("UpperCase was clicked");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Handled extra spaces","success")

  }
    const handleClearClick=()=>{
      //console.log("ClearClick was clicked");
      let newText="";
setText(newText);
props.showAlert("Text Cleared","success")
}
const handleCopy=()=>{
 
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied to clipboard","success")
  
  }
    const handleOnChange=(event)=>{
        //console.log("On Change");
        
        setText(event.target.value);
    }
    
    // let [ChangeBackColor, setChangeBackColor] = useState('white')
    // let [ChangeColor, setChangeColor] = useState('black')
    // let Changecolorfun=()=>{
    //   if (props.mode==='light'){
    //     setChangeBackColor('white')
    //     setChangeColor('black')
    //   }
    //   else{
    //     setChangeBackColor('grey')
    //     setChangeColor('white')
    //   }

    // }
  return (<>

<div  className='container'>
  <div  className='container' style={{"color":document.body.style.backgroundColor==='white'?'black':'white'}}>
    <h1 className='mb-4'>{props.heading}</h1>
    </div>
<div className="mb-3" >


  <textarea className="form-control" value={text} onChange={handleOnChange} style={{"backgroundColor":props.mode==='dark'?'grey':'white', "color":props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div >
<div >
<button disabled={(text.length===0)} className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick} style={{"backgroundColor":'blue',"marginRight": "10px","color":"white"}}> CONVERT TO UPPER CASE</button>
<button disabled={(text.length===0)} className="btn btn-outline-primary mx-1 my-1" onClick={handleLowClick} style={{"backgroundColor":'blue',"marginRight": "10px","color":"white"}}>   Convert to Lower Case</button>
<button disabled={(text.length===0)} className="btn btn-outline-primary mx-1 my-1" onClick={handleClearClick} style={{"backgroundColor":'blue',"marginRight": "10px","color":"white"}}>   Clear Text</button>
<button disabled={(text.length===0)} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy} style={{"backgroundColor":'blue',"marginRight": "10px","color":"white"}}>   Copy Text</button>
<button disabled={(text.length===0)} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpaces} style={{"backgroundColor":'blue',"marginRight": "10px","color":"white"}}>   Remove Extra Spaces</button>
</div>
</div>
<div className='container mb-3' style={{"color":document.body.style.backgroundColor==='white'?'black':'white'}} >
    <h2>Your Text Summary</h2> 
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes  to read this text</p>
    <p>Preview</p>
    <p>{text.length>0?text:"....type something above for preview"}</p>
    



</div>
</>
  )
}
