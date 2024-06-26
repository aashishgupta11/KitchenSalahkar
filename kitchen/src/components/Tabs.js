import React,{useState,useEffect} from 'react'
import {CiPizza} from 'react-icons/ci'

import {GiNoodles,GiFruitBowl,GiCheckMark} from 'react-icons/gi'
// The code you provided is an import statement in a React application that's using the react-icons library to import icons from the "Gi" (Game Icons) set. 
// This library allows you to easily include popular icons in your React projects. Here's what the code does:
// import {GiNoodles, GiFruitBowl, GiCheckMark} from 'react-icons/gi': This line imports specific icons (GiNoodles, GiFruitBowl, and GiCheckMark) 
// from the "Gi" set provided by the react-icons library.
import {MdOutlineIcecream} from 'react-icons/md'
// The code import {MdOutlineIcecream} from 'react-icons/md' 
// imports the MdOutlineIcecream icon from the react-icons/md package. This icon can then be used in a React component.

import {fetchTabData} from '../service'
// The import {fetchTabData} from '../service' statement is used to import the fetchTabData function from the service module. 
// This function will be used to fetch data from a tab in a React application.
// The fetchTabData function takes two arguments: the tab ID and the callback function. 
// The tab ID is the ID of the tab that you want to fetch data from. The callback function is a function that will be called with the data 
// that is fetched from the tab.

function Tabs(props) {
    const [active,setActive] = useState('Pizza')
    const [tabData,setTabData] = useState('')
    const [tabLabel,setTabLabel] = useState([
        {
            name: 'Pizza',
            icon:<CiPizza />,
            id: '0209cb28fc05320434e2916988f47b71'
        },
        {
            name: 'Noodles',
            icon:<GiNoodles />,
            id: 'a243e3cd56da95b31e5a86ef52578908'
        },
        {
            name: 'Desert',
            icon:<GiFruitBowl />,
            id: 'bc865476ffe2b8a03fbe9aee2f739740'
        },
        {
            name: 'Ice cream',
            icon:<MdOutlineIcecream />,
            id: '7c5a5ced83523b4dc49adbc78471cc38'
        },
    ])

    const handleClick = (name,id) => {
        setActive(name)
        fetchTabData(id).then((response)=> {
            setTabData(response);
            props.setLoader(false)
        })
    }

    useEffect(()=> {
        fetchTabData(tabLabel[0].id).then((response)=> {
            setTabData(response);
            props.setLoader(false)
        })
    },[])

  return (
    <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
            {tabLabel.map((item,index)=> (
                <div onClick={()=> (handleClick(item.name,item.id),props.setLoader(true))} key={index} className={`tablist ${active === item.name ? 'active':""}`}>
                    {/* This structure ensures that the handleClick and props.setLoader functions are 
                    called when the element is clicked and also maintains the unique key for the element in the list. */}
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className='recipe_banner'>
            {tabData !== '' && tabData.recipe &&  <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe?.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list,index)=> 
                                (<li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)
                            )}
                            
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Tabs