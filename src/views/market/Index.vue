<template>
    <div>
        <div class="main">
            <div class="head">
                <span class="topic">应用分类</span>
                <el-button type="text" style="margin-left: 30px;">全部</el-button>
                <el-button type="text">协同办公</el-button>
                <el-button type="text">仓储管理</el-button>
                <el-button type="text">AI服务</el-button>
                <el-button type="text">环境监测</el-button>
                <el-button type="text">物流管理</el-button>
                <el-button type="text">智慧园区</el-button>
            </div>
            <div class="selection">
                <div class="left">
                    <el-button type="primary" size="small" round>点击率 ↓</el-button>
                    <el-button type="primary" size="small" round>评价 ↓</el-button>
                    <el-button type="primary" size="small" round>价格 ↓</el-button>
                    <el-button type="primary" size="small" round>销量 ↓</el-button>
                </div>
                <div class="right" v-if="screenWidth > 780">共<span style="color: red;">8</span>个软件</div>
            </div>
            <div class="content" v-if="screenWidth > 780">
                <el-row type="flex" class="row" justify="space-around">
                    <el-col :span="5">
                        <div class="item" @click="goDetail">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-机电.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">机电设备振动监测</p>
                                <p class="price"><span>12000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-仓储.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">智慧仓储</p>
                                <p class="price"><span>9000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-OA.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">东信北邮OA</p>
                                <p class="price"><span>6000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-印刷.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">印刷品缺陷监测</p>
                                <p class="price"><span>9000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row" justify="space-around">
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-物流.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">智慧物流管理</p>
                                <p class="price"><span>30000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-网盘.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">EB企业网盘</p>
                                <p class="price"><span>30000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-园区.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">东信北邮智慧园区系统</p>
                                <p class="price"><span>306000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-排放.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">工业排放监测系统</p>
                                <p class="price"><span>110000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="content" v-if="screenWidth < 780">
                <el-row type="flex" class="row" justify="space-around">
                    <el-col :span="11">
                        <div class="item" @click="goDetail">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-机电.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">机电设备振动监测</p>
                                <p class="price"><span>12000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-仓储.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">智慧仓储</p>
                                <p class="price"><span>9000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row" justify="space-around">
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-OA.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">东信北邮OA</p>
                                <p class="price"><span>6000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-印刷.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">印刷品缺陷监测</p>
                                <p class="price"><span>9000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row" justify="space-around">
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-物流.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">智慧物流管理</p>
                                <p class="price"><span>30000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-网盘.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">EB企业网盘</p>
                                <p class="price"><span>30000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row" justify="space-around">
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-园区.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">东信北邮智慧园区系统</p>
                                <p class="price"><span>306000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="item">
                            <div class="item-img">
                                <img src="@/assets/images/软件超市-排放.png" alt="">
                            </div>
                            <div class="item-desc">
                                <p class="title">工业排放监测系统</p>
                                <p class="price"><span>110000</span>元/年</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                screenWidth: window.screen.width,
            }
        },
        methods: {
            goDetail(){
                this.$router.push('/market/1')
            }
        }
    }
</script>

<style scoped lang="scss">
.main{
    width: 76%;
    margin: 40px auto;
    padding: 18px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .head{
        height: 48px;
        line-height: 48px;
        border-bottom: 2px solid #797979;
        .topic{
            display: inline-block;
            height: 46px;
            padding: 0 20px;
            background: #CCCCCC;
        }
    }
    .selection{
        height: 56px;
        line-height: 56px;
        border-bottom: 2px solid #797979;
        .left{
            float: left;
        }
        .right{
            float: right;
            margin-right: 30px;
        }
    }
    .content{
        height: 650px;
        .row{
            margin-top: 50px;
            .item{
                cursor: pointer;
                height: 250px;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                color: #757575;
                &:hover{
                    transition-duration: 300ms;
                    box-shadow: 0 5px 38px #e2e2e2;
                    border-bottom: 3px solid#2E82C2;
                    box-sizing: border-box;
                    margin-top: -2px;
                }
                .item-img{
                    height: 170px;
                    border-bottom: 2px solid #797979;
                    img{
                        width: 100%;
                        height: 170px;
                    }
                }
                .item-desc{
                    height: 64px;
                    line-height: 32px;
                    text-align: center;
                    .title{
                        margin-top: 10px;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .price{
                        font-size: 14px;
                        span{
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
}
    @media (max-width: 780px) {
        .main{
            width: 92%;
            height: 135rem;
            margin: 2rem auto;
            padding: 1rem;
            box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.1);
            .head{
                height: 3.8rem;
                line-height: 3.8rem;
                border-bottom: .2rem solid #797979;
                .topic{
                    display: inline-block;
                    height: 3.5rem;
                    padding: 0 1rem;
                    background: #CCCCCC;
                }
            }
            .selection{
                margin-top: 4rem;
                height: 5.6rem;
                line-height: 5.6rem;
                border-bottom: .2rem solid #797979;
                .left{
                    float: left;
                    .el-button{
                        margin-right: .8rem;
                        margin-left: 0;
                    }
                }
                .right{
                    float: right;
                    margin-right: 3rem;
                }
            }
            .content{
                height: 120rem;
                .row{
                    margin-top: 4rem;
                    .item{
                        cursor: pointer;
                        height: 25rem;
                        box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.1);
                        color: #757575;
                        &:hover{
                            transition-duration: 300ms;
                            box-shadow: 0 .5rem 3.8rem #e2e2e2;
                            border-bottom: .3rem solid#2E82C2;
                            box-sizing: border-box;
                            margin-top: -.2rem;
                        }
                        .item-img{
                            height: 17rem;
                            border-bottom: .2rem solid #797979;
                            img{
                                width: 100%;
                                height: 17rem;
                            }
                        }
                        .item-desc{
                            height: 6.4rem;
                            line-height: 3.2rem;
                            text-align: center;
                            .title{
                                margin-top: 1rem;
                                font-size: 1.6rem;
                                font-weight: 600;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .price{
                                font-size: 1.4rem;
                                span{
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>