<template>
    <div class="bottom">
        <div class="foot-top" v-if="screenWidth > 780">
            <div class="low1">
                <div class="eb_logo b-text">
                    <img style="width: 50%;" src="@/assets/images/logo-bottom.png" alt="">
                </div>
                <div class="search-input-div b-text">
                    <form action="">
                        <img style="margin-top: -4px; vertical-align: middle" src="@/assets/images/search-bottom.png" alt="">
                        <input class="search-input" type="text" placeholder="站内搜索">
                    </form>
                </div>
            </div>
            <div class="low2">
                <div class="lr-text">
                    <div class="b-text">站内导航</div>
                    <div class="bsub-text">
                        <p>关于我们</p>
                        <p>咨讯中心</p>
                        <p>产品与解决方案</p>
                        <p>技术研究</p>
                        <p>人才招聘</p>
                    </div>
                </div>
                <div class="lr-text lr-text-right">
                    <div class="b-text">支持与服务</div>
                    <div class="bsub-text">
                        <p>联系我们</p>
                        <p>合作伙伴</p>
                        <p>建议与反馈</p>
                    </div>
                </div>
            </div>
            <div class="low3">
                <div class="b-text">关注我们</div>
                <div class="qr">
                    <p>企业微信</p>
                    <img src="@/assets/images/weixin.png" alt="">
                </div>
                <div class="qr">
                    <p>企业微博</p>
                    <img src="@/assets/images/weibo.png" alt="">
                </div>
                <div class="qr">
                    <p>企业抖音</p>
                    <img src="@/assets/images/douyin.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="foot-bottom">
            <div class="foot-bottom-text">
                <p>© 2000-2020 All Rights Reserved.  东信北邮信息技术有限公司 版权所有</p>
                <p>浙公网安备 33010602009126号</p>
                <p>地址：北京市海淀区知春路9号    电话(010)82325588</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bottom",
        data(){
            return {
                screenWidth: window.screen.width,
            }
        }
    }
</script>

<style scoped lang="scss">
    .bottom{
        height: 618px;
        background: #169fdd;
        .foot-top{
            overflow: hidden;
            height: 501px;
            width: 1200px;
            margin: 0 auto;
            .low1, .low2, .low3{
                float: left;
            }
            .low1{
                height: 368px;
                width: 34%;
                .b-text{
                    float: left;
                    color: #fff;
                    width: 100%;
                    text-align: left;
                    font-size: 16px;
                }
                .eb_logo{
                    margin-top: 96px;
                    margin-bottom: 30px;
                    img{
                        vertical-align: middle;
                    }
                }
                .search-input-div{
                    color: #fff;
                    width: 272px;
                    height: 43px;
                    border-radius: 22px;
                    padding: 4px 10px;
                    border: 1px solid #fff;
                    margin-top: 3px;
                    z-index: 99;
                    box-shadow: initial;
                    input::-webkit-input-placeholder{
                        color: #fff;
                    }
                    .search-input{
                        background-color: rgba(0,0,0,0);
                        color: #ffffff;
                        height: 33px;
                        width: 84%;
                        font-size: 15px;
                        outline: none;
                        border: none;
                    }
                }
            }
            .low2{
                width: 35%;
                overflow: hidden;
                margin-top: 100px;
                .lr-text{
                    float: left;
                    width: 50%;
                    height: auto;
                    margin-bottom: 20px;
                    .b-text{
                        float: left;
                        color: #fff;
                        width: 100%;
                        text-align: left;
                        font-size: 16px;
                    }
                    .bsub-text{
                        float: left;
                        width: 100%;
                        text-align: left;
                        margin-top: 20px;
                        p{
                            color: #fff;
                            margin-top: 6px;
                            cursor: pointer;
                        }
                    }
                    }
                }
            .low3{
                margin-top: 100px;
                width: 31%;
                .b-text{
                    float: left;
                    color: #fff;
                    width: 100%;
                    text-align: left;
                    font-size: 16px;
                }
                .qr{
                    float: left;
                    margin-top: 20px;
                    width: 33.3%;
                    text-align: left;
                    p{
                        color: #fff;
                        font-size: 14px;
                        margin-bottom: 10px;
                    }
                    img{
                        width: 72%;
                    }
                }
            }
        }
        .foot-bottom{
            height: 117px;
            padding-top: 35px;
            padding-bottom: 35px;
            background: rgba(30, 74, 176, .3);
            .foot-bottom-text{
                text-align: center;
                color: #fff;
                font-size: 12px;
            }
        }
    }
    @media (max-width: 780px) {
        .bottom{
            height: 11.7rem;
            background: #169fdd;
            .foot-bottom{
                height: 117px;
                padding: 3.5rem 2rem;
                background: rgba(30, 74, 176, .3);
                .foot-bottom-text{
                    text-align: center;
                    color: #fff;
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>