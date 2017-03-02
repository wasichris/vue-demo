import constantService from './constantService'
import authServiceMock from './authService.mock'


var baseUrl = `http://${constantService.hostName}`;

// apply api mocking
authServiceMock(baseUrl);

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
