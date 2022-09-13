<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-3 col-md-5 item-entry mb-4"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card" style="width: 18rem">
          <a href="#" class="product-item md-height bg-gray d-block">
            <img :src="product.image" alt="Image" class="img-fluid" />
          </a>
          <div class="card-body">
            <div class="float-right">
              <a @click="addToCart(product)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"
                  />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </a>
            </div>
            <h5 class="item-title">
              <a href="#">{{ product.title }}</a>
            </h5>
            <strong class="item-price">{{ product.category }}</strong
            ><br />
            <strong class="item-price">{{ product.price }}</strong>
          </div>
        </div>
      </div>

      <div id="app"></div>
    </div>
  </div>
</template>

<script>

export default {
  
  

  methods: {
    //get all products
    getProducts: function () {
    this.$store.commit('GET_PRODUCT');
    },
    addToCart: function (data) {
     this.$store.commit('ADD_TO_CART',{data});
     
    }, 
    
  },
  computed:{
      products(){
        return this.$store.state.products;
      }
    },
  created() {
    this.getProducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
