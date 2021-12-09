<template>

  <!-- 메뉴바 -->
  <Menubar/>

  <!-- header -->
  <Header/>

  <!-- Home, Portfolio, blog -->
  <router-view :portfolio="portfolio" :companypj="companypj" :slideimg="slideimg"></router-view>

  <!-- footer -->
  <Footer/>

</template>

<script>
import portfolio from './assets/detaildata.js';
import companypj from './assets/companypj_data.js';
import slideimg from './assets/slideimg.js';
import Header from './components/Header.vue';
import Menubar from './components/Menubar.vue';
import Footer from './components/Footer.vue';
import resize from './assets/resize.js';

export default {
  name: 'App',
  data() {
        return {
            portfolio : portfolio,
            companypj : companypj,
            slideimg : slideimg,
            menubaropen : false,
        }
  },
  components: {
    Header : Header,
    Menubar : Menubar,
    Footer : Footer,
  }, 
  mounted() {
    resize;
  },
}
</script>

<style>
  #app{
    margin-top: 122px;
    position: relative;
  }


</style>
