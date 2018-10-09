import React, {Component} from 'react';

class Products extends Component {


    render() {
       
    
            
        return (
            <section>
                
                    <h2 class="filter_header">Filter Products:</h2>
                    <div>
                        <h3 class="filter_type">Type</h3>
                        <button onClick={() => this.props.filterHandler("Ring")}>Rings</button>
                        <button onClick={() => this.props.filterHandler("Necklace")}>Necklace</button>
                        <button onClick={() => this.props.filterHandler("Earing")}>Earing</button>
                        
                        <h3 class="filter_month">Month</h3>
                        <button onClick={() => this.props.filterHandler("January")}>January</button>
                        <button onClick={() => this.props.filterHandler("February")}>February</button>
                        <button onClick={() => this.props.filterHandler("March")}>March</button>
                        <button onClick={() => this.props.filterHandler("April")}>April</button>
                        <button onClick={() => this.props.filterHandler("May")}>May</button>
                        <button onClick={() => this.props.filterHandler("June")}>June</button>
                        <button onClick={() => this.props.filterHandler("July")}>July</button>
                        <button onClick={() => this.props.filterHandler("August")}>August</button>
                        <button onClick={() => this.props.filterHandler("September")}>September</button>
                        <button onClick={() => this.props.filterHandler("October")}>October</button>
                    
                        <h3>Price</h3>
                
                        <button onClick={() => this.props.filterHandler("Reset")}>Reset</button>

                    </div>
                <div className="allProducts">
                    {this.props.arrayOfProducts}
                </div>
            </section>
                
        );
    }  
}



export default Products;