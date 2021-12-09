<template>
  <div class="Wrap">
        <!-- 메인 -->
        <div class="mainWrap" id="perfectH_1">
          <div>
                <p class="notoD">SEO JIHYE</p>
                <p class="notoD">I'm Developer</p>
            </div>
        </div>

        <!-- 소개 -->
        <div class="introduceWrap" id="perfectH_2">
            <p class="notoD">Introduce</p>
            <div>
                <p>웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.</p>
                <p>Java로 프로그래밍을 시작하여 Javascript의 매력을 느끼고 Springframework로 웹 프로그램을 개발 하고 있습니다.</p>
                <p>또한 HTML, CSS ,Node.js를 이용하여 프론트를 개발하고있습니다.</p>
                <p>문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.</p>
                <p> 신뢰를 가장 중요시하는 개발자 서지혜입니다.</p>
            </div>
        </div>

        <!-- 경력 -->
        <div class="careerWrap" id="perfectH_3">
            <div class="titleWrap">
                <p class="notoD">Career</p>
            </div>
            <div class="careerInner">
                <div class="career_1">
                    <div class="row">
                        <div class="careerlength">
                            <p>2019.06.10 ~ 2019.12.23</p>
                        </div>
                        <div class="company">
                            <p><router-link to="/pf">케이투웹테크</router-link></p>
                        </div>
                        <div class="txt">
                            <p>프로젝트 참여 / 메뉴 개발</p>
                        </div>
                    </div>
                </div>

                <div class="career_1">
                    <div class="row border">
                        <div>
                            <p>2020.01.06 ~ 2021.02.24</p>
                        </div>
                        <div>
                            <p><router-link to="/pf">더존비즈온</router-link></p>
                        </div>
                        <div>
                            <p>프로젝트 참여 / 메뉴 개발, 메뉴 설계, 데이터마이그레이션</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="stackWrap">
            <div class="titleWrap">
                <p class="notoD">Stack</p>
            </div>
            <div class="backend">
                <div class="subhead">
                    <p class="title">BackEnd</p>
                    <p class="content">🚩 MVC 웹 개발</p>
                </div>
                <div class="backendInner">
                    <ul class="cFix">
                        <li>
                            <div class="img_1">
                                <img :src="require(`@/assets/img/java.png`)">
                                <p>JAVA</p>
                            </div>
                        </li>
                        <li>
                            <div class="img_2">
                                <img :src="require(`@/assets/img/spring.png`)">
                                <p>Spring Framework</p>
                            </div>
                        </li>
                        <li>
                            <div class="img_3">
                                <img :src="require(`@/assets/img/oracle.png`)">
                                <p>Oracle</p>
                            </div>
                        </li>
                        <li>
                            <div class="img_4">
                                <img :src="require(`@/assets/img/mysql.png`)">
                                <p>MySQL</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="frontend">
                <div class="subhead">
                  <p class="title">FrontEnd</p>
                  <p class="content">🚩 퍼블리싱&SPA프레임워크</p>
                </div>
                <div class="frontendInner">
                    <ul class="cFix">
                        <li>
                            <div class="img_1">
                                <img :src="require(`@/assets/img/html.png`)">
                                <p>HTML</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require(`@/assets/img/css.png`)">
                                <p>CSS</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require(`@/assets/img/javascript.png`)">
                                <p>JavaScript</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require(`@/assets/img/vue.png`)">
                                <p>Vue</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="devops">
                <div class="subhead">
                  <p class="title">DevOps</p>
                  <p class="content">🚩 형상관리와 유지보수</p>
                </div>
                <div class="devopsInner">
                    <ul class="cFix">
                        <li>
                            <div class="img_1">
                                <img :src="require(`@/assets/img/git.png`)">
                                <p>Git</p>
                            </div>
                        </li>
                        <li>
                            <div class="img_2">
                                <img :src="require(`@/assets/img/junit.png`)">
                                <p>JUnit</p>
                            </div>
                        </li>
                        <li>
                            <div class="img_3">
                                <img :src="require(`@/assets/img/linux.png`)">
                                <p>Linux</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
  </div>
</template>

<script>
import resize from '../assets/resize.js';

export default {
    name : 'about',
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