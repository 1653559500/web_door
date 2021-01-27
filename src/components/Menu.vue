<template>
    <div style="height: 62px;">
        <div class="head">
            <div class="left">
                <i @click="showMenu = !showMenu" v-if="screenWidth < 780" class="el-icon-menu left-icon"></i>
                <img src="@/assets/images/logo.png" alt="">
                <span class="title">东信北邮工业互联网平台</span>
            </div>
            <div class="menu" v-if="screenWidth > 780">
                <el-menu :default-active="activeIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         text-color="#fff"
                         active-text-color="#409EFF"
                         background-color="#293C4E"
                         router
                         @select="handleSelect">
                    <el-menu-item index="/">
                        <span slot="title">门户首页</span>
                    </el-menu-item>

                    <el-menu-item index="/market/">
                        <span slot="title">软件超市</span>
                    </el-menu-item>

                    <el-menu-item index="/iot/">
                        <span slot="title">智能物联网</span>
                    </el-menu-item>

                    <el-menu-item index="/scheme/">
                        <span slot="title">解决方案库</span>
                    </el-menu-item>

                    <el-menu-item index="/supply/">
                        <span slot="title">供需对接</span>
                    </el-menu-item>
                    <el-menu-item index="/service/">
                        <span slot="title">政企服务</span>
                    </el-menu-item>
                </el-menu>
                <div class="border_right"></div>
            </div>
            <div class="menu" v-if="screenWidth < 780 && showMenu">
                <el-menu :default-active="activeIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         text-color="#fff"
                         active-text-color="#409EFF"
                         background-color="#293C4E"
                         router
                         @select="handleSelect">
                    <el-menu-item index="/">
                        <span slot="title">门户首页</span>
                    </el-menu-item>

                    <el-menu-item index="/market/">
                        <span slot="title">软件超市</span>
                    </el-menu-item>

                    <el-menu-item index="/iot/">
                        <span slot="title">智能物联网</span>
                    </el-menu-item>

                    <el-menu-item index="/scheme/">
                        <span slot="title">解决方案库</span>
                    </el-menu-item>

                    <el-menu-item index="/supply/">
                        <span slot="title">供需对接</span>
                    </el-menu-item>
                    <el-menu-item index="/service/">
                        <span slot="title">政企服务</span>
                    </el-menu-item>
                </el-menu>
            </div>

            <div class="right" v-if="screenWidth > 780">
                <el-button  @click="goAdmin" type="primary" size="small" round>控制台</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return {
                activeIndex: this.$route.path,
                screenWidth: window.screen.width,
                showMenu: false
            }
        },
        computed: {

        },
        methods: {
            handleSelect(){
                this.showMenu = false
            },
            goAdmin(){
                window.open("http://10.1.62.19:5910/")
            }
        }
    }
</script>

<style scoped lang="scss">
    .head{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        height: 62px;
        line-height: 62px;
        padding: 0 40px 0;
        border-bottom: 1px solid #d8dce5;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
        background: #293C4E;
        color: #fff;
        .menu{
            position: absolute;
            right: 260px;
            .el-menu.el-menu--horizontal{
                border-bottom: none;
            }
            .el-menu-item{
                @media (max-width: 1280px) {
                    margin-left: 34px;
                }
                margin-left: 60px;
            }
            .link{
                display: inline-block;
                height: 60px;
            }
            .border_right{
                position: absolute;
                right: -30px;
                top: 15px;
                height: 30px;
                width: 1px;
                background: #C9C3C3;
            }
        }
        .left{
            position: absolute;
            left: 62px;
            font-size: 16px;
            img{
                width: 90px;
                height: 30px;
                vertical-align: middle;
                margin-top: -10px;
            }
            .title{
                margin-left: 30px;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                letter-spacing: 3px;
            }
        }
        .right{
            float: right;
        }
    }
    @media (max-width: 780px) {
        .head{
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 999;
            height: 6.2rem;
            line-height: 6.2rem;
            padding: 0 2rem 0;
            border-bottom: .1rem solid #d8dce5;
            box-shadow: 0 1px .3rem 0 rgba(0,0,0,.12), 0 0 .3rem 0 rgba(0,0,0,.04);
            background: #293C4E;
            color: #fff;
            .menu{
                position: absolute;
                right: 26rem;
                top: 6.4rem;
                .el-menu.el-menu--horizontal{
                    border-bottom: none;
                }
                .el-menu-item{
                    margin-left: 2rem;
                }
                .link{
                    display: inline-block;
                    height: 6rem;
                }
                .border_right{
                    position: absolute;
                    right: -3rem;
                    top: 1.5rem;
                    height: 3rem;
                    width: .1rem;
                    background: #C9C3C3;
                }
            }
            .left{
                position: absolute;
                left: 1.8rem;
                font-size: 1.6rem;
                .left-icon{
                    margin-right: 1rem;
                    font-size: 2rem;
                }
                img{
                    width: 4rem;
                    height: 2rem;
                    vertical-align: middle;
                    margin-top: -.5rem;
                }
                .title{
                    margin-left: .3rem;
                    color: #fff;
                    font-size: 1.4rem;
                    font-weight: bold;
                    letter-spacing: .3rem;
                }
            }
            .right{
                float: right;
            }
        }
    }
</style>
