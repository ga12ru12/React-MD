var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var crypto = require('crypto');

var _user = {};

function setUser(user, cb){
    if(user.password){
        user.password = crypto.createHash('md5').update(user.password).digest('hex');
    }
    _user = _.assign({}, _user, user);
}

var UserStore = _.extend({}, EventEmitter.prototype, {
    getUserInfo: function(){
        return _user;
    }
});