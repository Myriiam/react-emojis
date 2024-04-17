import React from 'react'
import emojis from '../assets/emojis.json'
import DisplayList from './DisplayList.jsx'

const List = ({search}) => {

    return (
       <div>
            <h3>Click on an emoji below to copy it in the clipboard</h3>
            <div className="emojis-container-1">
                    {emojis.datas.map((data, index) => (
                        data.keywords.includes(search) ? 
                       <DisplayList data={data} key={index}/>
                        : null
                    ))} 
            </div>
        </div>
    );
};

export default List