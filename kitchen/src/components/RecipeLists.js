import React,{useEffect,useState} from 'react'
// UseEffect
// The useEffect Hook allows you to perform side effects in your components. 
// Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.

// useState
// useState is React Hook that allows you to add state to a functional component. 
// It returns an array with two values: the current state and a function to update it. 
// The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

import {BsSearch} from 'react-icons/bs'
// BsSearch


import {fetchData} from "../service"
// The code import {fetch Data} from "../service" is importing the fetchData function from the service file. 
// This function can be used to fetch data from a server.

function RecipeLists(props) {
    const [searchedTearm, setSearchedTearm] = useState('')
    // The code const [searchTerm, setSearchTerm] = useState('') is a React Hook that is used to manage state. 
    // The useState Hook takes two arguments: the first is the initial state value, and the second is a function that is used to update the state value. 
    // In this case, the initial state value is an empty string, and the update function is a function that takes a new string value as an argument. 
    // The useState Hook returns two values: the first is the current state value, and the second is a function that is used to update the state value. 
    // In this case, the current state value is the value of the searchTerm variable, and the function that is used to update the state value is the setSearchTerm function.

    const [query,setQuery] = useState('pasta')
    const [data,setData] = useState('');

    // The const keyword in JavaScript is used to declare a constant variable, which means that its value cannot be changed.

   const searchrecipe = (searchQuery) => {
    fetchData(searchQuery).then((response)=> {
        setData(response)
        props.setLoader(false)
    })
   }
//    Props (short for "properties") are a way to pass data from a parent component to a child component in React. 
//    Props are passed as an object, and the child component can access the data by using the this.props property.

    useEffect(()=>{
        fetchData(query).then((response)=> {
            setData(response)
            props.setLoader(false)
        })
    },[])
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input 
                    onChange={(e)=> setSearchedTearm(e.target.value)} 
                    value={searchedTearm} 
                    type="text" 
                    placeholder='Search you recipe' />
                <button onClick={()=> (searchrecipe(searchedTearm),props.setLoader(true))}><BsSearch /></button>
                {/* Inside the button, there is an onClick attribute that defines a function to be executed when the button is clicked. */}
            </div> 
        </div>
        <div className='flexbox'>
            {
                // The `data && data.hits.map((item,index)=> ( ` code is a JavaScript function that iterates over the hits array and returns a new array of objects. 
                // The item variable represents the current object in the array, and the index variable represents the index of the current object in the array. 
                // The function returns a new array of objects with the id, name, and description properties of the original objects.
                data && data.hits.map((item,index)=> (
                     <div key={index} className='flexItem'>
                    <a href={item.recipe.url}>    <div className='img-wrapper'>
                            <img src={item.recipe.image} alt={item.recipe.label} />
                           
                        </div> </a>
                            
                        <p>{item.recipe.label}</p>
                        <label class="ingredients" >Ingredients:</label>
                        <select name="ingredients">
                        
                            {item.recipe.ingredientLines.map((list,index)=> 
                                
                                (<option key={index}>&nbsp;
                                <span>{list}</span></option>)
                            )}
                            
                            
                        </select>
                        

                       
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default RecipeLists