require('express')()

.get("/", (req, res) => {
    return res.send("Hello from NLW-2")
})

.get("/study", (req, res) => {
    return res.send("Página Study")
})

.listen(5500)