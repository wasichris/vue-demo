import toastr from 'toastr'
import 'toastr/toastr.scss'

// 其中 import 'toastr/toastr.scss' 
// 可透過 module resolve 至 node_modules 資料夾找尋對應模組
// 因此與自行透過相對路徑引用模組的作用相同
// import '../../node_modules/toastr/toastr.scss'

// [webpack.base.conf.js]
//  modules: [
//       resolve('src'),
//       resolve('node_modules')  // ****
//     ],


export default function () {

    // global toastr setting
    toastr.options.closeButton = true;
    toastr.options.timeOut = 3000;
    toastr.options.progressBar = true;

}