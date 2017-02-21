window.onload = function(){

  // var appHeader = {
  //   template: '\
  //   <div class="col-xs-12">\
  //       <header>\
  //         <h1>Blog Title</h1>\
  //       </header>\
  //     </div>\
  //   '
  // };

  // var appContent = {
  //   template: '\
  //   <div class="col-xs-8">\
  //     <p>\
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ornare massa, laoreet mattis purus. Aliquam est turpis, pharetra et ex eu, gravida egestas mi. Maecenas non elementum elit. Maecenas a lacus eros. Mauris sodales neque in leo consequat elementum. Nunc sodales consectetur felis, non scelerisque arcu varius sit amet. Pellentesque eu convallis nisl. Donec ac erat neque. Nunc egestas, justo et suscipit vestibulum, nulla sapien vestibulum mauris, at rhoncus ex arcu ut urna. Praesent rhoncus quam mi, vel posuere risus mollis sit amet.\
  //     </p>\
  //     <p>\
  //       Ut ultricies semper nisl eget cursus. Nunc ac dolor ultrices, mattis elit ut, congue eros. Vestibulum iaculis bibendum maximus. Integer aliquam quam at ultrices ornare. Morbi ipsum enim, molestie eu congue aliquam, rutrum ac eros. Duis at erat non velit mattis dapibus et sit amet arcu. Integer vel sem mi. Quisque eros ex, laoreet vel eleifend nec, congue in felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nunc, bibendum nec elit ut, ullamcorper ornare nisl. Duis porta viverra accumsan. Donec ac metus urna. Nullam massa ante, egestas ac neque id, porttitor pulvinar ligula. Donec arcu eros, rutrum condimentum rutrum quis, pharetra at dolor. Proin tempor fermentum ex. Curabitur facilisis nisi tellus, lacinia faucibus est laoreet quis.\
  //     </p>\
  //     <p>\
  //       Suspendisse potenti. Aenean ullamcorper sodales lacinia. Curabitur aliquet lectus in vehicula vehicula. Pellentesque at ultricies nisi. Donec vel feugiat massa, vel ornare ipsum. Donec eget metus lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ornare metus vulputate, sagittis ligula et, faucibus massa. Sed vestibulum, eros in feugiat mattis, erat nisl commodo tellus, interdum maximus elit tellus id dui.\
  //     </p>\
  //   </div>\
  //   '
  // };

  // var appSidebar = {
  //   template: '\
  //   <div class="col-xs-4">\
  //     <p>\
  //       Nulla non consequat odio, vitae rhoncus ligula. Vivamus ut venenatis lorem. Quisque vestibulum sit amet lorem et vulputate. Integer at enim ultrices, pretium ex sed, bibendum elit. Vivamus enim enim, aliquam vel turpis eu, euismod malesuada urna. Phasellus posuere tempus tellus vitae aliquet. Phasellus finibus tortor et sapien lacinia, sed faucibus nibh elementum. Fusce pretium erat nulla. Duis et ante consequat, finibus lectus in, fermentum risus. Morbi eu efficitur est.\
  //     </p>\
  //   </div>\
  //   '
  // };

  // var appFooter = {
  //   template: '\
  //   <div class="col-xs-12">\
  //     <p>\
  //       Vivamus vulputate ultricies arcu. Quisque eleifend erat nec sollicitudin rhoncus. Ut sed sem semper, porttitor neque nec, sagittis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis maximus tortor. Cras quis ante porttitor, elementum neque fringilla, aliquam arcu. Donec porttitor erat ligula. Ut sit amet suscipit libero. Curabitur et odio dignissim, luctus est ut, ultricies erat.\
  //     </p>\
  //   </div>\
  //   '
  // };

  // needs to convert ES6 to ES5, browserify gem doesnt work

  // var appHeader = {
  //   template: "#app-header-template"
  // };

  //import header from './header'
  //appHeader = header()

  //var appHeader = require('./a-package-name')
  

  new Vue({
    el: '#app',
    components: {
      'app-header': appHeader,
      'app-content': appContent,
      'app-sidebar': appSidebar,
      'app-footer': appFooter
    },
    data: {
      message: 'Hello World!'
    },
  });
}