import React from 'react';
const ProductCard=(props)=>{

    var img ;


    if(props.info.productImages){ 
        img = <img src={props.info.productImages[0].url}/>
    }
   
    return(
        <div  class="products_flex">
            <h2 class="product_name">{props.info.productName}</h2>
            <p  class="product_price">${props.info.productPrice}</p>
            <p  class="product_description">{props.info.productDescription}</p>
            <p class="product_img"> {img}</p>

        </div>
    );
}
export default ProductCard;
