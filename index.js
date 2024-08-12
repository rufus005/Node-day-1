// const express = require("express");

// const app = express();

// const port  = 4000;

// app.listen(port);

// app.listen(port, ()=> {
//     console.log(`server is running on: ${port}`);
    
// });

let data = [{
    Name : "Rufus",
    Age : "24",
    Email: "rufus090400@gmail.com",
    DOB:"09/04/2000"
}
]


const express = require("express");

const app = express();

app.get("/userdata", (req,res) => {
    res.json(data)
})

const port = 4000;

// Start the server and log the port it's running on
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
