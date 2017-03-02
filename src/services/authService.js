import constantService from './constantService'

var baseUrl = `http://${constantService.hostName}`;

export default {

    login: function(loginUser) {
        return $.post(`${baseUrl}/auth/login`, loginUser);
    },
    logout: function() {
        return $.get(`${baseUrl}/auth/logout`);
    },
    isTokenAlive: function() {
        return $.get(`${baseUrl}/auth/isTokenAlive`);
    }

}