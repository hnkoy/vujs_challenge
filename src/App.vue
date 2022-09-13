<template>
  <div id="app">

 <div class="site-wrap">
    

    <div class="site-navbar bg-white py-2">


      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo">
            <div class="site-logo">
              <a href="#" class="js-logo-clone">My Store</a>
            </div>
          </div>
          <div class="main-nav d-none d-lg-block">
            <nav class="site-navigation text-right text-md-center" role="navigation">
              <ul class="site-menu js-clone-nav d-none d-lg-block">
               
                
                <li><a><router-link to="/About">About</router-link></a></li>
                  <li><a><router-link to="/Product">Product</router-link></a></li>
                    <li><a><router-link to="/Contact">Contact</router-link></a></li>
                
              </ul>
            </nav>
          </div>
          <div class="icons">
           
            <a  class="icons-btn d-inline-block bag">
              <router-link to="/Cart">
              <span class="icon-shopping-bag"></span>
              <span class="number">{{cart.length}}</span>
              </router-link>
            </a>
            <a class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span class="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>


    
    <div class="site-section">
      <router-view/>
    </div>

   


    

    <footer class="site-footer custom-border-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
         
            <a href="#" class="block-6">
             
              <p>My Store</p>
            </a>
          </div>
          <div class="col-lg-5 ml-auto mb-5 mb-lg-0">
            
          </div>
          
          <div class="col-md-6 col-lg-3">
            <div class="col-md-12">
              <p>
            
              Copyright OctoBytes 2020
              </p>
            </div>

           
          </div>
        </div>
       
      </div>
    </footer>
  </div>


  </div>
</template>

<script>
export default {
 computed:{
      cart(){
        return this.$store.state.cart;
      }
    },
  
};
</script>


