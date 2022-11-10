import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import {useState} from 'react'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'




function App() {
  function search(str){
    let newFoods=[]
    if (str===''){
      newFoods=[...foods]
    }else{
      newFoods=[...foods].filter((obj)=>obj.name.toLowerCase().includes(str.toLowerCase()))
    }
    const newArrayList=[]
    for (let food of newFoods){
      newArrayList.push(
        <FoodBox key={newFoods.indexOf(food)} delFunction={del} food={ {
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings
              }} />)
    setFoodList(newArrayList);
    }
  }
  
  function addFood(newFood){
    foods=[newFood,...foods]
    const newArrayList=[]
    for (let food of foods){
      newArrayList.push(
        <FoodBox key={foods.indexOf(food)} delFunction={del} food={ {
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings
              }} />)
    setFoodList(newArrayList);
  }
  }
  
  function del(nome){
    foods=[...foods].filter((obj)=>!obj.name.toLowerCase().includes(nome.toLowerCase()))
    const newArrayList=[]
    if (foods.length===0){

      newArrayList.push(<div>
          <h3>
            Oops! There is no more contents to show.
          </h3>
          <div className='divZero'>
            &empty;
          </div>
        </div>)
    }else{

      for (let food of foods){
        newArrayList.push(
          <FoodBox key={foods.indexOf(food)} delFunction={del} food={ {
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings
                }} />)
              }
            }
    setFoodList(newArrayList);
  }

  const arrayList=[]
  for (let food of foods){
    arrayList.push(
      <FoodBox key={foods.indexOf(food)} delFunction={del} food={ {
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings
            }} />
    )
  }
  const [foodList,setFoodList]=useState(arrayList)
  

  return (
    <div className="App">
      <AddFoodForm addFoodFunction={addFood}/>
      
      <Search searchFunction={search}/>
      <h2>Food List</h2>
      <div className='arrayFood'>
        {foodList}
      </div>
      
    </div>
  );
}

export default App;
