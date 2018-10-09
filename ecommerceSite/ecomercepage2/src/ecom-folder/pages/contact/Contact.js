import React from 'react';

const Contact = () => {

    return(
        <div className="form_container">
             <h1 className="form_Name">Contact Us</h1>
             <form>

                 <div className="firstName_Label">
                    <label for="firstName">First Name: </label>
                    <input type="text" id="firstname" name="firstname" placeholder="Your first name.."/>
                 </div>

                <div className="lastName_Label">
                    <label for="lastName">Last Name: </label>
                    <input type="text" id="lastname" name="lastname" placeholder="Your last name.."/> 
                </div>

                <div className="dropDown">
                    <label for="jewelryProduct">Product: </label> 
                    <select id="jewelry" name="jewelryType">
                        <option value="ring">Ring</option>
                        <option value="necklace">Necklace</option>
                        <option value="bracelet">Bracelet</option>
                    </select>
                </div>
                
                <textarea name="message" rows="10" cols="50">Put order information here </textarea>
               
                <input className="submit" type="submit" value="Submit"/>

                <footer>
                </footer>
            </form>
        </div>
    )
}
export default Contact;