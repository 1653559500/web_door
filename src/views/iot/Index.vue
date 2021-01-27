<template>
    <div>
        <div class="main">
            <el-row type="flex" class="row" justify="space-between">
                <el-col :span="7">
                    <div class="item" @click="goDetail">
                        <div class="item-img">
                            <img src="@/assets/images/智能物联云-智能抄表.png" alt="">
                        </div>
                        <div class="title">智能抄表系统</div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="item" @click="goDetail">
                        <div class="item-img">
                            <img src="@/assets/images/智能物联云-工业能源.png" alt="">
                        </div>
                        <div class="title">工业能源智能监测系统</div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="item" @click="goDetail">
                        <div class="item-img">
                            <img src="@/assets/images/智能物联云-物流.png" alt="">
                        </div>
                        <div class="title">智慧物流管理系统</div>
                    </div>
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
        padding: 30px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        .item{
            cursor: pointer;
            height: 290px;
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
                height: 210px;
                img{
                    width: 100%;
                    height: 210px;
                }
            }
            .title{
                margin-top: 28px;
                text-align: center;
                font-size: 18px;
                font-weight: 700;
            }
        }
    }
    @media (max-width: 780px) {
        .main{
            width: 96%;
            min-height: 45rem;
            margin: 2rem auto;
            padding: 2rem 1rem;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            .item{
                cursor: pointer;
                height: 16rem;
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
                    height: 10rem;
                    img{
                        width: 100%;
                        height: 10rem;
                    }
                }
                .title{
                    margin-top: 1rem;
                    text-align: center;
                    font-size: 1.4rem;
                    font-weight: 700;
                }
            }
        }
    }
</style>