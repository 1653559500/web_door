<template>
    <div class="home">
        <el-row>
            <el-col :span="24">
                <el-carousel :height="screenWidth > 780 ? '500px' : '25rem'" class="carousel">
                    <el-carousel-item class="item1">
                        <img src="@/assets/images/banner-电表.png" alt="">
                        <div class="characteristic">特色应用</div>
                        <div class="title">电表识别服务</div>
                        <div class="content">
                            <p>快速迭代，新增电表8小时内完成训练</p>
                            <p>自适应增强识别模型，适应电表拍照倾斜、表面异物、强光照等情况</p>
                            <p>在保障识别率的前提下，提供图像算法，有利于节省流量和设备功耗</p>
                        </div>

                    </el-carousel-item>
                    <el-carousel-item class="item2">
                        <img src="@/assets/images/banner-冀东水泥.png" alt="">
                        <div class="characteristic">标杆案例</div>
                        <div class="title">冀东水泥“水泥互联网+供应链资源协同云平台”</div>
                        <div class="content">
                            <p>制造业生产精细化</p>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item class="item3">
                        <img src="@/assets/images/banner-五维.png" alt="">
                        <div class="characteristic">标杆案例</div>
                        <div class="title">五维航电数字化管理升级</div>
                        <div class="content">
                            <p>特种合金材料零部件数字化协同制造</p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <div class="main">
            <el-row>
                <el-col :span="24">
                    <div class="title">优秀解决方案</div>
                    <el-row type="flex" class="bar" justify="space-between">
                        <el-col :span="4">
                            <div class="bar-item">
                                <div class="object">
                                    <img src="@/assets/images/电器云.png" alt="">
                                </div>
                                <div class="item">电器云平台</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="bar-item">
                                <div class="object">
                                    <img src="@/assets/images/基站.png" alt="">
                                </div>
                                <div class="item">无人机智能基站巡检</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="bar-item">
                                <div class="object">
                                    <img src="@/assets/images/工业能源.png" alt="">
                                </div>
                                <div class="item">工业能源智能监测</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="bar-item">
                                <div class="object">
                                    <img src="@/assets/images/数据融合.png" alt="">
                                </div>
                                <div class="item">工业数据融合平台</div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="bar-item">
                                <div class="object">
                                    <img src="@/assets/images/振动.png" alt="">
                                </div>
                                <div class="item">机电设备振动监测</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="demand">
                <el-col :span="24">
                    <div class="title">需求对接</div>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="top">
                                <div class="left">
                                    <span class="crude">找需求</span>
                                    <el-button type="text">更多 ></el-button>
                                </div>
                                <div class="right">
                                    <el-button size="small" round>我要发需求</el-button>
                                </div>
                            </div>
                            <div>
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="产品" name="first">
                                        <el-table :data="leftData" style="width: 100%">
                                            <el-table-column prop="name" label="项目" ></el-table-column>
                                            <el-table-column prop="time" label="剩余时间" ></el-table-column>
                                            <el-table-column label="操作">
                                                <template>
                                                    <el-button type="text">立即报价</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-tab-pane>
                                    <el-tab-pane label="能力" name="second">能力</el-tab-pane>
                                </el-tabs>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="top">
                                <div class="left">
                                    <span class="crude">找产品</span>
                                    <el-button type="text">更多 ></el-button>
                                </div>
                                <div class="right">
                                    <el-button size="small" round>我要发产品</el-button>
                                </div>
                            </div>
                            <div>
                                <el-tabs v-model="activeName2" @tab-click="handleClick">
                                    <el-tab-pane label="产品" name="first2">
                                        <el-table :data="leftData" style="width: 100%">
                                            <el-table-column prop="name" label="产品" ></el-table-column>
                                            <el-table-column prop="time" label="价格" ></el-table-column>
                                            <el-table-column label="操作">
                                                <template>
                                                    <el-button type="text">立即购买</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-tab-pane>
                                    <el-tab-pane label="能力" name="second2">能力</el-tab-pane>
                                </el-tabs>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="active" v-if="screenWidth > 780">
                <el-col :span="24">
                    <div class="title">资讯与活动</div>
                    <el-row type="flex" class="bar" justify="space-between">
                        <el-col :span="5">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots1.jpg" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="东信北邮受邀出席中国移动《5G VoNR 白皮书》发布仪式">
                                        东信北邮受邀出席中国移动《5G VoNR 白皮书》发布仪式
                                    </p>
                                    <p class='prots-desc'>
                                        2020年11月21日，第八届中国移动全球合作伙伴大会在广州盛大开幕，中国移动研究院在本次大会上发布了《5GVoNR+白皮书》，东信北邮作为中国移动的长期合作伙伴及该白皮书的联合撰写单位，受邀出席了本次发布仪式。
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots2.jpg" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="东信北邮助力中国移动进军5G行业网络开放">
                                        东信北邮助力中国移动进军5G行业网络开放
                                    </p>
                                    <p class='prots-desc'>
                                        近日，东信北邮成功中标中国移动研究院5G行业网络开放共享原型系统项目，该项目是探索5G能力开放与行业应用的里程碑式的项目，对于中国移动乃至我国的5G产业纵深发展、实现5G赋能的各行业产业升级都具有重大的战略意义。
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots3.png" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="廖建新：“业务网络”的开拓者，“顶天立地”的科学人">
                                        廖建新：“业务网络”的开拓者，“顶天立地”的科学人
                                    </p>
                                    <p class='prots-desc'>
                                        文章来源：【科学中国人】—记录那些我们值得尊敬的人·2020年第15期
                                        近年来，以5G为代表的信息通信技术的发展和应用正在全球范围内激发新一轮科技革命和产业变革。与此同时，国际环境日趋复
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img class="circle-arrow" src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots4.png" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="羽球会挚友 我们正青春">
                                        “羽球会挚友 我们正青春”
                                    </p>
                                    <p class='prots-desc'>
                                        随着EB成都团队的不断壮大，截至今年7月，成都人员已经达到260人，包含13个部门，为了加强部门之间的横向联系，我们组织了主题为“阳光、绿色、愉悦”的羽毛球友谊赛。本次比赛在成都各部门联络员的
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="active" v-if="screenWidth < 780">
                <el-col :span="24">
                    <div class="title">资讯与活动</div>
                    <el-row type="flex" class="bar" justify="space-between">
                        <el-col :span="11">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots1.jpg" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="东信北邮受邀出席中国移动《5G VoNR 白皮书》发布仪式">
                                        东信北邮受邀出席中国移动《5G VoNR 白皮书》发布仪式
                                    </p>
                                    <p class='prots-desc'>
                                        2020年11月21日，第八届中国移动全球合作伙伴大会在广州盛大开幕，中国移动研究院在本次大会上发布了《5GVoNR+白皮书》，东信北邮作为中国移动的长期合作伙伴及该白皮书的联合撰写单位，受邀出席了本次发布仪式。
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots2.jpg" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="东信北邮助力中国移动进军5G行业网络开放">
                                        东信北邮助力中国移动进军5G行业网络开放
                                    </p>
                                    <p class='prots-desc'>
                                        近日，东信北邮成功中标中国移动研究院5G行业网络开放共享原型系统项目，该项目是探索5G能力开放与行业应用的里程碑式的项目，对于中国移动乃至我国的5G产业纵深发展、实现5G赋能的各行业产业升级都具有重大的战略意义。
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="bar" justify="space-between">
                        <el-col :span="11">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots3.png" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="廖建新：“业务网络”的开拓者，“顶天立地”的科学人">
                                        廖建新：“业务网络”的开拓者，“顶天立地”的科学人
                                    </p>
                                    <p class='prots-desc'>
                                        文章来源：【科学中国人】—记录那些我们值得尊敬的人·2020年第15期
                                        近年来，以5G为代表的信息通信技术的发展和应用正在全球范围内激发新一轮科技革命和产业变革。与此同时，国际环境日趋复
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img class="circle-arrow" src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="pp1">
                                <div class="prots-img">
                                    <img src="@/assets/images/prots4.png" alt="">
                                </div>
                                <div class="prots-text">
                                    <p class="prots-title" title="羽球会挚友 我们正青春">
                                        “羽球会挚友 我们正青春”
                                    </p>
                                    <p class='prots-desc'>
                                        随着EB成都团队的不断壮大，截至今年7月，成都人员已经达到260人，包含13个部门，为了加强部门之间的横向联系，我们组织了主题为“阳光、绿色、愉悦”的羽毛球友谊赛。本次比赛在成都各部门联络员的
                                    </p>
                                </div>
                                <div class="prots-icon">
                                    <div class="icon">
                                        <img src="@/assets/images/circle-arrow.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <footer-bottom></footer-bottom>
    </div>

</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                leftData: [
                    {name: '科学城7号地块钢筋采购', time: '剩 16 天'},
                    {name: 'T3E中转扩容改造结构加固项目钢板螺纹钢材料...', time: '剩 30 天'},
                    {name: '金属材料', time: '剩 24 天'},
                    {name: '印制板采购', time: '剩 1 天'},
                    {name: '印制板采购', time: '剩 1 天'},
                ],
                rightData: [
                    {name: '店里终端杆直角杆 光伏基础钢杆 双回路耐张塔', time: '6500.00元'},
                    {name: '高压线路电力钢杆 耐张10KV电力钢杆单回路钢...', time: '6500.00元'},
                    {name: '电力钢杆钢桩基础打桩机电力钢杆直线转角杆', time: '6500.00元'},
                    {name: '35KV电力钢管杆 双回路终端电力钢杆16米电力...', time: '6500.00元'},
                    {name: '厂家生产电力钢杆输电钢管杆镀锌钢管杆架空...', time: '6500.00元'},
                ],
                activeName: 'first',
                activeName2: 'first2',
                screenWidth: window.screen.width,
            }
        },
        methods:{
            handleClick(){}
        }
    }
</script>

<style  lang="scss">
    .home{
        .carousel{
            color: #fff;
            position: relative;
            .characteristic{
                position: absolute;
                top: 40px;
                left: 50px;
                font-size: 16px;
                font-weight: 600;
            }
            .title{
                position: absolute;
                top: 60px;
                left: 50px;
                font-size: 20px;
                font-weight: 600;
            }
            .content{
                position: absolute;
                right: 80px;
                bottom: 60px;
                font-size: 14px;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
        .main{
            width: 76%;
            margin: 40px auto;
            .title{
                text-align: center;
                width: 172px;
                padding: 0 10px;
                margin: 20px auto;
                font-size: 24px;
                font-weight: 600;
                border-left: 4px solid #1875F0;
                border-right: 4px solid #1875F0;
            }
            .bar{
                .bar-item{
                    cursor: pointer;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                    color: #757575;
                }
                .object{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .item{
                    padding: 20px 0;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 800;
                }
            }
            .demand{
                margin-top: 50px;
                .el-tabs__nav-wrap{
                    width: 100% !important;
                }
                .top{
                    height: 30px;
                    line-height: 30px;
                    .left{
                        float: left;
                        .crude{
                            font-size: 18px;
                            font-weight: bold;
                            padding-left: 8px;
                            margin-right: 14px;
                            border-left: 2px solid #1875F0;
                        }
                    }
                    .right{
                        float: right;
                        .el-button{
                            color: #1875F0 !important;
                            border: 1px solid #1875F0 !important;
                        }
                    }
                }
            }
            .active{
                margin-top: 50px;
                .pp1{
                    background-color: #fff;
                    border: 1px solid #ddd;
                    box-sizing: border-box;
                    margin-bottom: 70px;
                    box-shadow: #d2d2d2 0 0 2px;
                    &:hover{
                        transition-duration: 300ms;
                        box-shadow: 0 5px 38px #e2e2e2;
                        border-bottom: 3px solid#2E82C2;
                        box-sizing: border-box;
                        margin-top: -2px;
                    }
                    .prots-img{
                        @media (max-width: 1280px) {
                            height: 130px;
                        }
                        height: 168px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .prots-text{
                        margin: 15px auto 20px;
                        width: 90%;
                        .prots-title{
                            color: #666666;
                            margin-top: 20px;
                            word-break: break-all;
                            line-height: 20px;
                            height: 20px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 18px;
                            margin-bottom: 10px;
                        }
                        .prots-desc{
                            @media (max-width: 1280px){
                                max-height: 60px;
                                -webkit-line-clamp: 3;
                            }
                            margin-top: 20px;
                            color: #868789;
                            max-height: 100px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            line-height: 20px;
                            display: -webkit-box;    /* 对象作为弹性伸缩模型显示 */
                            -webkit-line-clamp: 5;  /* 块元素显示的文本行数 */
                            -webkit-box-orient: vertical;  /* 从上到下排列子元素 */
                            font-size: 13px;
                        }
                    }
                    .prots-icon{
                        position: relative;
                        height: 80px;
                        .icon{
                            position: absolute;
                            left: 50%;
                            margin-left: -23px;
                            width: 47px;
                            height: 47px;
                            img{
                                cursor: pointer;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 780px) {
        .home{
            .carousel{
                color: #fff;
                position: relative;
                .characteristic{
                    position: absolute;
                    top: 2rem;
                    left: 2.5rem;
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                .title{
                    position: absolute;
                    top: 4rem;
                    left: 2.5rem;
                    font-size: 1.9rem;
                    font-weight: 600;
                }
                .content{
                    padding: 0 1rem;
                    position: absolute;
                    right: 1rem;
                    bottom: 4rem;
                    font-size: 1.4rem;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .main{
                width: 92%;
                margin: 2rem auto;
                .title{
                    text-align: center;
                    width: 14.2rem;
                    padding: 0 .8rem;
                    margin: 2rem auto;
                    font-size: 1.8rem;
                    font-weight: 600;
                    border-left: .4rem solid #1875F0;
                    border-right: .4rem solid #1875F0;
                }
                .bar{
                    .bar-item{
                        cursor: pointer;
                        height: 12.5rem;
                        box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.1);
                        color: #757575;
                    }
                    .object{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .item{
                        margin-top: 1rem;
                        text-align: center;
                        font-size: 1.2rem;
                        font-weight: 800;
                    }
                }
                .demand{
                    margin-top: 2rem;
                    .el-tabs__nav-wrap{
                        width: 100% !important;
                    }
                    .top{
                        height: 3rem;
                        line-height: 3rem;
                        .left{
                            float: left;
                            .crude{
                                font-size: 1.5rem;
                                font-weight: bold;
                                padding-left: .8rem;
                                margin-right: 1.4rem;
                                border-left: .22rem solid #1875F0;
                            }
                        }
                        .right{
                            float: right;
                            .el-button{
                                color: #1875F0 !important;
                                border: .1rem solid #1875F0 !important;
                            }
                        }
                    }
                }
                .active{
                    margin-top: 2rem;
                    .pp1{
                        height: 25rem;
                        background-color: #fff;
                        border: .1rem solid #ddd;
                        box-sizing: border-box;
                        margin-bottom: 4rem;
                        box-shadow: #d2d2d2 0 0 .2rem;
                        &:hover{
                            transition-duration: 300ms;
                            box-shadow: 0 .5rem 3.8rem #e2e2e2;
                            border-bottom: .3rem solid #2E82C2;
                            box-sizing: border-box;
                            margin-top: -.2rem;
                        }
                        .prots-img{
                            height: 9rem;
                            img{
                                width: 100%;
                                height: 9rem;
                            }
                        }
                        .prots-text{
                            margin: 1.5rem auto;
                            width: 90%;
                            .prots-title{
                                color: #666666;
                                margin-top: 1.5rem;
                                word-break: break-all;
                                line-height: 1.5rem;
                                height: 1.5rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-size: 1.6rem;
                                margin-bottom: .1rem;
                            }
                            .prots-desc{
                                margin-top: 1rem;
                                color: #868789;
                                max-height: 5.6rem;
                                line-height: 2rem;
                                max-height: 100px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;    /* 对象作为弹性伸缩模型显示 */
                                -webkit-line-clamp: 3;  /* 块元素显示的文本行数 */
                                -webkit-box-orient: vertical;  /* 从上到下排列子元素 */
                                word-break: break-all;
                                font-size: 1.2rem;
                            }
                        }
                        .prots-icon{
                            position: relative;
                            .icon{
                                position: absolute;
                                left: 50%;
                                margin-left: -1.5rem;
                                width: 3rem;
                                height: 3rem;
                                img{
                                    cursor: pointer;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>