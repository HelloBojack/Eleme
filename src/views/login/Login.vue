<template>
  <div class="login">

    <van-icon name="arrow-left" @click="$router.go(-1);" />
  
    <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">

    <div class="loginForm">
      <van-field placeholder="手机号" />
      

      <van-field clearable placeholder="验证码">
      <van-button slot="button" size="normal" type="info">发送验证码</van-button>
      </van-field>
        
    </div>

    <div class="message">
      新用户登录即自动注册，并表示已同意 <a href="#">《用户服务协议》</a>和<a href="#">《隐私权政策》</a>
    </div>

    <van-button size="large" type="info">登录</van-button>

    <div class="message">
      关于我们
    </div>
  </div>
</template>

<style lang="css">
  .login {
    padding: 10%;
    height: 100%;
    background: #fff;
  }

  .login img {
    width: 45%;
  }

  .login .loginForm {
    margin-top: 10%
  }

  .login .loginForm input {
    width: 100%;
    height: 50px;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    -webkit-appearance: none;
  }
  .login .van-cell:not(:last-child)::after{
    border: none;
  }
  .login .message {
    color:#999;
    padding: 10px 16px;
    text-align: left;
  }
  .login .message a {
    color:#2395ff
  }
  .login .message:last-child{
    text-align: center;
  }
  .van-icon.van-icon-arrow-left{
    position: absolute;
    left: 5px;
    top: 10px;
    color: #323233;
    font-size:30px;
  }
</style>