<template>
    <div class="companymodal" v-if="modalopen == true">
        <div class="modalInner">
            <div class="modal_1 cFix">
                <a class="modalclosebtnimg" @click="$emit('modalclose',false)"></a>
                <p class="modaltitle">{{companypj[clicknum].pjname}}</p>
            </div>
            <div class="modal_2">
                <p class="modalstack">Stack : {{companypj[clicknum].stack}}</p>
                <p class="modaltool">Tool : {{companypj[clicknum].tool}}</p>
            </div>
            <div class="modal_3">
                <p class="modaldetail">{{companypj[clicknum].pjdetailcontent}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name :'modal',
    props:{
        modalopen : Boolean,
        clicknum : Number,
        companypj : Array,
    }
}
</script>

<style>
    body{
        margin: 0;;
    }
    .companymodal {
        width: 50%;
        /* height: 60%; */
        margin: 0 auto;
        top: 57%;
        right: 50%;
        transform: translate(50%,-50%);
        background-color: white;
        position: fixed;
        padding:20x;
        border-radius: 20px;
        box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
    
    }

    .companymodal .modalInner{
        width: 90%;
        height: 100%;
        /* background-color: white; */
        padding:20x;
        /* border-radius: 20px; */
        margin: 0 auto;
    }

    .companymodal .modalInner div{
        width: 85%;
        /* height: 20%; */
        padding-top: 40px;
        margin: 0 auto;
    }

    .companymodal .modalInner div:nth-child(1){
        padding: 50px 0 20px 0;
        border-bottom: 1px solid rgba(0,0,0,0.5)
    }

    .modal_1 .modalclosebtnimg {
        display: block;
        width: 23px;
        height:23px;
        float: right;
        background: url(../assets/img/close.png) 0 0 no-repeat;
        background-size: cover;
        margin: 2px
    }

    .modal_1 .modalclosebtnimg:hover {
        transform: rotate( 720deg );
    }
    
    .companymodal .modalInner .modal_1 .modaltitle{
        font-weight: 800;
        font-size: 20px;
    }

    .companymodal .modalInner div:nth-child(2) p{
        color: hsl(0, 0%, 60%); 
        line-height: 1.6;
        font-size: 15px;
    }

    .companymodal .modalInner div:nth-child(3){
        padding-bottom: 45px;
    }
    
    .companymodal .modalInner div:nth-child(3) p{
        line-height: 1.6;
    }
    



</style>