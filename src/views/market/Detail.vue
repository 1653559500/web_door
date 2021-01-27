<template>
    <div>
        <div class="main">
            <div class="head">
                AI服务 > 机电设备振动监测
            </div>
            <div class="content">
                <div class="top">
                    <el-row :gutter="30">
                        <el-col :span="10">
                            <div class="top-img">
                                <img src="@/assets/images/电器云.png" alt="">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="top-right">
                                <p class="right-title">机电设备振动监测</p>
                                <p class="company">杭州东信北邮信息技术有限公司</p>
                                <p class="price"><span>12000元</span>/年</p>
                                <p class="mode">收费方式</p>
                                <p> <el-button size="small">按监测点位</el-button></p>
                                <div class="right-btn" v-if="screenWidth > 780">
                                    <el-button size="small" type="primary">开通服务</el-button>
                                    <el-button size="small" type="primary">注册试用</el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="collection">
                    <el-button size="small" type="primary" icon="el-icon-star-off">收藏</el-button>
                    <div class="right-btn" v-if="screenWidth < 780">
                        <el-button size="small" type="primary">开通服务</el-button>
                        <el-button size="small" type="primary">注册试用</el-button>
                    </div>
                </div>
                <div class="bottom">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="商品详情" name="first">
                            <div class="bottom-top">
                                系统提供了一套无线化、在线化、智能化的机电设备的预测性维修方案;方案以检查为基础，利用监测和诊断技术，对设备状态进行预测，有针对性地安排检修，事先加以排除，从而避免和减少故障停机损失;预测维修维护成本仅为事后维修成本的1/3。
                            </div>
                            <div class="bottom-middle">
                                <el-row type="flex" justify="space-between">
                                    <el-col :span="4">
                                        <div class="img-left">
                                            <img src="@/assets/images/market-left.png" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :span="18">
                                        <div class="img-right">
                                            <img src="@/assets/images/market-right.png" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="scene">
                                <div class="name">应用场景</div>
                                <div>
                                    <p>钢铁线材 风机、减速机、油泵等机电监测；采用电池供电版本，每天采集数据1~3次；提供状态监测、故障预测和与诊断等功能。</p>
                                    <p>输煤洗煤 主扇、绞车、压风机器等机电监测；采用电源供电方案，24小时监测；通过振动有效值搜寻设备工作时刻，采集振动波形；监测设备运转速度，结合振动波形诊断故障。</p>
                                    <p>石油化工 抽油电机和皮带等监测；每天一次全波形，每天多次特征值采样；趋势分析，阈值告警。抽油机电机、减速机和皮带的故障监测；抽油机工况、能耗监测；线上自动预警，减少点巡检工作量。</p>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="应用案例" name="second">应用案例</el-tab-pane>
                        <el-tab-pane label="用户评价" name="third">用户评价</el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
            return {
                activeName: "first",
                screenWidth: window.screen.width,
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
            height: 44px;
            line-height: 44px;
            text-indent: 40px;
            border-bottom: 2px solid #797979;
        }
        .content{
            margin: 50px;
            .top{
                .top-img{
                    height: 314px;
                    img{
                        width: 100%;
                        height: 314px;
                    }
                }
                .top-right{
                    font-size: 14px;
                    .right-title{
                        font-weight: 700;
                        font-size: 18px;
                        margin-bottom: 14px;
                    }
                    .mode{
                        margin: 23px 0;
                    }
                   .price{
                       margin-top: 36px;
                       span{
                           font-size: 16px;
                           font-weight: 800;
                       }
                   }
                   .right-btn{
                        margin-top: 70px;
                   }
                }
            }
            .collection{
                margin-top: 20px;
            }
            .bottom{
                margin-top: 70px;
                .bottom-top{
                    margin-top: 40px;
                    margin-bottom: 30px;
                }
                .scene{
                    .name{
                        margin: 34px 0;
                    }
                    p{
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    @media (max-width: 780px) {
        .main{
            width: 94%;
            margin: 2rem auto;
            padding: 1.2rem;
            box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.1);
            .head{
                height: 4.4rem;
                line-height: 4.4rem;
                text-indent: 1.6rem;
                border-bottom: .2rem solid #797979;
            }
            .content{
                margin: 1.6rem;
                .top{
                    .top-img{
                        height: 12rem;
                        img{
                            width: 100%;
                            height: 12rem;
                        }
                    }
                    .top-right{
                        font-size: 1.2rem;
                        .right-title{
                            font-weight: 700;
                            font-size: 1.5rem;
                            margin-bottom: 1rem;
                        }
                        .company{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .mode{
                            margin: .8rem 0;
                        }
                        .price{
                            margin-top: 1rem;
                            span{
                                font-size: 1.3rem;
                                font-weight: 800;
                            }
                        }

                    }
                }
                .collection{
                    margin-top: 2rem;
                    .right-btn{
                        float: right;
                    }
                }
                .bottom{
                    margin-top: 3rem;
                    .bottom-top{
                        margin-top: .4rem;
                        margin-bottom: 1.6rem;
                    }
                    .scene{
                        .name{
                            margin: 2rem 0;
                        }
                        p{
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>