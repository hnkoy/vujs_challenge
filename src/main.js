import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Product from "./components/Product.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import Cart from "./components/Cart.vue";
import Vuex from "vuex"
import axios from "axios";


Vue.use(Vuex)


Vue.config.productionTip = false;

Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    
  },
  mutations: {
    GET_PRODUCT(state) {
      axios.get("https://fakestoreapi.com/products").then(
          function (response) {
              state.products = response.data;
              //console.log(response.data);
          }.bind(this)
      );

  },
  ADD_TO_CART(state,{data}) {
      state.cart.push(data);
      console.log(data);

  }
  }
})

const routes = [
  { path: "/About", name: 'About', component: About },
  { path: "/", name: 'Home', component: Home },
  { path: "/Product", name: 'Product', component: Product },
  { path: "/Contact", name: 'Contact', component: Contact },
  { path: "/Cart", name: 'Cart', component: Cart }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
