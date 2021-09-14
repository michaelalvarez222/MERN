const express = require("express")
const app = express()
const port = 8000
var faker = require('faker')

class User{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstname = faker.name.firstName()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.company = faker.company.companyName()
    }
}

app.get("/api/user/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})

app.get("/api/companies/new", (req,res) => {
    let newCompany = new Company()
    res.json({data: newCompany})
})

app.get("/api/user/company", (req,res) =>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({data: newUser, newCompany})
    
})



app.listen(port, () => console.log(`Listening on port: ${port}`))