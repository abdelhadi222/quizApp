import { useEffect, useState } from "react"
import "./App.css"
function App() {
 const [quiz,setQuiz] = useState([
   {qu:"Inside which HTML element do we put the JavaScript ?",qu1:"Js",qu2:'<script>',qu3:'Java Script',an:'<script>'},
   {qu:"Where is the correct place to insert a JavaScript ?",qu1:"Head ",qu2:'Body',qu3:'Head && Body',an:'Head && Body'},
   {qu:"What is the correct syntax for referring to an external script called page.js",qu1:"script src='page.js'",qu2:"script.href='page.js'",qu3:"script.src='page.js'",an:"script src='page.js'"},
   {qu:"How do you create a function in JavaScript ?",qu1:"function = fun()",qu2:'function  fun()',qu3:'function.fun()',an:'function  fun()'},
   {qu:"How do you call a function named 'MyFun' ?",qu1:"Hi MyFun",qu2:'call MyFun',qu3:'MyFun',an:'MyFun'}
  //  {qu:"What is Html",q1:"Is Nothing",qu2:'Is Goode',qu3:'Is Html',an:'Is Html'}
 ])
 const [num,setNum] = useState(0)
 const [note,setNote] = useState(0)
  const [nump,setNumP] = useState(0)
 const [save , setSave] = useState('')
 const [show , setShow] = useState(false)
 const [ac , setAc] = useState(false)
 const[rr,setRr] = useState(false)
 
  useEffect(()=>{
     setSave(quiz[num].qu1)
  },[rr])




 function Next() {

  if(save == '') {
    return setAc(true)
  }
  setRr(p=>!p)

   if(save == quiz[num].an && num <= quiz.length-1  ) {
     setNote(p=> p + 20)
     setSave('') 
     

  }

  if(num == quiz.length-1) {
       setShow(true)
     return
  }
   setSave('') 
   setAc(false)
   setNum(p=>p+1)
  setNumP(p=>p+1)
 }
 console.log(num);
 console.log(note);

console.log('rt =>' , save);


  return (
    <>

      
     {show ?
       <div className="RE"> <p>The Resulte is {note} % </p> <button className="play" onClick={()=>window.location.reload()}>try Agin!</button></div>
     :     <div className="white">
        <h1>App Quiz </h1>
        <h5 className="gh">{nump+1} / {quiz.length}</h5>
 <div className="jk">
              <h3>{quiz[num].qu}</h3>
<div className="container">
  
  <label><input name="e" type="radio" defaultChecked defaultValue={quiz[num].qu1}   value={quiz[num].qu1} onChange={(e)=> setSave(e.target.value)} /> {quiz[num].qu1}</label>
  <label><input name="e" type="radio"  defaultValue={quiz[num].qu2}  value={quiz[num].qu2} onChange={(e)=> setSave(e.target.value)}/> {quiz[num].qu2}</label>
  <label><input name="e" type="radio"  defaultValue={quiz[num].qu3}  value={quiz[num].qu3} onChange={(e)=> setSave(e.target.value)} /> {quiz[num].qu3}</label>

</div>
 </div>

         
         <div>
            <button onClick={Next} className="Bu">Next </button>
            {ac && <p style={{color:'red'}}>Pls Enter Your Reponsse</p>}
           
        
         </div>
     </div>}
      
    </>
  )
}

export default App
