const { verifyAdmin } = require('../verify');
const { authcompany } = require('../controller-admin/user/authCompany');
const { showCompany } = require('../controller-admin/user/showCompanyDetail');
const { showCompanyAuth } = require('../controller-admin/user/showCompanyAuth');
const { showCompanyUnAuth } = require('../controller-admin/user/showCompanyUnAuth');

const user = require('express')()


user.get('/show', verifyAdmin, showCompany)
user.get('/companyauth', verifyAdmin, showCompanyAuth)
user.get('/companyunauth', verifyAdmin, showCompanyUnAuth)
user.put('/auth', verifyAdmin, authcompany)
user.get('/showdetail/:companyId', verifyAdmin, showCompany)

module.exports = {
    user
};

