<template>
    <div>
        <div class="main">
            <div class="head">
                <span class="topic">解决方案分类</span>
                <el-button type="text" style="margin-left: 30px;">全部</el-button>
                <el-button type="text">工业物联</el-button>
                <el-button type="text">智慧工厂</el-button>
                <el-button type="text">企业上云</el-button>
                <el-button type="text">产业协同</el-button>
                <el-button type="text">工业大数据</el-button>
                <el-button class="right-btn" size="small" type="primary" round>上传方案</el-button>
            </div>
            <div class="scheme-con">
                <div class="con-top">
                    <div class="left">
                        <el-button size="small" type="primary">最 新</el-button>
                        <el-button size="small" type="primary">最 热</el-button>
                    </div>
                    <div class="right">
                        <span>共4个，1/1</span>
                        <el-button size="small" type="primary">下一页</el-button>
                    </div>
                </div>
                <div class="content" v-if="screenWidth > 780">
                    <div class="list">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="11">
                                <div class="item">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :span="11">
                                            <div class="item-img">
                                                <img src="@/assets/images/table.jpg" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="11">
                                            <p class="item-title">智能抄表解决方案</p>
                                            <p class="item-desc">
                                                围绕城市工商户和居民水表、气表等智能远程抄表场景，结合NB-IoT技术，提供包括IoT平台、企业智能、应用服务、安全管理等端到端优化的云服务能力，令企业运营更高效、居民生活更便捷。
                                            </p>
                                            <div class="detail">
                                                <el-button @click="goDetail" type="text">查看详情></el-button>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <div class="item">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :span="11">
                                            <div class="item-img">
                                                <img src="@/assets/images/空调云.jpg" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="11">
                                            <p class="item-title">空调云设备管家解决方案</p>
                                            <p class="item-desc">
                                                以中央空调为切入点，以空调厂商需求为落地点，快速打造一个空调云平台，逐步扩展为一个为企业和厂商提供设备集中管控、全生命周期管理以及降本增益的设备管家云平台。
                                            </p>
                                            <div class="detail">
                                                <el-button type="text">查看详情></el-button>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="list">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="11">
                                <div class="item">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :span="11">
                                            <div class="item-img">
                                                <img src="@/assets/images/market-left.png" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="11">
                                            <p class="item-title">机电设备智能监测解决方案</p>
                                            <p class="item-desc">
                                                针对使用大型机电设备的钢铁、煤矿、石化等领域的生产企业，提供软硬件结合的一整套解决方案。
                                            </p>
                                            <div class="detail">
                                                <el-button type="text">查看详情></el-button>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <div class="item">
                                    <el-row type="flex" justify="space-between">
                                        <el-col :span="11">
                                            <div class="item-img">
                                                <img src="@/assets/images/wrjjz.jpg" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="11">
                                            <p class="item-title">无人机基站智能巡检解决方案</p>
                                            <p class="item-desc">
                                                无人机在基站巡检应用具有反应速度快、巡检效率高、成本低的绝对优势；并且可以代替部分人工，降低野外作业职工劳动强度、提高工作效率。
                                            </p>
                                            <div class="detail">
                                                <el-button type="text">查看详情></el-button>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="content-mobile" v-if="screenWidth < 780">
                    <div class="item">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="11">
                                <div class="item-img">
                                    <img src="@/assets/images/table.jpg" alt="">
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <p class="item-title">智能抄表解决方案</p>
                                <p class="item-desc">
                                    围绕城市工商户和居民水表、气表等智能远程抄表场景，结合NB-IoT技术，提供包括IoT平台、企业智能、应用服务、安全管理等端到端优化的云服务能力，令企业运营更高效、居民生活更便捷。
                                </p>
                                <div class="detail">
                                    <el-button @click="goDetail" type="text">查看详情></el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="item">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="11">
                                <div class="item-img">
                                    <img src="@/assets/images/空调云.jpg" alt="">
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <p class="item-title">空调云设备管家解决方案</p>
                                <p class="item-desc">
                                    以中央空调为切入点，以空调厂商需求为落地点，快速打造一个空调云平台，逐步扩展为一个为企业和厂商提供设备集中管控、全生命周期管理以及降本增益的设备管家云平台。
                                </p>
                                <div class="detail">
                                    <el-button type="text">查看详情></el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="item">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="11">
                                <div class="item-img">
                                    <img src="@/assets/images/market-left.png" alt="">
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <p class="item-title">机电设备智能监测解决方案</p>
                                <p class="item-desc">
                                    针对使用大型机电设备的钢铁、煤矿、石化等领域的生产企业，提供软硬件结合的一整套解决方案。
                                </p>
                                <div class="detail">
                                    <el-button type="text">查看详情></el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="item">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="11">
                                <div class="item-img">
                                    <img src="@/assets/images/wrjjz.jpg" alt="">
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <p class="item-title">无人机基站智能巡检解决方案</p>
                                <p class="item-desc">
                                    无人机在基站巡检应用具有反应速度快、巡检效率高、成本低的绝对优势；并且可以代替部分人工，降低野外作业职工劳动强度、提高工作效率。
                                </p>
                                <div class="detail">
                                    <el-button type="text">查看详情></el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
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
                this.$router.push('/iot/1')
            }
        }
    }
</script>

<style scoped lang="scss">
.main{
    width: 80%;
    min-height: 600px;
    margin: 40px auto;
    padding: 24px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .head{
        position: relative;
        height: 48px;
        line-height: 48px;
        border-bottom: 2px solid #797979;
        .topic{
            display: inline-block;
            height: 46px;
            padding: 0 20px;
            background: #CCCCCC;
        }
        .right-btn{
            position: absolute;
            right: 20px;
        }
    }
    .scheme-con{
        .con-top{
            height: 40px;
            line-height: 40px;
            margin: 30px 0 20px;
            .left{
                float: left;
            }
            .right{
                float: right;
                span{
                    margin-right: 18px;
                }
            }
        }
        .content{
            padding: 30px 40px;
            .list{
                margin-bottom: 60px;
                height: 270px;
                .item{
                    @media (max-width: 1280px) {
                        padding: 20px 18px;
                    }
                    padding: 30px 26px;
                    border: 1px solid #dce3ea;
                    border-radius: 5px;
                    .item-img{
                        @media (max-width: 1280px) {
                            height: 180px;
                        }
                        height: 200px;
                        width: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .item-title{
                        font-size: 18px;
                        color: #434343;
                        font-weight: 700;
                        margin-bottom: 20px;
                    }
                    .item-desc{
                        @media (max-width: 1280px) {
                            max-height: 80px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            line-height: 20px;
                            display: -webkit-box;    /* 对象作为弹性伸缩模型显示 */
                            -webkit-line-clamp: 4;  /* 块元素显示的文本行数 */
                            -webkit-box-orient: vertical;  /* 从上到下排列子元素 */
                        }
                        font-size: 13px;
                        color: #a3a3a3;
                    }
                    .detail{
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
    @media (max-width: 780px) {
        .main{
            width: 96%;
            min-height: 600px;
            margin: 2rem auto;
            padding: 1.6rem;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            .head{
                position: relative;
                height: 3.8rem;
                line-height: 4.6rem;
                border-bottom: .2rem solid #797979;
                .topic{
                    display: inline-block;
                    height: 3.5rem;
                    padding: 0 1rem;
                    background: #CCCCCC;
                }
                .right-btn{
                    position: absolute;
                    right: 1rem;
                }
            }
            .scheme-con{
                .con-top{
                    height: 4rem;
                    line-height: 4rem;
                    margin: 6rem 0 2rem;
                    .left{
                        float: left;
                    }
                    .right{
                        float: right;
                        span{
                            margin-right: 1.8rem;
                        }
                    }
                }
                .content-mobile{
                    margin-top: 3rem;
                    .item{
                        padding: 1.6rem 1rem;
                        margin-bottom: 2rem;
                        border: .1rem solid #dce3ea;
                        border-radius: .5rem;
                        height: 18rem;
                        .item-img{
                            height: 14rem;
                            width: 100%;
                            img{
                                width: 100%;
                                height: 14rem;
                            }
                        }
                        .item-title{
                            font-size: 1.6rem;
                            color: #434343;
                            font-weight: 700;
                            margin-bottom: 1rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .item-desc{
                            font-size: 1.2rem;
                            max-height: 8rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;    /* 对象作为弹性伸缩模型显示 */
                            -webkit-line-clamp: 5;  /* 块元素显示的文本行数 */
                            -webkit-box-orient: vertical;  /* 从上到下排列子元素 */
                            color: #a3a3a3;
                        }
                        .detail{
                            margin-top: .6rem;
                        }
                    }
                }
            }
        }
    }
</style>