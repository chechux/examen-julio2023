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
    const newPeli = {
        titulo,
        description,
	    //user_id: req.user.id
    }
    await pool.query("INSERT INTO pelis set ?", [newPeli])
    res.redirect("/list")
})

router.get("/list", async (req,res)=>{
    const pelis = await pool.query("SELECT * FROM pelis") //WHERE user_id = ?", [req.user.id])
    res.render("links/list", {pelis})
})

router.get("/edit/:id", async (req,res) =>{
    const {id} = req.params
    const pelis = await pool.query("SELECT * FROM pelis WHERE id = ?", [id])
    res.render("links/edit",{peli: pelis[0]} )

})

router.post("/edit/:id", async (req,res)=>{
    const {id} = req.params
    const { titulo, description} = req.body
    const newPeli = {
        titulo,
        description
    }
    await pool.query("UPDATE pelis set ? WHERE id = ?" , [newPeli, id])
    res.redirect("/list")

})

router.get("/delete/:id", async (req,res) =>{
    const {id} = req.params
    await pool.query("DELETE FROM pelis WHERE id = ?", [id] )
    res.redirect("/list")
})

module.exports = router