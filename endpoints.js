module.exports = function (app) {
	
    app.get('/users/:id', (req, res) => {
	    
	    const id = req.params.id

        return res.status(200).send("Deu certo! Usuário: " + id)

    })

}