const Account = require('../model/Account')
const {multipleDataMongoToObject} = require('../../util/handleDataMongo')

class AccountController{
    // [GET] /account/create
    create(req, res, next)
    {
        res.render('account/accountCreate')
    }

    showAll(req, res, next)
    {
        Account.find()
            .then(account =>  res.render('account/accountList', {account}))
            .catch(error => {

            })
    }

    save(req, res, next)
    {
        let account = new Account(req.body)
        account.save()
            .then(() => res.redirect('/account/showAll'))
            .catch(error => {

            })
    }
}

module.exports = new AccountController