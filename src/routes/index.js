const express = require("express")
const router = require("router")

router.get("/",(req,res)=>{
    res.send("hola")
})


module.exports = router