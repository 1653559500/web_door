<template>
    <div class="service">
        <div class="main" v-if="screenWidth > 780">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="item">
                        <div class="title">政策指引</div>
                        <div class="content">
                            <ul>
                                <li>
                                    <div class="top">关于疫情防控、复工复产优惠政策落实情况的周报 （第二十五期 8月8日—8月14日）</div>
                                    <div class="desc">集团办公室会同总部各部门持续跟踪国家及地方政府优惠政策并补充更新工作落实情况，汇总形成第二十五期周报。</div>
                                    <div class="time">2020-08-18</div>
                                </li>
                                <li>
                                    <div class="top">工业和信息化部办公厅关于印发《中小企业数字化赋能专项行动方案》的通知</div>
                                    <div class="desc">以数字化网络化智能化赋能中小企业，助力中小企业疫情防控、复工复产和可持续发展。</div>
                                    <div class="time">2020-05-13</div>
                                </li>
                                <li>
                                    <div class="top">【财政部、税务总局】关于支持新型冠状病毒感染的肺炎疫情防控有关税收政策的公告</div>
                                    <div class="desc">将持续做好疫情防控重点保障物资生产企业相关优惠政策落实工作，指导相关单位积极与税务机关对接。</div>
                                    <div class="time">2020-04-23</div>
                                </li>
                                <li>
                                    <div class="top">【新疆】税务局关于疫情防控期间 免费寄递纸质空白发票的通告</div>
                                    <div class="desc">严格防控新型冠状病毒感染的肺炎疫情，确保我区绝大多数纳税人方便、快捷领用发票。</div>
                                    <div class="time">2020-04-10</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="item">
                        <div class="title">企业服务</div>
                        <div class="content" style="padding-bottom: 120px">
                            <el-row type="flex" class="row-con" justify="space-around">
                                <el-col :span="6">
                                    <div class="service-btn" title="仅跑一次">
                                        <img src="@/assets/images/飞机.svg" alt="">
                                        <span>仅跑一次</span>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="service-btn" title="公共服务清单">
                                        <img src="@/assets/images/清单.svg" alt="">
                                        <span>公共服务清单</span>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="service-btn" title="中介服务">
                                        <img src="@/assets/images/中介.svg" alt="">
                                        <span>中介服务</span>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row type="flex" class="row-con" justify="space-around">
                                <el-col :span="6">
                                    <div class="service-btn" title="重点服务">
                                        <img src="@/assets/images/重点.svg" alt="">
                                        <span>重点服务</span>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="service-btn" title="工程建设">
                                        <img src="@/assets/images/工程建设.svg" alt="">
                                        <span>工程建设</span>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="service-btn" title="服务建议">
                                        <img src="@/assets/images/建议.svg" alt="">
                                        <span>服务建议</span>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 30px;">
                <el-col :span="12">
                    <div class="item">
                        <div class="title">企业建议</div>
                        <div class="content">
                            <ul>
                                <li>
                                    <div class="top">《工业互联网创新发展行动计划》发布 安全成为未来三年“重头戏”</div>
                                    <div class="desc">在此背景下，亚信安全建议行驶在数字高速路上的工业企业，通过拉长纵深区域，在 IT 与 OT 之间的缓冲区内建立安全生态图，并以安全自适应为基础，精密编排各节点需要的安全能力，进而实现纵深防御的整体安全能力。</div>
                                    <div class="time">2021-01-22</div>
                                </li>
                                <li>
                                    <div class="top">新建5G基站3.9万个！去年重庆5G建设发展成效显著</div>
                                    <div class="desc">2020年，重庆新建5G基站3.9万个</div>
                                    <div class="time">2020-01-21</div>
                                </li>
                                <li>
                                    <div class="top">云端数据驱动智能制造，黑湖智造联手华为云打造极致SaaS服务</div>
                                    <div class="desc">近年来，SaaS产品备受各行各业的青睐，尤其在企业服务领域，越来越多的人开始谈论SaaS。</div>
                                    <div class="time">2020-01-16</div>
                                </li>
                                <li>
                                    <div class="top">西海岸新区工业互联网结硕果 “555”认定项目达98个</div>
                                    <div class="desc">在2020年伊始提出打造世界工业互联网之都的目标，努力抢占发展制高点。</div>
                                    <div class="time">2020-01-10</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="item">
                        <div class="title">办事指南</div>
                        <div class="content">
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column width="360" prop="name" label="事项名称" ></el-table-column>
                                <el-table-column prop="time"></el-table-column>
                                <el-table-column fixed="right">
                                    <template>
                                        <el-button type="text">办事指南</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="chat">
                <img title="在线咨询" src="@/assets/images/在线咨询.png" alt="">
            </div>
        </div>
        <div class="main-mobile" v-if="screenWidth < 780">
            <div class="item">
                <div class="title">政策指引</div>
                <div class="content">
                    <ul>
                        <li>
                            <div class="top">关于疫情防控、复工复产优惠政策落实情况的周报 （第二十五期 8月8日—8月14日）</div>
                            <div class="desc">集团办公室会同总部各部门持续跟踪国家及地方政府优惠政策并补充更新工作落实情况，汇总形成第二十五期周报。</div>
                            <div class="time">2020-08-18</div>
                        </li>
                        <li>
                            <div class="top">工业和信息化部办公厅关于印发《中小企业数字化赋能专项行动方案》的通知</div>
                            <div class="desc">以数字化网络化智能化赋能中小企业，助力中小企业疫情防控、复工复产和可持续发展。</div>
                            <div class="time">2020-05-13</div>
                        </li>
                        <li>
                            <div class="top">【财政部、税务总局】关于支持新型冠状病毒感染的肺炎疫情防控有关税收政策的公告</div>
                            <div class="desc">将持续做好疫情防控重点保障物资生产企业相关优惠政策落实工作，指导相关单位积极与税务机关对接。</div>
                            <div class="time">2020-04-23</div>
                        </li>
                        <li>
                            <div class="top">【新疆】税务局关于疫情防控期间 免费寄递纸质空白发票的通告</div>
                            <div class="desc">严格防控新型冠状病毒感染的肺炎疫情，确保我区绝大多数纳税人方便、快捷领用发票。</div>
                            <div class="time">2020-04-10</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="item">
                <div class="title">企业服务</div>
                <div class="content">
                    <el-row type="flex" class="row-con" justify="space-around">
                        <el-col :span="11">
                            <div class="service-btn" title="仅跑一次">
                                <img src="@/assets/images/飞机.svg" alt="">
                                <span>仅跑一次</span>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="service-btn" title="公共服务清单">
                                <img src="@/assets/images/清单.svg" alt="">
                                <span>公共服务清单</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-con" justify="space-around">
                        <el-col :span="11">
                            <div class="service-btn" title="重点服务">
                                <img src="@/assets/images/重点.svg" alt="">
                                <span>重点服务</span>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="service-btn" title="工程建设">
                                <img src="@/assets/images/工程建设.svg" alt="">
                                <span>工程建设</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-con" justify="space-around">
                        <el-col :span="11">
                            <div class="service-btn" title="中介服务">
                                <img src="@/assets/images/中介.svg" alt="">
                                <span>中介服务</span>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="service-btn" title="服务建议">
                                <img src="@/assets/images/建议.svg" alt="">
                                <span>服务建议</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="item">
                <div class="title">企业建议</div>
                <div class="content">
                    <ul>
                        <li>
                            <div class="top">《工业互联网创新发展行动计划》发布 安全成为未来三年“重头戏”</div>
                            <div class="desc">在此背景下，亚信安全建议行驶在数字高速路上的工业企业，通过拉长纵深区域，在 IT 与 OT 之间的缓冲区内建立安全生态图，并以安全自适应为基础，精密编排各节点需要的安全能力，进而实现纵深防御的整体安全能力。</div>
                            <div class="time">2021-01-22</div>
                        </li>
                        <li>
                            <div class="top">新建5G基站3.9万个！去年重庆5G建设发展成效显著</div>
                            <div class="desc">2020年，重庆新建5G基站3.9万个</div>
                            <div class="time">2020-01-21</div>
                        </li>
                        <li>
                            <div class="top">云端数据驱动智能制造，黑湖智造联手华为云打造极致SaaS服务</div>
                            <div class="desc">近年来，SaaS产品备受各行各业的青睐，尤其在企业服务领域，越来越多的人开始谈论SaaS。</div>
                            <div class="time">2020-01-16</div>
                        </li>
                        <li>
                            <div class="top">西海岸新区工业互联网结硕果 “555”认定项目达98个</div>
                            <div class="desc">在2020年伊始提出打造世界工业互联网之都的目标，努力抢占发展制高点。</div>
                            <div class="time">2020-01-10</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="item">
                <div class="title">办事指南</div>
                <div class="content">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column width="140" prop="name" label="事项名称" ></el-table-column>
                        <el-table-column prop="time"></el-table-column>
                        <el-table-column fixed="right">
                            <template>
                                <el-button type="text">办事指南</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="chat">
                <img title="在线咨询" src="@/assets/images/在线咨询.png" alt="">
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
                tableData: [
                    {name: '技术合同认定登记'},
                    {name: '最高投标限价（招标控制价）备案'},
                    {name: '固定资产投资项目节能审查（企业技术改造项目）'},
                    {name: '对外劳务合作业务备案（含变更）'},
                    {name: '对采取实际利润额预缴以外的其他企业所得税预缴方式的核定'},
                ],
                screenWidth: window.screen.width,
            }
        },
    }
</script>

<style  lang="scss">
    .service{
        .main{
            width: 90%;
            margin: 40px auto;
            padding: 18px;
            /*box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);*/
            .chat{
                position: fixed;
                bottom: 200px;
                right: 40px;
                cursor: pointer;
            }
            .item{
                padding: 20px;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                .title{
                    font-size: 20px;
                    color: #222;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                .content{
                    .el-table th{
                        background-color: rgb(241, 242, 243) !important;
                    }
                    li{
                        padding: 14px 0;
                        border-bottom: 1px solid #e9e9e9;
                    }
                    .top{
                        font-size: 15px;
                        color: #434343;
                        cursor: pointer;
                        overflow: hidden;
                        vertical-align: middle;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-weight: bold;
                        word-break: break-all;
                    }
                    .desc{
                        margin: 10px 0;
                        color: #999;
                        font-size: 13px;
                    }
                    .time{
                        font-size: 14px;
                        color: #555;
                    }
                    .row-con{
                        margin-top: 50px;
                    }
                    .service-btn{
                        height: 100px;
                        line-height: 68px;
                        padding: 16px;
                        border-radius: 6px;
                        color: #fff;
                        font-size: 18px;
                        text-align: center;
                        background: rgb(197, 5, 5);
                        cursor: pointer;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        img{
                            width: 26px;
                            height: 26px;
                            vertical-align: middle;
                            margin-right: 8px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 780px) {
        .service{
            .main-mobile{
                width: 96%;
                margin: 1rem auto;
                padding: 0 1.6rem;
                box-sizing: border-box;
                .chat{
                    position: fixed;
                    bottom: 11.6rem;
                    right: .8rem;
                    cursor: pointer;
                    img{
                        width: 2.2rem;
                        height: 2.2rem;
                    }
                }
                .item{
                    margin-top: 2rem;
                    padding: 1rem;
                    box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.1);
                    .title{
                        font-size: 1.8rem;
                        color: #222;
                        font-weight: 700;
                        margin-bottom: .8rem;
                    }
                    .content{
                        padding-bottom: 4rem;
                        .el-table th{
                            background-color: rgb(241, 242, 243) !important;
                        }
                        li{
                            padding: .8rem 0;
                            border-bottom: .1rem solid #e9e9e9;
                        }
                        .top{
                            font-size: 1.5rem;
                            color: #434343;
                            cursor: pointer;
                            overflow: hidden;
                            vertical-align: middle;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-weight: bold;
                            word-break: break-all;
                        }
                        .desc{
                            margin: 1rem 0;
                            color: #999;
                            font-size: 1.2rem;
                        }
                        .time{
                            font-size: 1.3rem;
                            color: #555;
                        }
                        .row-con{
                            margin-top: 2rem;
                        }
                        .service-btn{
                            height: 10rem;
                            line-height: 6.8rem;
                            padding: 1.6rem;
                            border-radius: .6rem;
                            color: #fff;
                            font-size: 1.8rem;
                            text-align: center;
                            background: rgb(197, 5, 5);
                            cursor: pointer;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            img{
                                width: 2.6rem;
                                height: 2.6rem;
                                vertical-align: middle;
                                margin-right: .8rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>