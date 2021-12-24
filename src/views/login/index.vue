<template>
  <div class="login">
      <!-- 登录框 -->
    <el-card class="login-card">
        <!-- logo图片 -->
        <div class="title">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单 -->
        <el-form  style="margin-top:20px">
            <!-- 手机号 -->
            <el-form-item>
                <el-input placeholder="请输入手机号"></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item>
                <el-input style="width:68%" placeholder="验证码"></el-input>
                 <el-button style="float:right" plain>发送验证码</el-button>
            </el-form-item>
            <!-- 用户协议 -->
            <el-form-item>
                <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item>
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login {
    background: url(../../assets/img/login_bg.jpg);
    background-size: cover;//绝对不留白
    height: 100vh;//可视区域100%
    display: flex;//flex布局
    justify-content: center;//水平居中
    align-items: center;//垂直居中
    .login-card {
        width: 440px;
        height: 330px;
        .title {
            text-align: center;
            img {
                height: 45px;
            }
        }
    }
}
</style>
