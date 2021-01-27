<template>
    <div class="supply">
        <div class="main clearfix">
            <div class="head">
<!--                <span class="topic">类型</span>-->
<!--                <el-button type="text" style="margin-left: 30px;">全部</el-button>-->
<!--                <el-button type="text">产品</el-button>-->
<!--                <el-button type="text">能力</el-button>-->
                <el-tabs v-model="activeName">
                    <el-tab-pane label="需求" name="first">
                        <div class="search">
                            <div style="float: right">
                                <el-input v-model="searchKey" placeholder="请输入需求名称"></el-input>
                                <el-button type="primary" size="small">搜 索</el-button>
                            </div>
                        </div>
                        <div class="supply-con">
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">微型传感器套件</div>
                                        <div class="goods-count">采购量：<span>1套</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-02</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">9天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">机械设备>其他设备>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">天津市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">天津津航技术物理研究所</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">港务大道三站电装</div>
                                        <div class="goods-count">采购量：<span>1批</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-013</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">14天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">备品备件、五金件>工艺装备>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">西安市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">西安航天自动化股份有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">陀螺仪</div>
                                        <div class="goods-count">采购量：<span>1只</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-02</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">9天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">机械设备>其他设备>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">天津市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">天津津航技术物理研究所</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">库区配电电装</div>
                                        <div class="goods-count">采购量：<span>1批</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-12</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">18天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">备品备件、五金件>工艺装备>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">西安市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">西安航天自动化股份有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">电源模块（朝阳电源）</div>
                                        <div class="goods-count">采购量：<span>1批</span></div>
                                        <div class="goods-count">已报价：<span>1</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-22</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">7天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">电子元器件>集成电路>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">天津市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">天津津航技术物理研究所</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">武穴市第一人民医院传染病大楼建设项目商品混凝土采购合同</div>
                                        <div class="goods-count">采购量：<span>1批</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-22</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">29天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">备品备件、五金件>工艺装备>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">北京市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">中航天建设工程集团有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">维修改造</div>
                                        <div class="goods-count">采购量：<span>1批</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-18</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">6天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">备品备件、五金件>工艺装备>其他</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">成都市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">成都航天通信设备有限责任公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">电容005</div>
                                        <div class="goods-count">采购量：<span>1只</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-23</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">30天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">电子元器件>被动器件>电容</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">北京市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">北京航天新立科技有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">前端组件JL</div>
                                        <div class="goods-count">采购量：<span>7套</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-27</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">34天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">设计>电气设计</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">南京市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">南京电子设备研究所</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <div class="goods-top">
                                        <div class="goods-title">T3E中转扩容改造结构加固项目劳务分包</div>
                                        <div class="goods-count">采购量：<span>1批</span></div>
                                        <div class="goods-count">已报价：<span>0</span></div>
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-params">
                                            <p class="params-list">
                                                <span class="params-key">发布时间：</span>
                                                <span class="params-val">2021-01-22</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">剩余时间：</span>
                                                <span class="params-val">29天</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">采购分类：</span>
                                                <span class="params-val">其他>建筑工程</span>
                                            </p>
                                            <p class="params-list">
                                                <span class="params-key">所在地区：</span>
                                                <span class="params-val">北京市</span>
                                            </p>
                                        </div>
                                        <div class="goods-comp">中航天建设工程集团有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                            <img class="img-right" src="@/assets/images/短信.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="goods-opera">
                                        <p>立即报价</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="产品" name="second">
                        <div class="search">
                           <div style="float: right;">
                               <el-input v-model="searchKey" placeholder="请输入产品名称"></el-input>
                               <el-button type="primary" size="small">搜 索</el-button>
                           </div>
                        </div>
                        <div class="product">
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product1.jpg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">商议</div>
                                        <div class="goods-title">汽车模具加工</div>
                                        <div class="goods-comp">元正鑫模具加工</div>
                                        <div class="goods-social-cont"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product2.png" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">商议</div>
                                        <div class="goods-title">注塑模具</div>
                                        <div class="goods-comp">东莞市佳普模具有限公司</div>
                                        <div class="goods-social-cont"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product3.jpeg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">￥11010.00</div>
                                        <div class="goods-title">固定装置部件</div>
                                        <div class="goods-comp">湖北三江航天江北机械工程有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product4.jpeg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">￥907298.00</div>
                                        <div class="goods-title">蒸发结晶部件</div>
                                        <div class="goods-comp">湖北三江航天江北机械工程有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product5.jpeg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">￥5000.00</div>
                                        <div class="goods-title">支撑装置组合</div>
                                        <div class="goods-comp">湖北三江航天江北机械工程有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product6.jpeg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">￥504100.00</div>
                                        <div class="goods-title">干燥设备支撑组合</div>
                                        <div class="goods-comp">湖北三江航天江北机械工程有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product7.jpeg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">￥5000.00</div>
                                        <div class="goods-title">背银浆料</div>
                                        <div class="goods-comp">长沙新材料产业研究院有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/aggree.svg" alt="">
                                            <img src="@/assets/images/approve_3.svg" alt="">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                <div class="goods-img">
                                    <img src="@/assets/images/product8.jpeg" alt="">
                                </div>
                                <div class="goods-content">
                                    <div class="goods-price">￥250000.00</div>
                                    <div class="goods-title">SF15双捻机</div>
                                    <div class="goods-comp">湖北三江航天江北机械工程有限公司</div>
                                    <div class="goods-social-cont">
                                        <img src="@/assets/images/aggree.svg" alt="">
                                        <img src="@/assets/images/approve_3.svg" alt="">
                                        <img src="@/assets/images/approve_cert.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product9.png" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">商议</div>
                                        <div class="goods-title">冲压制品的设计与生产</div>
                                        <div class="goods-comp">东莞市台群五金科技有限公司</div>
                                        <div class="goods-social-cont"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <div class="goods-item">
                                    <div class="goods-img">
                                        <img src="@/assets/images/product0.jpeg" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-price">商议</div>
                                        <div class="goods-title">施耐德开关柜</div>
                                        <div class="goods-comp">北京福斯特开关设备有限公司</div>
                                        <div class="goods-social-cont">
                                            <img src="@/assets/images/approve_cert.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
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
                activeName:'first',
                searchKey: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .supply{
        .main{
            width: 80%;
            min-height: 1300px;
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
                .search{
                    padding-left: 10px;
                    height: 40px;
                    .el-input{
                        width: 240px;
                    }
                    .el-button{
                        margin-left: 16px;
                    }
                }

                .supply-con{
                    margin-top: 30px;
                    .item{
                        padding: 0 5px;
                        box-sizing: border-box;
                        width: 20%;
                        float: left;
                        .goods{
                            background: #fff;
                            border: 1px solid #e9e9e9;
                            margin-bottom: 20px;
                            &:hover{
                                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
                            }
                            .goods-top{
                                box-sizing: border-box;
                                padding: 16px 8px;
                                background: #f4f4f4;
                                .goods-title{
                                    height: 44px;
                                    margin-bottom: 16px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    word-break: break-all;
                                }
                                .goods-count{
                                    font-size: 12px;
                                    display: inline-block;
                                    width: auto;
                                    margin-right: 8px;
                                    color: #444;
                                    margin-bottom: 5px;
                                    white-space: nowrap;
                                    word-break: break-all;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    span{
                                        color: #1875F0;
                                    }
                                }
                            }
                            .goods-content{
                                padding: 15px;
                                box-sizing: border-box;
                                .goods-params{
                                    box-sizing: border-box;
                                    height: 156px;
                                    padding: 10px 0;
                                    .params-list{
                                        padding-bottom: 8px;
                                        line-height: 25px;
                                        overflow: hidden;
                                        word-break: break-all;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        font-size: 12px;
                                        .params-key{
                                            color: #999;
                                            margin-right: 2px;
                                        }
                                        .params-val{
                                            color: #222;
                                        }

                                    }
                                }
                                .goods-comp{
                                    min-height: 20px;
                                    width: 100%;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    word-break: break-all;
                                    font-size: 14px;
                                    color: #666;
                                }

                                .goods-social-cont{
                                    position: relative;
                                    padding-bottom: 16px;
                                    height: 42px;
                                    overflow: hidden;
                                    box-sizing: border-box;
                                    img{
                                        cursor: pointer;
                                        margin-right: 4px;
                                    }
                                    .img-right{
                                        position: absolute;
                                        right: 8px;
                                    }
                                }
                            }
                            .goods-opera{
                                border-top: 1px solid #e9e9e9;
                                width: 100%;
                                height: 50px;
                                p{
                                    display: block;
                                    cursor: pointer;
                                    width: 100%;
                                    height: 100%;
                                    text-align: center;
                                    line-height: 50px;
                                    font-size: 18px;
                                    color: #222;
                                    &:hover{
                                        background: #1875F0;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
                .product{
                    margin-top: 30px;
                    .list{
                        padding: 0 5px;
                        box-sizing: border-box;
                        width: 20%;
                        float: left;
                        .goods-item{
                            background: #fff;
                            border: 1px solid #e9e9e9;
                            margin-bottom: 20px;
                            cursor: pointer;
                            &:hover{
                                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
                            }
                            .goods-img{
                                height: 206px;
                                overflow: hidden;
                                position: relative;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .goods-content{
                                min-height: 170px;
                                box-sizing: border-box;
                                padding: 15px;
                                .goods-price{
                                    width: 100%;
                                    font-size: 18px;
                                    color: #1875f0;
                                    margin-bottom: 10px;
                                    white-space: nowrap;
                                    word-break: break-all;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                }
                                .goods-title{
                                    height: 30px;
                                    font-size: 16px;
                                    color: #222;
                                    width: 100%;
                                    line-height: 22px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                                .goods-comp{
                                    min-height: 20px;
                                    width: 100%;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    word-break: break-all;
                                    font-size: 14px;
                                    color: #666;
                                }
                                .goods-social-cont{
                                    position: relative;
                                    padding-bottom: 16px;
                                    height: 42px;
                                    overflow: hidden;
                                    box-sizing: border-box;
                                    img{
                                        cursor: pointer;
                                        margin-right: 4px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }
    @media (max-width: 780px) {
        .supply{
            .main{
                width: 96%;
                min-height: 530rem;
                margin: 2rem auto;
                padding: 1.8rem;
                box-shadow: 0 .2rem 1.2rem 0 rgba(0,0,0,.1);
                .head{
                    position: relative;
                    height: 4.8rem;
                    line-height: 4.8rem;
                    border-bottom: .2rem solid #797979;
                    .topic{
                        display: inline-block;
                        height: 4.6rem;
                        padding: 0 2rem;
                        background: #CCCCCC;
                    }
                    .search{
                        padding-left: 1rem;
                        height: 4rem;
                        .el-input{
                            width: 18rem;
                        }
                        .el-button{
                            margin-left: 1.4rem;
                        }
                    }

                    .supply-con{
                        margin-top: 3rem;
                        .item{
                            padding: 0 .5rem;
                            box-sizing: border-box;
                            width: 100%;
                            float: left;
                            .goods{
                                background: #fff;
                                border: .1rem solid #e9e9e9;
                                margin-bottom: 2rem;
                                &:hover{
                                    box-shadow: 0 .6rem 1rem 0 rgba(0, 0, 0, 0.1);
                                }
                                .goods-top{
                                    box-sizing: border-box;
                                    padding: 1.6rem .8rem;
                                    background: #f4f4f4;
                                    .goods-title{
                                        height: 4.4rem;
                                        margin-bottom: 1.6rem;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        word-break: break-all;
                                    }
                                    .goods-count{
                                        font-size: 1.2rem;
                                        display: inline-block;
                                        width: auto;
                                        margin-right: .8rem;
                                        color: #444;
                                        margin-bottom: .5rem;
                                        white-space: nowrap;
                                        word-break: break-all;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        span{
                                            color: #1875F0;
                                        }
                                    }
                                }
                                .goods-content{
                                    padding: 1.5rem;
                                    box-sizing: border-box;
                                    .goods-params{
                                        box-sizing: border-box;
                                        height: 15.6rem;
                                        padding: 1rem 0;
                                        .params-list{
                                            padding-bottom: .8rem;
                                            line-height: 2.5rem;
                                            overflow: hidden;
                                            word-break: break-all;
                                            text-overflow: ellipsis;
                                            white-space: nowrap;
                                            font-size: 1.2rem;
                                            .params-key{
                                                color: #999;
                                                margin-right: .2rem;
                                            }
                                            .params-val{
                                                color: #222;
                                            }

                                        }
                                    }
                                    .goods-comp{
                                        min-height: 2rem;
                                        width: 100%;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        word-break: break-all;
                                        font-size: 1.4rem;
                                        color: #666;
                                    }

                                    .goods-social-cont{
                                        position: relative;
                                        padding-bottom: 1.6rem;
                                        height: 4.2rem;
                                        overflow: hidden;
                                        box-sizing: border-box;
                                        img{
                                            cursor: pointer;
                                            margin-right: .4rem;
                                        }
                                        .img-right{
                                            position: absolute;
                                            right: .8rem;
                                        }
                                    }
                                }
                                .goods-opera{
                                    border-top: .1rem solid #e9e9e9;
                                    width: 100%;
                                    height: 5rem;
                                    p{
                                        display: block;
                                        cursor: pointer;
                                        width: 100%;
                                        height: 100%;
                                        text-align: center;
                                        line-height: 5rem;
                                        font-size: 1.8rem;
                                        color: #222;
                                        &:hover{
                                            background: #1875F0;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .product{
                        margin-top: 3rem;
                        .list{
                            padding: 0 .5rem;
                            box-sizing: border-box;
                            width: 100%;
                            float: left;
                            .goods-item{
                                background: #fff;
                                border: .1rem solid #e9e9e9;
                                margin-bottom: 2rem;
                                cursor: pointer;
                                &:hover{
                                    box-shadow: 0 .6rem 1rem 0 rgba(0, 0, 0, 0.1);
                                }
                                .goods-img{
                                    height: 20.6rem;
                                    overflow: hidden;
                                    position: relative;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                                .goods-content{
                                    min-height: 17rem;
                                    box-sizing: border-box;
                                    padding: 1.5rem;
                                    .goods-price{
                                        width: 100%;
                                        font-size: 1.8rem;
                                        color: #1875f0;
                                        margin-bottom: 1rem;
                                        white-space: nowrap;
                                        word-break: break-all;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                    }
                                    .goods-title{
                                        height: 3rem;
                                        font-size: 1.6rem;
                                        color: #222;
                                        width: 100%;
                                        line-height: 2.2rem;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }
                                    .goods-comp{
                                        min-height: 2rem;
                                        width: 100%;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        word-break: break-all;
                                        font-size: 1.4rem;
                                        color: #666;
                                    }
                                    .goods-social-cont{
                                        position: relative;
                                        padding-bottom: 1.6em;
                                        height: 4.2rem;
                                        overflow: hidden;
                                        box-sizing: border-box;
                                        img{
                                            cursor: pointer;
                                            margin-right: .4rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }

</style>