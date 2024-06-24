import './productcard.css'
import {useRef, useState} from 'react';
import logo1 from './logo.svg'
import AddToCart from './AddToCart.js'
function ProductCard({title,price}){
    let pRef=useRef(0);
    let iRef=useRef(0);
    let oRef=useRef(0);
    let [inputV,setInputV]=useState('class');
    console.log(pRef.current);
     function printTitle(){
        console.log("printTitle");
        console.log(pRef.current.innerText);
        if(pRef.current.style.display === 'none'){
        pRef.current.style.display="block";
        }
        else{
            pRef.current.style.display="none"
        }
     }
     function displayOutput(e){
        // console.log(iRef.current);
        // console.log(oRef.current);
        // oRef.current.innerText = `output here: ${iRef.current.value}`;
        setInputV(e.target.value);
     }
    console.log({title},{price})
    return(
        <div className='product-card'>
            <p onClick={printTitle}>{title}</p>
            <p ref={pRef}>{price}</p>
            <img src={logo1}/>
            <input type="text" onChange={displayOutput} ref={iRef} value={inputV}/>
            <p ref={oRef}>over here the output is visible-{inputV}</p>
            <AddToCart inputV={inputV}/>
        </div>
    );
}
export default ProductCard;