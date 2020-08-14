require('express')()
.get("/", (req, res) => {
    return res.send("Hi from NLW-2")
})
.listen(5500)