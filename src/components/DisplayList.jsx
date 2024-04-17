import React from 'react'
import clipboard from 'clipboardy';


const DisplayList = ({data, index}) => {
    const copyToClipboard = (element) => {
        try {
            clipboard.write(element);
            alert(`The emoji ${element} has been copied !`)
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div key={index+data.symbol} className="emojis-container-2" value={data.symbol} onClick={e => { copyToClipboard(data.symbol) }}>
            <div className="box">
                <p>{data.title}</p> 
                <p>{data.symbol}</p>
            </div>
        </div>
    );
};

export default DisplayList