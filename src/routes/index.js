const express = require("express")
const router = express.Router()

const pool = require("../database")



router.get("/",(req,res)=>{
    res.render("index")
})


router.get("/add",(req,res)=>{
    res.render("links/add")
})

router.post("/add", async (req,res)=>{
    const { titulo, description} = req.body
    const newFoto = {
        titulo,
        description,
	    //user_id: req.user.id
    }
    await pool.query("INSERT INTO pelis set ?", [newFoto])
    res.redirect("/list")
})

router.get("/list",(req,res)=>{
    
})

module.exports = router