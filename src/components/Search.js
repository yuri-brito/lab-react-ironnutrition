import {Input} from 'antd'
import {useState} from 'react'
import './Search.css'

function Search(props){

   
    function handleSearch(e){
        setState(e.target.value)
        props.searchFunction(e.target.value)
    }
    const[str,setState]=useState('')
    return(
        <div className='Search'>
            <form className='searchForm'>
                <label>Search</label>
                <Input value={str} type="text" onChange={handleSearch} />
            </form>

        </div>


    )
}
export default Search;