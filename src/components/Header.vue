<template>
    <div class="headerWrap" id="headerWrap">
        <div class="headerInner">
            <div class="headerLogo">
                <a href="/" class="Headerimg"></a>
            </div>
            <div class="headermenubar">
                <a class="menubarimg" @click="openmenu()"></a>
            </div>
            <div class="headertxt">
                <ul class="headerUl">
                    <li><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/about">ABOUT</router-link></li>
                    <li><router-link to="/pf">PORTFOLIO</router-link></li>
                    <li><router-link to="/blog">BLOG</router-link></li>
                    <li><a href="https://github.com/Seo-jihye-95" target='_blank'>GITHUB</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        openmenu(){
            document.getElementById('menu').style.display="block";
        },  
    },
}
</script>

<style>

    .cFix::after{
        content: '';
        display:block;
        clear:both;
    }

    .headerWrap {
        width: 100%;
        height: 120px;
        position: fixed;
        top:0;
        background-color: #fff;;
        z-index: 100;
    }

    .headerWrap .headerInner{
        /* width: 85%; */
        height: 120px;
        margin: 0 auto;
        border-bottom: solid black 2px;
    }

    .headerWrap .headerInner .headerLogo{
        float: left;
    }

    .headerWrap .headerInner .headerLogo .Headerimg{
        display: block;
        width: 140px;
        height:120px;
        background: url(../assets/dog_logo.png) 0 0 no-repeat;
        background-size: cover;

    }

    .headerWrap .headerInner .headermenubar{
        float: right;
        display: none;
        margin: 40px 20px 0 0;
    }

    .headerWrap .headerInner .headermenubar .menubarimg{
        display: block;
        width: 30px;
        height: 30px;
        background: url(../assets/img/menubar.png) 0 0 no-repeat;
        background-size: cover;
    }

    .headerWrap .headerInner .headertxt{
        float: right;
        /* width: 500px;
        height: 25px; */
        margin: 55px 15px 0 0;
    }

    .headerUl{
        float: right;
        width: 500px;
    }

    .headerUl li{
        float: left;
        width: 20%;
        text-align: center;
    }

    .headerUl li a{
        text-decoration: none;
        color:black;
        font-size: 15px;
        font-weight: bolder;
    }

    .headerUl li a:hover{
        color: #fdc5bc;
    } 

    @media (max-width: 670px) {
        .headerWrap .headerInner .headertxt {
        display: none;
        }

        .headerWrap .headerInner .headermenubar{
            display: block;
        }
    }

</style>