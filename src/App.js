import React, {useReducer, useState} from 'react';
import './App.css';
import './NewAPP.scss';


const App = () =>{

const [style1, setStyle1] = useState("");
const [style2, setStyle2] = useState("");
const [style3, setStyle3] = useState("");
const [style4, setStyle4] = useState("");
const [style5, setStyle5] = useState("");
const [style6, setStyle6] = useState("");
const [style7, setStyle7] = useState("");
const [style8, setStyle8] = useState("");
const [style9, setStyle9] = useState("");
const [style10, setStyle10] = useState("");

const blueStyle = () =>{
    setStyle1("aqua");
    setStyle2("aquamarine");
    setStyle3("cadetblue");
    setStyle4("darkturquoise");
    setStyle5("deepskyblue");
    setStyle6("dodgerblue");
    setStyle7("lightblue");
    setStyle8("navy");
    setStyle9("skyblue");
    setStyle10("turquoise");
};

const redStyle = () =>{
    setStyle1("coral");
    setStyle2("crimson");
    setStyle3("firebrick");
    setStyle4("indianred");
    setStyle5("lightsalmon");
    setStyle6("maroon");
    setStyle7("tomato");
    setStyle8("orangered");
    setStyle9("lightcoral");
    setStyle10("salmon");
};

const greenStyle = () =>{
    setStyle1("chartreuse");
    setStyle2("darkgreen");
    setStyle3("olive");
    setStyle4("seagreen");
    setStyle5("forestgreen");
    setStyle6("lightgreen");
    setStyle7("lightseagreen");
    setStyle8("limegreen");
    setStyle9("teal");
    setStyle10("yellowgreen");
};
  return(
    <div className="container">
      <h1>Color Shades </h1>

      <div className="row">
      <button type="button" onClick={() => blueStyle()}>BLUE</button>
      <button type="button" onClick={() => greenStyle()}>GREEN</button>
      <button type="button" onClick={() => redStyle()}>RED</button>
      </div>

      <div className="row">
        <table>
        <td className={style1}></td>
        <td className={style2}></td>
        <td className={style3}></td>
        <td className={style4}></td>
        <td className={style5}></td>
        <td className={style6}></td>
        <td className={style7}></td>
        <td className={style8}></td>
        <td className={style9}></td>
        <td className={style10}></td>

        </table>
      </div>
    </div>
  )
};

export default App;
