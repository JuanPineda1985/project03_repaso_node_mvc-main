const { check } = require('express-validator')
const { validateResult } = require('../helpers/validatehelper')

const validateCreate = [
    check('user')
    .exist()
    .not()
    .isEmpty(),
    check('email')
    .exist()
    .isEmpty()
    .isEmail(),
    check('password')
    .exist()
    .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }