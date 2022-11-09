import {Input} from 'antd'
import {useState} from 'react'
import './AddFoodForm.css'
import ButtonHide from './ButtonHide'



function AddFoodForm(props){
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState("");
    const [servings, setServings] = useState(0);
    function handleName(e){
        setName(e.target.value)
    }
    function handleCalories(e){
        setCalories(Number(e.target.value))
    }
    function handleImage(e){
        setImage(e.target.value)
    }
    function handleServings(e){
        setServings(Number(e.target.value))
    }
    function handleSubmit(e){
        e.preventDefault();
        const newFood={
            name,calories,image,servings
        };
        props.addFoodFunction(newFood)
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }
    function hideAndShow(){
        display==='block'?setDisplay('none'):setDisplay('block')

    }
    const [display, setDisplay] = useState('block');
    return(
        <div className='divFood'>
            <form className='addFoodForm' onSubmit={handleSubmit} style={{display:display}}>
                <h2>Add Food Entry</h2>
                <label>Name</label>
                <Input value={name} type="text" onChange={handleName} />
                <label>Image</label>
                <Input value={image} type="text" onChange={handleImage}/>
                <label>Calories</label>
                <Input value={calories} type="number" onChange={handleCalories}/>
                <label>Servings</label>
                <Input value={servings} type="number" onChange={handleServings}/>
                <button type='submit'>
                    Create
                </button>
            </form>
            <ButtonHide functionHiseandShow={hideAndShow}/>
        </div>
    )
}

export default AddFoodForm;