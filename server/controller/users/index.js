import Users from "../../../database/models/user/index.js"

export function newUser(req, res){
    console.log(req.body)
    Users.create(req.body).then(user => {
        console.log(user)
        return res.send(user)
    }).catch(error => {
        console.log(error)
        return res.send(error.message)
    })
}

export function findOne(req, res) {
    Users.findById(req.params.id).then(result => {
        if(result === null){
            return res.send({
                statusCode: 401,
                message: "User not found"
            })
        }
        return res.send({
            statusCode: 200,
            result: result
        })
    }).catch(error => {
        console.log(error)
        return res.send({
            statusCode: 500,
            error: error.message,
            message: "Internal Server Error"
        })
    })
}
export function findOneByMobile(req, res) {
    Users.findOne({mobile: req.params.mobile}).then(result => {
        if(result === null){
            return res.send({
                statusCode: 401,
                message: "User not found"
            })
        }
        return res.send({
            statusCode: 200,
            result: result
        })
    }).catch(error => {
        console.log(error)
        return res.send({
            statusCode: 500,
            error: error.message,
            message: "Internal Server Error"
        })
    })
}
export function updateUser(req, res) {
    Users.findByIdAndUpdate(req.body.id, { name: req.body.address}, {new: true}).then(result => {
        if(result === null){
            return res.send({
                statusCode: 401,
                message: "User not found"
            })
        }
        return res.send({
            statusCode: 200,
            result: result
        })
    }).catch(error => {
        console.log(error)
        return res.send({
            statusCode: 500,
            error: error.message,
            message: "Internal Server Error"
        })
    })
}