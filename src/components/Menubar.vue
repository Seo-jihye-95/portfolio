<template>
  <!-- menu -->
  <div class="menu" id="menu">
    <div class="menuInner">
        <div class="headermenubar_2 cFix">
            <a class="menubarimg" @click="closemenu()"></a>
        </div>
        <div class="headertxt_2">
            <ul class="headerUl_2">
                <li><router-link to="/" @click="closemenu()">HOME</router-link></li>
                <li><router-link to="/about"  @click="closemenu()">ABOUT</router-link></li>
                <li><router-link to="/pf"  @click="closemenu()">PORTFOLIO</router-link></li>
                <li><router-link to="/blog"  @click="closemenu()">BLOG</router-link></li>
                <li><a href="https://github.com/Seo-jihye-95" target='_blank'  @click="closemenu()">GITHUB</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'menubar',
    methods: {
        closemenu(){
            document.getElementById('menu').style.display="none";
            document.getElementById('menu').style.transition="ease-in-out 1s";
        },
    },
}
</script>

<style>
    .menu{
        margin-top: -122px;
        width: 40%;
        height: 100%;
        position: fixed;
        background-color: white;
        right: 0;
        z-index: 1000;
        display: none;
        box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
    }

    .menu .menuInner{
        width: 88%;
        height: 100%;
        margin: 0 auto;
    }

    .headermenubar_2{
        width:100%;
    }

    .headermenubar_2 .menubarimg {
        display: block;
        width: 35px;
        height:35px;
        background: url(../assets/img/close.png) 0 0 no-repeat;
        background-size: cover;
        float: right;
        margin: 35px 15px;
    }

    .headertxt_2{
        padding-top: 40px;
    }

  
    
    .headertxt_2 ul li:nth-child(1) >a{
        color: #fdc5bc;
    }

    .headertxt_2 ul li:hover > a{
        color: #fdc5bc;
    }
    
    .headertxt_2 ul li a{
        text-decoration: none;
        color:black;
        font-size: 25px;
        font-weight: bolder;
        line-height: 3.0;
    }



    @media (max-width: 720px) {
        .menu{
            width: 70%;
        }
    }

    @media (max-width: 600px) {
        .menu{
            width: 70%;
        }
    }

    @media (max-width: 480px) {
        .menu{
            width: 70%;
        }
    }

    @media (max-width: 360px) {
        .menu{
            width: 80%;
        }
    }
</style>