const express = require('express')
const app = express()

let s =`
<h1>Home</h1>
</br>
<h1>Page</h1>
`;
let sathwik =`
<h1>Here You Got the Right Page</h1>

<h1>Page</h1>
`;
// shavdhjsvdhjvjhsavdjvsvdjvajdvhjavdhjvadhvasjhvjahsdvhjavdhasvhjavhdvahvdhjavjhdva
app.get('/',(req,res)=>{
    res.status(200).send(s);
})
app.get('/sathwik',(req,res)=>{
    res.status(200).send(sathwik);
})
app.listen(process.env.PORT || 3000)
