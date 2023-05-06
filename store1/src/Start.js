import React,{useState} from "react";
import  ReactDOM  from "react-dom";
import styled from 'styled-components';
import Tag from './T.module.css';

const Sty=styled.button`
    background-color:lightblue;
    font-size:24px;
    border-radius:5px;
    weight: 2000px;
    height:40px;
    margin-left:200px;
` 

function MyForm() {
 
  const [myCar, setMyCar] = useState();
 
  const handleChange = (event) => {
    event.preventDefault();
    setMyCar(event.target.value)
   
  }

  return (
    <form>
      <input type="select" placeholder="list"/>
       <select  value={myCar}  placeholder="no-select" onChange={handleChange} >
        <option value="nissan gtr">nissan gtr</option>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
        <option value="Ferrari">Ferrari</option>
        <option value="peugeot">peugeot</option>
       </select>
  
    </form>
  )
}


export default MyForm;