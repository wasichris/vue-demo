import router from '../router'
import constantService from 'services/constantService'
import nprogress from 'nprogress'

export default function() {

    $(document).ajaxStart(function() {
        nprogress.start();
    });

    $(document).ajaxStop(function() {
        nprogress.done();
    });


    $(document).ajaxSend(function(event, jqxhr, settings) {

        // add access token in header here

        // direct use token from localstorage without vuex
        var currentToken = localStorage.getItem(constantService.localStorage.tokenKey)
        if (currentToken) {
            jqxhr.setRequestHeader('Authorization', 'Bearer ' + currentToken)
        }

        // or use vuex will be like
        // let isLogin = store.state.auth;
        // if (isLogin) {
        //  jqxhr.setRequestHeader('Authorization', 'Bearer ' + store.state.token);
        // }


    })

    $(document).ajaxComplete(function(event, xhr, settings) {

        // 統一處理成功 ajax 狀態 (ex. 顯示訊息)

        switch (xhr.status) {
            case 200:
                if (xhr.responseJSON.message) {
                    toastr.info(xhr.responseJSON.message)
                }
                break;
        }

    })

    $(document).ajaxError(function(event, jqxhr, settings, thrownError) {

        // 統一處理錯誤 ajax 狀態 (ex. 401 導向登入頁)

        switch (jqxhr.status) {
            case 400:
                // bad request, directly show api return message (from server side)
                toastr.error(jqxhr.responseJSON.message)
                break;
            case 401:
                // unauthorized access, redirect to login page
                toastr.error('無權限訪問此頁，請重新登入系統')
                localStorage.removeItem(constantService.localStorage.tokenKey)
                router.push('/login')
                break;
            default:
                // common error message
                toastr.error('Please contact you system admin.', 'Ajax Error')
                break;
        }
    })


    // 透過此方法在發送ajax前overwrite目前這個request的錯誤處理方式
    // 可以在錯誤處理方式中，獲得原本這個造成錯誤的request完整資訊，進而執行重送流程
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {

        // overwrite error handler for current request
        options.error = function(_jqXHR, _textStatus, _errorThrown) {

            // // example for vuex with token (JWT renew)
            // if (_jqXHR.status === 401) {
            //     
            //     if (originalOptions._retry) {
            //         // already retry once, so redirect to login page
            //         router.push('/login');
            //     } else {
            //         // 要先判斷到底有沒有token存在localstorage中在進行下列行為喔
            //         // ....
            //    
            //         // set flag to avoid retry dead loop
            //         originalOptions._retry = true
            //         // renew token
            //         $.post('/users/token', null).then((data) => {
            //             // update token
            //             store.dispatch('authfalse')
            //             store.dispatch('authtruth', data.data)
            //             // add access token in header
            //             originalOptions.setRequestHeader('Authorization', 'Bearer ' + store.state.token); 
            //             // do request again
            //             $.ajax(originalOptions)
            //         })

            //     }
            // }

        }
    })

}