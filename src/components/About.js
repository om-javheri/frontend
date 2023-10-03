import React from 'react'

export default function About() {
    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'1px solid white'
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    // }
  return (
   
    <div className="container mb-3 " style={{"border":"2px solid","color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}}>
        <h1>About Us</h1>
    <div className="accordion my-3" style={{"border":"2px solid","color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}} id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button"  style={{"color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        TextUtils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{"color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}}>
        <strong>Use of TextUtils Application : </strong> This application is used to transform the text into various forms and copy it to your clipboard. <br/>
        <strong>Free to use : </strong> Absolutely free without any charges.<br/>
        <strong>Browser Compatible : </strong> Can work on all the browsers.<br/>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{"color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Creator
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{"color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}}>
        <strong>Om Javheri :</strong> My first react based single page application.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={{"color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Us
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{"color":document.body.style.backgroundColor==='white'?'black':'white',"backgroundColor":document.body.style.backgroundColor}}>
        <strong>Email : </strong> om.javheri@mitaoe.ac.in
      </div>
    </div>
  </div>
</div>
{/* <div className="container mb-3">
<button onClick={toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
</div>  */}
</div>
  )
}
