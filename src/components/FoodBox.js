import './FoodBox.css'

function FoodBox(props){
    const {name,calories,image,servings}=props.food
    
    function clickDel(e){
        props.delFunction(e.target.parentElement.children[0].innerHTML)
        

    }
    return(
        <div className='foodBox'>
            <h2>{name}</h2>
            <img src={image} width={100}/>
            <p>Calories: {calories}</p>
            <p>Servings: <b>{servings}</b></p>
            <h3>Total Calories: {calories} kcal</h3>
            <button onClick={clickDel}>Delete</button>
        </div>
    )
}
export default FoodBox;