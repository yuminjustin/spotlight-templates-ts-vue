/* polyfill IE */
import '@babel/polyfill'
/* vonder*/
import Vue from 'vue';
import App from 'C/app';
/* styles*/
import "B/assets/css/reset.css"
import "B/assets/css/page.css"

Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: `<App/>`,
    components: { App }
})



/* webpack hot reload */
if (module.hot) {
    module.hot.accept();
}
