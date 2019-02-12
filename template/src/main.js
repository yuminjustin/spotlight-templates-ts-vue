/* polyfill IE */
import '@babel/polyfill'
/* vonder*/
import Vue from 'vue'
import Hello from 'C/hello'
import Hello2 from 'C/hello2'
/* styles*/
import "B/assets/css/reset.css"

Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: `<div><Hello/><Hello2 :name="name" :initialEnthusiasm="5" /></div>`,
    data: { name: "World" },
    components: {
        Hello,
        Hello2
    }
})



/* webpack hot reload */
if (module.hot) {
    module.hot.accept();
}
