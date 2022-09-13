<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-9 order-1">
        <div class="row mb-5">
          <div
            class="col-lg-6 col-md-6 item-entry mb-4"
            v-for="(item, index) in cart"
            :key="item.id + index"
          >
            <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="item.image"
                    style="height: 150px"
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="float-right">
                      <a @click="removeToCart(index)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                          />
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          /></svg
                      ></a>
                    </div>
                    <h5 class="item-title">
                      <a href="#">{{ item.title }}</a>
                    </h5>
                    <strong class="item-price">{{ item.category }}</strong
                    ><br />
                    <strong class="item-price">{{ item.price }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 order-2 mb-5 mb-md-0">
        <div class="border p-4 rounded mb-4">
          <h3 class="mb-3 h6 text-uppercase text-black d-block">Resum Cart</h3>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a class="d-flex"
                ><span>Subtotal</span>
                <span class="text-black ml-auto">{{ subTotal }}</span></a
              >
            </li>
            <li class="mb-1">
              <a class="d-flex"
                ><span>VAT</span>
                <span class="text-black ml-auto">2,550</span></a
              >
            </li>
            <li class="mb-1">
              <a class="d-flex"
                ><span>Total</span>
                <span class="text-black ml-auto">{{ subTotal }}</span></a
              >
            </li>
            <br />

            <li class="mb-1">
              <a class="d-flex"
                ><span>Coupon</span> <input type="text" class="form-control"
              /></a>
            </li>
            <br />

            <li class="mb-1">
              <input
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                value="Check-out"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      subTotal: 0,
      total: 0,
    };
  },
  methods: {
    removeToCart: function (product) {
      this.$store.state.cart.splice(product, 1);
      this.getProductsSubTotal()
    },

    getProductsSubTotal: function () {
      this.subTotal =  this.$store.state.cart.reduce((sum, equity) => {
        return sum + equity.price;
      }, 0);
      
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  created() {
    this.getProductsSubTotal();
  },
};
</script>
