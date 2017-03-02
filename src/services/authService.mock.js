// the same as => 
// var mockjax = require('jquery-mockjax')($, window); 
import jqueryMockjax from 'jquery-mockjax'
let mockjax = jqueryMockjax($, window);


export default function(baseUrl) {

    // mockjax 有先後順序的

    mockjax({
        url: `${baseUrl}/auth/login`,
        responseTime: 10,
        data: {
            'employeeId': 'chris',
            'password': '123'
        },
        responseText: {
            'result': true,
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJQVQiOjE0ODg0NDQyNDYsIkVYUCI6MTQ4ODUzMDY0NiwiRW1wbG95ZWVJZCI6ImNocmlzIiwiRW1wbG95ZWVOYW1lIjoiQ2hyaXMgQ2hlbiJ9.EQ-Zwa70Tkg9NuheG-Yy0X_w7HEmaLSDqkVuB9AkiEw',
            'payload': {
                'iat': 1488444246,
                'exp': 1488530646,
                'employeeId': 'chris',
                'employeeName': 'Chris Chen'
            }
        }
    });

    mockjax({
        url: `${baseUrl}/auth/login`,
        responseTime: 10,
        status: 400,
        responseText: {
            'message': '帳號密碼錯誤'
        }
    });

    mockjax({
        url: `${baseUrl}/auth/isTokenAlive`,
        responseTime: 1,
        status: 200,
        responseText: {
            'result': true,
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJQVQiOjE0ODg0NDQyNDYsIkVYUCI6MTQ4ODUzMDY0NiwiRW1wbG95ZWVJZCI6ImNocmlzIiwiRW1wbG95ZWVOYW1lIjoiQ2hyaXMgQ2hlbiJ9.EQ-Zwa70Tkg9NuheG-Yy0X_w7HEmaLSDqkVuB9AkiEw',
            'payload': {
                'iat': 1488444246,
                'exp': 1488530646,
                'employeeId': 'chris',
                'employeeName': 'Chris Chen'
            }
        }
    });
}