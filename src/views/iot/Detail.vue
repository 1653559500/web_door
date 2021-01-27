<template>
    <div>
        <div class="detail">
            <div class="summary">
                <div class="title">-方案概述-</div>
                <div class="table">
                    <div class="content">
                        <div class="table-img">
                            <img src="@/assets/images/table.jpg" alt="">
                        </div>
                        <div class="right-text">
                            <p>智能抄表终端以低功耗、低成本的技术实现方式，在不破坏现有老、旧存量表内部结构的前提下，通过外挂式的结构形态，创造性的解决用户存量表“入户难、成本高、效率低”及前装智能表改造难、成本高等问题，更高的识别准确率成为您的远程抄表专家。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="title">-方案优势-</div>
                <div class="bar" v-if="screenWidth > 780">
                    <el-row type="flex" justify="space-between">
                        <el-col :span="5">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot1.png" alt="">
                                </div>
                                <div class="iot-name">节约成本，超低功耗</div>
                                <div class="iot-desc">
                                    摄像头拍照，无需智能电表改造，减少硬件投入；按抄表频率要求，自定义按时唤醒，降低成本消耗并得到有效图片。
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot2.png" alt="">
                                </div>
                                <div class="iot-name">海量接入，高效计算</div>
                                <div class="iot-desc">
                                    支持企业海量电表设备连接能力，提供强大的云计算处理能力，海量数据分析支持。
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot3.png" alt="">
                                </div>
                                <div class="iot-name">云端存储，安全稳定</div>
                                <div class="iot-desc">
                                    所有数据云上存储，随时可查；具有可靠稳定的高并发消息处理能力。
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot4.png" alt="">
                                </div>
                                <div class="iot-name">功能齐全，支撑创新</div>
                                <div class="iot-desc">
                                    数据异常提醒，人工复核；可视化数据分析服务，提供用电提醒，缴费通知，多端管控等全面性服务。
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="bar" v-if="screenWidth < 780">
                    <el-row type="flex" justify="space-between">
                        <el-col :span="11">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot1.png" alt="">
                                </div>
                                <div class="iot-name">节约成本，超低功耗</div>
                                <div class="iot-desc">
                                    摄像头拍照，无需智能电表改造，减少硬件投入；按抄表频率要求，自定义按时唤醒，降低成本消耗并得到有效图片。
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot2.png" alt="">
                                </div>
                                <div class="iot-name">海量接入，高效计算</div>
                                <div class="iot-desc">
                                    支持企业海量电表设备连接能力，提供强大的云计算处理能力，海量数据分析支持。
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 2rem;" type="flex" justify="space-between">
                        <el-col :span="11">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot3.png" alt="">
                                </div>
                                <div class="iot-name">云端存储，安全稳定</div>
                                <div class="iot-desc">
                                    所有数据云上存储，随时可查；具有可靠稳定的高并发消息处理能力。
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="item">
                                <div class="iot-img">
                                    <img src="@/assets/images/iot4.png" alt="">
                                </div>
                                <div class="iot-name">功能齐全，支撑创新</div>
                                <div class="iot-desc">
                                    数据异常提醒，人工复核；可视化数据分析服务，提供用电提醒，缴费通知，多端管控等全面性服务。
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="scene" v-if="screenWidth > 780">
                <div class="title">-应用场景-</div>
                <div class="scene-con">
                    <div class="con-top clearfix">
                        <div class="top-img">
                            <img src="@/assets/images/top-table.png" alt="">
                        </div>
                        <div class="top-right">
                            <p class="right-title">电表识别</p>
                            <p class="right-con">电表识别服务，基于深度学习技术，准确识别电表用电量读数，提供各种型号机械表、数字表的读数识别能力，帮助客户准确识别电表读数。</p>
                        </div>
                    </div>
                    <div class="con-bottom">
                        <div class="bottom-left">
                            <p class="left-title">气表识别</p>
                            <p class="left-con">气表识别服务，基于深度学习技术，准确识别气表用气量读数，提供各种型号机械表、数字表的读数识别能力，帮助客户准确识别气表读数。</p>
                        </div>
                        <div class="bottom-img">
                            <img src="@/assets/images/bottom-table.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="scene-mobile" v-if="screenWidth < 780">
                <div class="title">-应用场景-</div>
                <div class="content">
                    <div class="electric">
                        <div class="electric-img">
                            <img src="@/assets/images/top-table.png" alt="">
                        </div>
                        <div class="electric-text">
                            <div class="text-title">电表识别</div>
                            <div class="text">
                                电表识别服务，基于深度学习技术，准确识别电表用电量读数，提供各种型号机械表、数字表的读数识别能力，帮助客户准确识别电表读数。
                            </div>
                        </div>
                    </div>
                    <div class="gas">
                        <div class="gas-img">
                            <img src="@/assets/images/bottom-table.png" alt="">
                        </div>
                        <div class="gas-text">
                            <div class="text-title">气表识别</div>
                            <div class="text">
                                气表识别服务，基于深度学习技术，准确识别气表用气量读数，提供各种型号机械表、数字表的读数识别能力，帮助客户准确识别气表读数。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="case" v-if="screenWidth > 780">
                <div class="title">-成功案例-</div>
                <div class="case-item">
                    <img src="@/assets/images/jjcg01.jpg" alt="">
                    <div class="item-name">移动机房智能抄表项目</div>
                    <div class="item-content">
                        <div class="content">
                            移动集团各地市十分重视基站机房等设施的电量管理和电费稽核。考虑到更换新表的成本和施工难度，客户计划采用云拍方案，并规划后期与既有资管平台对接。
                        </div>
                    </div>
                </div>
                <div class="case-item">
                    <img src="@/assets/images/jjcg02.jpg" alt="">
                    <div class="item-name">四川电表抄表项目</div>
                    <div class="item-content">
                        <div class="content">
                            电信行业运维目前在负责一些专网通信的代维服务，主要负责全部运维的设备的能耗管理与费用，能耗管理面临更换智能电表费用高昂，人力抄表准确性、时效性差、报表数据管理困难等诸多难题。
                        </div>
                    </div>
                </div>
                <div class="case-item">
                    <img src="@/assets/images/jjcg03.jpg" alt="">
                    <div class="item-name">北京首发集团路侧广告牌项目</div>
                    <div class="item-content">
                        <div class="content">
                            高速路网运营行业负责养护高速公路口的户外大型广告牌与展示屏，设备能耗的管理仍采用人工采集模式。而高速公路路侧的广告牌，电表在高处。能耗管理面临更换智能电表电网公司不认可，人力攀爬抄表困难、时效性差、报表数据管理困难等诸多难题。
                        </div>
                    </div>
                </div>
            </div>
            <div class="case-mobile" v-if="screenWidth < 780">
                <div class="title">-成功案例-</div>
                <div class="case-list">
                    <img src="@/assets/images/jjcg01.jpg" alt="">
                    <div class="list-name">移动机房智能抄表项目</div>
                    <div class="list-desc">移动集团各地市十分重视基站机房等设施的电量管理和电费稽核。考虑到更换新表的成本和施工难度，客户计划采用云拍方案，并规划后期与既有资管平台对接。</div>
                </div>
                <div class="case-list">
                    <img src="@/assets/images/jjcg02.jpg" alt="">
                    <div class="list-name">移动机房智能抄表项目</div>
                    <div class="list-desc">电信行业运维目前在负责一些专网通信的代维服务，主要负责全部运维的设备的能耗管理与费用，能耗管理面临更换智能电表费用高昂，人力抄表准确性、时效性差、报表数据管理困难等诸多难题。</div>
                </div>
                <div class="case-list">
                    <img src="@/assets/images/jjcg03.jpg" alt="">
                    <div class="list-name">北京首发集团路侧广告牌项目</div>
                    <div class="list-desc">高速路网运营行业负责养护高速公路口的户外大型广告牌与展示屏，设备能耗的管理仍采用人工采集模式。而高速公路路侧的广告牌，电表在高处。能耗管理面临更换智能电表电网公司不认可，人力攀爬抄表困难、时效性差、报表数据管理困难等诸多难题。</div>
                </div>
            </div>
            <div class="service">
                <div class="title">-相关服务推荐-</div>
                <div class="service-list">
                    <el-row type="flex" justify="space-between">
                        <el-col :span="7">
                            <div class="list-content">
                                <p class="service-title">机械电表识别</p>
                                <p class="tip">点击查看更多详情</p>
                                <img class="service-img" src="@/assets/images/rg.png" alt="">
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div class="list-content">
                                <p class="service-title">液晶电表识别</p>
                                <p class="tip">点击查看更多详情</p>
                                <img class="service-img" src="@/assets/images/rg.png" alt="">
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div class="list-content">
                                <p class="service-title">气表识别</p>
                                <p class="tip">点击查看更多详情</p>
                                <img class="service-img" src="@/assets/images/rg.png" alt="">
                            </div>
                        </el-col>
                    </el-row>
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
                screenWidth: window.screen.width,
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail{
        .title{
            width: 194px;
            height: 30px;
            font-size: 28px;
            font-weight: 700;
            color: #434343;
            margin: 0 auto;
            text-align: center;
        }
        .summary{
            margin-top: 70px;
            .table{
                line-height: 30px;
                height: 320px;
                background: #f2f2f2;
                margin: 100px auto 0;
                font-size: 14px;
                font-weight: 400;
                color: #434343;
                text-align: justify;
                .content{
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                    .table-img{
                        position: absolute;
                        left: 0;
                        top: -80px;
                        width: 350px;
                        height: 350px;
                        box-shadow: 0 3px 7px 0 rgba(119,113,113,.35);
                        img{
                            width: 350px;
                            height: 350px;
                        }
                    }
                    .right-text{
                        position: absolute;
                        top: 0;
                        right: 20px;
                        p{
                            font-size: 14px;
                            font-weight: 400;
                            color: #333;
                            float: right;
                            width: 800px;
                            margin-top: 80px;
                        }
                    }
                }
            }
        }
        .advantage{
            margin-top: 70px;
            .bar{
                @media (max-width: 1280px){
                    width: 90%;
                }
                margin: 58px auto 70px;
                width: 80%;
                .item{
                    border: 1px solid #dce3ea;
                    width: 270px;
                    height: 380px;
                    border-radius: 5px;
                    box-sizing: border-box;
                    padding: 20px;
                    .iot-img{
                        width: 100px;
                        height: 100px;
                        margin: 30px auto 0;
                    }
                    .iot-name{
                        text-align: center;
                        color: #0079fe;
                        margin-top: 30px;
                        font-size: 18px;
                    }
                    .iot-desc{
                        text-align: justify;
                        width: 200px;
                        line-height: 25px;
                        margin: 20px auto 0;
                        font-size: 14px;
                    }
                }
            }
        }
        .scene{
            width: 100%;
            overflow: hidden;
            padding-bottom: 80px;
            background: #f2f2f2;
            .title{
                margin-top: 80px;
            }
            .scene-con{
                position: relative;
                width: 1200px;
                height: 630px;
                margin: 40px auto 0;
                .con-top{
                    position: relative;
                    height: 300px;
                }
                .top-img{
                    width: 680px;
                    height: 300px;
                    margin-top: 30px;
                }
                .top-right{
                    position: absolute;
                    right: 0;
                    padding: 18px;
                    box-sizing: border-box;
                    text-align: justify;
                    font-size: 14px;
                    width: 600px;
                    height: 250px;
                    overflow: hidden;
                    background: #fff;
                    box-shadow: 0 3px 7px 0 rgba(119,113,113,.35);
                    line-height: 30px;
                    margin: -275px auto 0;
                    .right-title{
                        text-align: center;
                        line-height: 40px;
                        margin-top: 40px;
                        font-size: 18px;
                    }
                    .right-con{
                        line-height: 30px;
                    }
                }
                .con-bottom{
                    position: absolute;
                    top: 300px;
                    width: 1200px;
                    height: 330px;
                    .bottom-left{
                        position: absolute;
                        left: 0;
                        top: 90px;
                        z-index: 99;
                        text-align: justify;
                        font-size: 14px;
                        width: 600px;
                        height: 250px;
                        overflow: hidden;
                        background: #fff;
                        padding: 20px;
                        box-sizing: border-box;
                        box-shadow: 0 3px 7px 0 rgba(119,113,113,.35);
                        line-height: 30px;
                        .left-title{
                            text-align: center;
                            line-height: 40px;
                            margin-top: 40px;
                            font-size: 18px;
                        }
                        .left-con{
                            line-height: 30px;
                        }
                    }
                    .bottom-img{
                        position: absolute;
                        right: 0;
                        top: 60px;
                        width: 680px;
                    }
                }
            }
        }
        .case{
            margin-top: 80px;
            .title{
                padding-bottom: 60px;
            }
            .case-item{
                position: relative;
                height: 450px;
                margin-top: 30px;
                img{
                    width: 100%;
                    height: 450px;
                }
                .item-name{
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 40px;
                    color: #fff;
                    position: absolute;
                    top: 175px;
                    right: 63%;
                }
                .item-content{
                    @media (max-width: 1280px) {
                        width: 520px;
                        height: 260px;
                        right: 4%;
                    }
                    width: 630px;
                    height: 290px;
                    box-sizing: border-box;
                    padding: 40px;
                    text-align: justify;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 30px;
                    color: #333;
                    position: absolute;
                    right: 20%;
                    top: 68px;
                    background: hsla(0,0%,100%,.9);
                    .content{
                        text-align: justify;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 30px;
                        color: #333;
                    }
                }
            }
        }
        .service{
            margin-top: 80px;
            padding-bottom: 200px;
            .title{
                margin-top: 80px;
            }
            .service-list{
                width: 1200px;
                margin: 60px auto;
                .list-content{
                    position: relative;
                    border: 1px solid hsla(0,0%,40%,.4);
                    padding: 24px 44px;
                    height: 130px;
                    background: #fff;
                    border-radius: 6px;
                    cursor: pointer;
                    &:hover{
                        box-shadow: 5px 5px 5px 5px hsla(0,0%,67.8%,.35);
                    }
                    .service-title{
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 50px;
                        color: #434343;
                    }
                    .tip{
                        color: #434343;
                        font-size: 14px;
                    }
                    .service-img{
                        position: absolute;
                        right: 30px;
                        top: 48px;
                    }
                }
            }
        }
    }
    @media (max-width: 780px) {
        .detail{
            .title{
                width: 19.4rem;
                height: 3rem;
                font-size: 2rem;
                font-weight: 700;
                color: #434343;
                margin: 0 auto;
                text-align: center;
            }
            .summary{
                margin-top: 3rem;
                .table{
                    line-height: 3rem;
                    height: 32rem;
                    background: #f2f2f2;
                    margin: 7rem auto 0;
                    font-size: 1.4rem;
                    font-weight: 400;
                    color: #434343;
                    text-align: justify;
                    .content{
                        position: relative;
                        max-width: 100%;
                        margin: 0 auto;
                        .table-img{
                            position: absolute;
                            left: 0;
                            top: -4rem;
                            width: 16rem;
                            height: 16rem;
                            box-shadow: 0 .3rem .7rem 0 rgba(119,113,113,.35);
                            img{
                                width: 16rem;
                                height: 16rem;
                            }
                        }
                        .right-text{
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 6rem;
                            width: 100%;
                            p{
                                font-size: 1.3rem;
                                font-weight: 400;
                                color: #333;
                                width: 100%;
                                margin-top: 8rem;
                                padding: 0 .8rem;
                            }
                        }
                    }
                }
            }
            .advantage{
                margin-top: 4rem;
                width: 100vw;
                .bar{
                    margin: 4rem auto;
                    width: 90%;
                    .item{
                        border: .1rem solid #dce3ea;
                        width: 15rem;
                        height: 26.2rem;
                        border-radius: .4rem;
                        box-sizing: border-box;
                        padding: 1rem;
                        .iot-img{
                            width: 8rem;
                            height: 8rem;
                            margin: .6rem auto 0;
                        }
                        .iot-name{
                            text-align: center;
                            color: #0079fe;
                            margin-top: 1rem;
                            font-size: 1.4rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .iot-desc{
                            text-align: justify;
                            width: 100%;
                            line-height: 2rem;
                            margin: 1.2rem auto 0;
                            font-size: 1.2rem;
                        }
                    }
                }
            }
            .scene-mobile{
                padding: 3rem 1rem;
                background: rgb(242, 242, 242);
                .content{
                    margin-top: 3rem;
                    .electric-text{
                        margin-top: 1.8rem;
                        .text-title{
                            font-size: 1.5rem;
                            font-weight: 700;
                            text-align: center;
                        }
                        .text{
                            margin-top: 1rem;
                            font-size: 1.3rem;
                        }
                    }
                    .gas{
                        margin-top: 3rem;
                        .gas-img{
                            margin-bottom: 1.8rem;
                        }
                        .gas-text{
                            .text-title{
                                font-size: 1.5rem;
                                font-weight: 700;
                                text-align: center;
                            }
                            .text{
                                margin-top: 1rem;
                                font-size: 1.3rem;
                            }
                        }
                    }
                }
            }
            .case-mobile{
                margin-top: 5rem;
                .case-list{
                    position: relative;
                    margin-top: 3rem;
                    img{
                        height: 18rem;
                    }
                    .list-name{
                        position: absolute;
                        top: 3rem;
                        left: .8rem;
                        color: #fff;
                        font-size: 1.6rem;
                    }
                    .list-desc{
                        position: absolute;
                        top: 7rem;
                        left: 1.6rem;
                        color: #fff;
                        font-size: 1.3rem;
                    }
                }
            }
            .service{
                margin-top: 1rem;
                padding-bottom: 4rem;
                .title{
                    margin-top: 4rem;
                }
                .service-list{
                    width: 100vw;
                    padding: 0 2rem;
                    margin: 4rem auto;
                    .list-content{
                        position: relative;
                        border: .1rem solid hsla(0,0%,40%,.4);
                        padding: 1rem;
                        height: 130px;
                        background: #fff;
                        border-radius: .5rem;
                        cursor: pointer;
                        &:hover{
                            box-shadow: .5rem .5rem .5rem .5rem hsla(0,0%,67.8%,.35);
                        }
                        .service-title{
                            font-size: 1.5rem;
                            font-weight: 700;
                            line-height: 3rem;
                            color: #434343;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .tip{
                            color: #434343;
                            font-size: 1.2rem;
                        }
                        .service-img{
                            position: absolute;
                            width: 1.4rem;
                            height: 1.7rem;
                            right: 4rem;
                            top: 9rem;
                        }
                    }
                }
            }
        }
    }

</style>