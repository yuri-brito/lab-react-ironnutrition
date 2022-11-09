import {useState} from 'react'
import './ButtonHide.css'
function ButtonHide(props){
    const[state,setState]=useState(true)
    function showandHide(e){
        e.target.innerHTML==='Hide Form'?e.target.innerHTML='Add New Food':e.target.innerHTML='Hide Form'
        props.functionHiseandShow()


    }

    return(
        <div className='buttonHide'>
            <button onClick={showandHide}>
                Hide Form
            </button>
        </div>
    )
}
export default ButtonHide;