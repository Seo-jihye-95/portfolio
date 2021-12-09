<template>
   <div class="footerWrap" id="footerWrap">
        <div class="footerInner cFix">
            <div class="footerLogo">
                <p>copyright &copy; by jihye All Rights Reserved.</p>
            </div>
            <div class="footertxt">
                <ul class="footerUl">
                    <li>
                        <div>
                            <img :src="require(`@/assets/img/mail.png`)" >
                            <p>ssb33817@naver.com</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img :src="require(`@/assets/img/github.png`)">
                            <a href="https://github.com/Seo-jihye-95" target='_blank'>Seo-jihye-95</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'footer',
}
</script>

<style>
    .footerWrap{
        width: 100%;
        min-height: 100px;
        background-color: #ef9f9a;
        bottom: 0;
        position: relative;
    }

    .footerWrap .footerInner{
        width: 80%;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%,-50%);
        color: #333333;
    }
    
    .footerWrap .footerLogo{
        display: table;
        width: 50%;
        float: left;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(0%,-50%);
    }

    .footerWrap .footerLogo p{
        display: table-cell;
        vertical-align: middle;
    }

    .footerWrap .footertxt{
        float: right;
    }

    .footertxt ul li {
       padding: 5px;
    }

    .footertxt ul li:nth-child(1) > div {
        display: table; 
        width: 100%;
    }


    .footertxt ul li:nth-child(2) > div {
        display: table; 
        width: 67%;
    }

    .footertxt ul li img {
       width:20px; 
       height:20px; 
       padding-right: 10px;
    }

    .footertxt ul li p{
        font-size: 15px;
        display: inline-block;
        display: table-cell; vertical-align: middle;
    }

    .footertxt ul li a{
        text-decoration: none;
        font-size: 15px;
        color: #333333;
        display: table-cell; 
        vertical-align: middle;
    }

     .footertxt ul li a:hover{
        color: #e7cfae;
    }


    @media (max-width: 480px) {

        .footerWrap .footerInner{
            width: 100%;
            position: relative;
            top: 0;
            right: 0;
            transform: none;
        }

        .footerWrap .footerLogo{
            width: 100%;
            top: 0;
            right: 0;
            margin: 10px;
            position: relative;
            transform: none;
        }

        .footerWrap .footerLogo p{
            text-align: center;
        }

        .footerWrap .footertxt{
            width: 70%;
            top: 0;
            right: 0;
            padding: 10px;
            position: relative;
            transform: none;
        }

        .footertxt ul li:nth-child(1) > div {
            display: table; 
            width: auto;
        }


        .footertxt ul li:nth-child(2) > div {
            display: table; 
            width: auto;
        }

    }

    @media (max-width: 360px) {
        .footerWrap .footerInner{
            /* width: 100%; */
        }

        .footerWrap .footerLogo{
            /* padding: 5px; */
        }

    }

</style>