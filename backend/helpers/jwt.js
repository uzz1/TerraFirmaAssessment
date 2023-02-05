const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.JWT_SECRET
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            
            {url: /employees(.*)/,methods: ['GET', 'OPTIONS', 'POST']},
            {url: /users(.*)/,methods: ['GET', 'OPTIONS', 'POST']},
            
            "/users/login",
            "/users/register",
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}



module.exports = authJwt