<template>
<div class="Wrap">
  <div class="DetailInner">
    <div class="detail_titlewrap">
      <div class="maintitle">
          <p>{{portfolio[$route.params.id].title}}</p>
      </div>
      <div class="subtitle">
          <div class="subtitle_content"> 
            <p>기간</p>
            <p>{{portfolio[$route.params.id].date}}</p>
          </div>
          <div class="subtitle_content"> 
            <p>사용 기술</p>
            <p>{{portfolio[$route.params.id].stack}}</p>
          </div>
      </div>
    </div>

    <!-- 프로젝트 소개(개요) -->
    <div class="detail_summarywrap">
      <div class="detail_img">
           <img :src= "portfolio[0].img">
      </div>
      <div class="detail_summary">
        <p>{{portfolio[$route.params.id].summary}}</p>
      </div>
    </div>

    <!-- 프로젝트 소개(내용) -->
    <div class="detail_contentwrap cFix">
      <div class="detail_cimg_1">
        <img :src= "portfolio[1].img">
      </div>
      <div class="detail_content">
        <p>작업포인트</p>
        <p>{{portfolio[$route.params.id].content}}</p>
      </div>
      <div class="detail_cimg_2">
        <img :src= "portfolio[1].img">
      </div>
    </div>
    
    <!-- 목록으로 -->
    <div class="back">
      <router-link to="/pf"> - 목록으로</router-link>
    </div>
  </div>

</div>
</template>

<script>
import resize from '../assets/resize.js';

export default {
    name:'pfDetail',
    props:{
      portfolio : Array,
    },
      created(){
        resize;
      },
      updated() {
          resize;
      }
}
</script>

<style>

</style>