import React from 'react';
const AdminCard=(props)=>{

    var img ;


    if(props.info.productImages){ 
        img = <img src={props.info.productImages[0].url}/>
    }
    
    return(
        <div>
            <h2>{props.info.productName}</h2>
            <p>{props.info.productPrice}</p>
            <p>{props.info.productDescription}</p>
            {img}
            {/* <p>{}</p>
            <p>{}</p> */}

        </div>
    );
}
export default AdminCard;
