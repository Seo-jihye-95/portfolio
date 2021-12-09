<template>
    <!-- <div class="Wrap">
        <div class="homeWrap">
            <p>
                <span>J</span>
                <span>I</span>
                <span>H</span>
                <span>Y</span>
                <span>E</span>
                <span>!</span>
            </p>
        </div>
    </div> -->

  <div class="Wrap">
    <div class="homeWrap">
      <div class="homeInner">
        <ul class="cFix">
          <li>
            <div class="inner_1">
              <div class="inner1_box_1">
                <div class="main_img">
                  <img :src="require(`@/assets/img/gatto.png`)" alt="">
                </div>
              </div>
              <div class="inner1_box_2">
                <div class="sd_img cFix">
                  <div>
                    <img :src="require(`@/assets/img/sd.png`)" alt="">
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="inner_2">
              <div class="inner2_box_1">
                <div><p>Bold & 
                Beautiful <br/>Creative Design</p></div>
              </div>
              <div class="inner2_box_2">
                <div class="box_img">
                  <div>
                    <img :src="require(`@/assets/img/box.png`)" alt="">
                  </div>
                  <div>
                    <ul>
                      <li>About</li>
                      <li>About</li>
                      <li>About</li>
                      <li>About</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- second wrap -->
      <div class="sd_wrap">
        <div class="sdInner">
          <div class="sd_content">
            <div class="sd_content_inner">
                <p class="p_main">BRANDING & WEB DESIGN</p>
                <p class="p_title notoD">The Design Studio</p>
                <p class="p_content">Branding & website design services for bold, unique businesses who want to stand out from a crowd to the right people.</p>
                <div>
                  <a class="button">More</a>
                </div>
            </div>
          </div>
          <div class="sd_content">
            <div class="sd_content_inner">
                <p class="p_main">BRANDING & WEB DESIGN</p>
                <p class="p_title notoD">The Design Studio</p>
                <p class="p_content">Branding & website design services for bold, unique businesses who want to stand out from a crowd to the right people.</p>
                <div>
                  <a class="button">More</a>
                </div>
            </div>
          </div>
          <div class="sd_content">
            <div class="sd_content_inner">
                <p class="p_main">BRANDING & WEB DESIGN</p>
                <p class="p_title notoD">The Design Studio</p>
                <p class="p_content">Branding & website design services for bold, unique businesses who want to stand out from a crowd to the right people.</p>
                <div>
                  <a class="button">More</a>
                </div>
            </div>
          </div>
        </div>
      </div>


<!-- 
  <div v-for="(onerooms,i) in 원룸들" :key="i">
    <img :src="onerooms.image" class="room_img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{onerooms.title}}</h4>
    <p>{{onerooms.price}} 원</p>
  </div> -->




      <!-- third wrap -->
      <div class="th_wrap">
        <carousel :items-to-show="1" :wrapAround=true >
          <slide v-for="(slide,i) in slideimg" :key="i">
            <div style="width:500px; height:300px;">
              <img :src="slide.img" style="width:100%;">
            </div>
          </slide>
          <template #addons="{ slidesCount }">
            <Navigation v-if="slidesCount > 1" />
          </template>
        </carousel>

      </div>



    </div>
  </div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  // import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import { Carousel, Slide, Navigation} from 'vue3-carousel';

  // import { Carousel, Slide } from 'vue-carousel';


export default {
    name : 'Home',
    components: {
      Carousel,
      Slide,
      // Pagination,
      Navigation,
  },
  props :{
    slideimg : Array,
  }
}
</script>

<style>



 /* .homeWrap  {
  width: 100%;  
  background: #FF7777;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-items: center;
} 

p {
  height: 100px;
  text-align: center;
  line-height: 100px;
}

p span {
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-family: 'Titan One', cursive;
  font-size: 80px;
  color: #FFF;
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(0, 0, 0, .4);
}

p span:nth-child(2) { animation-delay: .1s; }
p span:nth-child(3) { animation-delay: .2s; }
p span:nth-child(4) { animation-delay: .3s; }
p span:nth-child(5) { animation-delay: .4s; }
p span:nth-child(6) { animation-delay: .5s; }
p span:nth-child(7) { animation-delay: .6s; }
p span:nth-child(8) { animation-delay: .7s; }

@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
} */
</style>