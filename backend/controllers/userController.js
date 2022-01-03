const {numberOfEmployees} = require('../queries/queries')

exports.login = async(req, res) => {
    try {
    const totalEmployees = await numberOfEmployees()
    res.send(req.user)
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
}