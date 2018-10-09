let mongoose = require("mongoose");


// //makes it default to using promises instead of callBack functions
// mongoose.Promise =global.Promise;
// // establishes a connection to database
// mongoose.connect(
//     `mongodb://localhost:27017/birthstones`,
//     {useNewUrlParser:true}
// );


let jewelry = mongoose.model("jewelry",{
    productId:{
        type:Number
    },
    productName:{
        type:String
    },
    month:{
        type:String
    },
    productDescription:{
        type:String
    },
    productPrice:{
        type:String
    },
    productType:{
        type:String 
    },
    stoneType:{type:String 
    },
    url:{
        type:String
    },
});

module.exports = { jewelry }

