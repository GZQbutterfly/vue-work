import Vue from 'vue'
import App from './App.vue'


// ((win, doc) => {
//   var winWidth = win.innerWidth;
//   var $htmlFontSize = 100 * winWidth / 375;
//   doc.documentElement.style.fontSize = $htmlFontSize + 'px';
// })(window, document);


new Vue({
  el: '#app',
  render: h => h(App)
});
