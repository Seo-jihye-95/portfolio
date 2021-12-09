<template>
    <div class="Wrap" @common="common">
        <!-- 회사 프로젝트 -->
        <div class="companyWrap" id="perfectH_4">
            <div class="titleWrap">
                <p class="notoD">Company Project</p>
            </div>
            <div class="subtitleWrap">
                <p>구성원으로서 작은 성과를 냈던 프로젝트</p>
            </div>

            <!-- 프로젝트 상세페이지 -->
            <Modal @modalclose="modalopen=false" :modalopen = "modalopen" :clicknum="clicknum" :companypj="companypj"/>

            <div class="companyInner">
                <div class="pj" v-for="(a,i) in companypj" :key="i" >
                    <div class="pj_company"> <p>{{companypj[i].company}}</p></div>
                    <div class="pj_period">
                        <p class="pj_name" @click="modalopen = true; changeclicknum(i);">{{companypj[i].pjname}}</p>
                        <p> {{companypj[i].period}}</p>
                    </div>
                    <div class="pj_content">
                        <p> {{companypj[i].stack}}</p>
                        <p> {{companypj[i].pjcontent}}</p>
                    </div>
                </div>
            </div>

             <p style="font-size:30px; text-align:center; padding:30px 0;">More</p>
        </div>

        <!-- 개인 프로젝트 -->
        <div class="personalWrap" id="perfectH_5">
            <div class="titleWrap">
                <p class="notoD">Side Project</p>
            </div>
            <div class="subtitleWrap">
                <p>다양한 기술을 학습하거나 간단한 문제를 해결하기 위한 프로젝트</p>
            </div>
            <div class="personalInner">
                <div class="row">
                    <ul class="cFix">
                        <li>
                            <router-link :to="{name:'pfdetail' , params:{id : portfolio[0].id} }">
                                <div class="pj_1">
                                    <div>
                                        <img :src= "portfolio[1].img">
                                    </div>
                                    <div>
                                        <p class="pjtitle">고양이 게시판</p>
                                    </div>
                                </div>
                            </router-link> 
                        </li>
                        <li>
                            <router-link :to="{name:'pfdetail' , params:{id : portfolio[1].id} }">
                                <div class="pj_2">
                                    <div>
                                        <img :src= "portfolio[1].img">
                                    </div>
                                    <div>
                                        <p class="pjtitle">고양이 게시판</p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'pfdetail' , params:{id : portfolio[2].id} }">
                                <div class="pj_3">
                                    <div>
                                        <img :src= "portfolio[1].img">
                                    </div>
                                    <div>
                                        <p class="pjtitle">고양이 게시판</p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'pfdetail' , params:{id : portfolio[3].id} }">
                                <div class="pj_4">
                                    <div>
                                        <img :src= "portfolio[1].img">
                                    </div>
                                    <div>
                                        <p class="pjtitle">고양이 게시판</p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import resize from '../assets/resize.js';
import Modal from '../components/Modal.vue';

export default {
    name : 'portfolio',
    data() {
        return {
            modalopen : false,
            clicknum : 0,
        }
    },
    props:{
      portfolio : Array,
      companypj : Array,
    },
    components:{
        Modal : Modal,
    },
    methods: {
        changeclicknum(i){
            this.clicknum = i;
        }
    },
    created() {
        resize;
    },
    updated() {
        resize;
    }
}
</script>

<style>

</style>