import React,{useState} from 'react'
import './Form.css'

export default function Form(props) {
    const [text, setText]= useState('TypeHere')
    const handleOnChange=(events)=>{setText(events.target.value)}
  const handleClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Upper case","Success")
}
const handle2Click=()=>{
    let secondText=text.toLowerCase();
    setText(secondText)
    props.showAlert("converted to lower case","Success")
}
const capitalized=()=>{
  var newText=text.toLowerCase().split(" ");
  for ( var i=0; i<newText.length; i++){
    newText[i]=newText[i][0].toUpperCase()+newText[i].slice(1);
  }
  setText(newText.join(" "))
  props.showAlert("converted to capitalize case","Success")
   
}
const sentence=()=>{
  var newText=text.toLowerCase().split(" ");
for ( var i=0; i<1; i++){
  newText[i]=newText[i][0].toUpperCase()+newText[i].slice(1);
}
setText(newText.join(" "))
props.showAlert("converted to sentence case","Success")
}
const alternate=()=>{
  var newText=text.toLowerCase().split("");
for ( var i=0; i<newText.length; i+=2){
  newText[i]=newText[i][0].toUpperCase()+newText[i].slice(1);
}
setText(newText.join(""))
props.showAlert("converted to alternate case","Success")
}
const inverse=()=>{
  var newText='';
  var i=0;
  while(i<text.length){
    var n = text.charAt(i);
    if(n=== n.toUpperCase()){
      n = n.toLowerCase()
    }
    else{
      n = n.toUpperCase()
    }
    i +=1;
    newText += n;
  }
  setText(newText)
  props.showAlert("converted to inverse case","Success")
}
const reverse=()=>{
  let newText = text.split("").reverse();
  setText(newText.join(""))
  props.showAlert("converted to reverse case","Success")
}
var lines = text.split("\n");
const clear=()=>{
  var newText="";
  setText(newText)
}
const copy=()=>{
  navigator.clipboard.writeText(text);
}
 
  return (
    <>
    <section className="home">
    
        <h1>{props.Name}</h1>
        <p>(Simply enter your text and choose the case you want to convert it to.) </p>
        <textarea name="" id="my-box mx-0"  cols ="250" row = "3" className="f" value={text} onChange={handleOnChange}></textarea>
    
    <div  id ="button-sec" className="btn">
        <button className ="btn btn-danger mx-3 " onClick={handleClick}>{props.Submit1}</button>
        <button className ="btn btn-danger mx-3 " onClick={handle2Click}>{props.Submit2}</button>
        <button className ="btn btn-danger mx-3 " onClick={capitalized}>{props.Submit3}</button>
        <button className ="btn btn-danger mx-3 " onClick={sentence}>{props.Submit4}</button>
        <button className ="btn btn-danger mx-3 " onClick={alternate}>{props.Submit5}</button>
        <button className ="btn btn-danger mx-3 " onClick={inverse}>{props.Submit6}</button>
        <button className ="btn btn-danger mx-3 " onClick={reverse}>{props.Submit7}</button>
        <button class ="btn btn-danger mx-2" onClick={clear}>Clear Text</button>
        <button class ="btn btn-danger mx-2 " onClick={copy}>Copy Text</button>
        
      </div>
      
        <p>Letter Count:- {text.length} | Words Count:- {text.split(" ").length} | Line Count:- {lines.length}</p>
        </section>

      <section id = "content">
        <div className="box">
            <h3>Upper Case</h3>
            <p>The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).<br/><br/>
            ("SELECT THE TEXT FOR WHICH YOU WANT TO CHANGE THE CASE.")
            </p>
      </div>
        <div className="box">
            <h3>Lower Case</h3>
            <p>If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste it.<br/><br/>
            ("select the text for which you want to change the case.")</p>
            </div>
      
        <div className="box">
            <h3>Capitalized Case</h3>
            <p>The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.<br/><br/>
            (“Select The Text For Which You Want To Change The Case.”)</p>
      </div>
      <div className="box">
            <h3>Sentence Case</h3>
            <p>It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.<br/>
            Note: it won’t, however, capitalize names or places.<br/><br/>
            (“Select the text for which you want to change the case.”)</p>
      </div>
      <div className="box">
            <h3>Alternating Case</h3>
            <p>The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word.<br/><br/><br/>
            ("tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE."")</p>
      </div>
      <div className="box">
            <h3>Inverse Case</h3>
            <p>Capitalization of the words that normally are lowered and lower case of the words that normally are in capital. This converter will inverse all the letters to the opposite of what you have.<br/><br/><br/><br/>
            (“sELECT tHE tEXT fOR wHICH yOU wANT tO cHANGE tHE cASE.”)</p>
      </div>
      <div className="box">
          <h3>Reverse Case</h3>
          <p>This gives you the complete reverse form of your blocks of text. The last word of entire text will become the first word and it also reverses the letters of each word.<br/><br/>
          (“.esaC ehT egnahC oT tnaW uoY hcihW roF txeT ehT tceleS”)
          </p>
      </div>
      </section>
        
        

        
        

        
        
  
        

    </>
  )
}
