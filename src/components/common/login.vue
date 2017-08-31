<style scoped>

.login {
  position: absolute;
  width: 100%;
  height: 100%;  
  background-color: #666 !important; 
  background: url(../../assets/img/login/login3.jpg);
  background-size: 100% 100%;
}

.login .logo {
  margin: 60px auto 20px auto;
  padding: 15px;
  text-align: center; }

.login .content {
  background: url(../../assets/img/bg-white-lock.png) repeat;
  width: 360px;
  margin: 0 auto;
  margin-bottom: 0px;
  padding: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px; }

/* footer copyright */
.login .copyright {
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  color: #eee;
  font-size: 13px; }

@media (max-width: 480px) {
  /***
  Login page
  ***/
  .login .logo {
    margin-top: 10px; }
  .login .content {
    padding: 30px;
    width: 222px; }
  .login .content h3 {
    font-size: 22px; }
  .login .checkbox {
    font-size: 13px; } }


</style>

<template>
    <div class="login">
        <div class="logo">
            <router-link to="login">
                <img src="../../assets/img/mylogo.png" width="150">
            </router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="copyright">
            <a href="https://github.com/defineiot" title="迪飞恩物联网网络科技有限公司" target="_blank">迪飞恩物联网网络科技有限公司</a>
            <br/>Copyright &copy; 2017-2017 CINCC ALL Rights Reserved
        </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
            }
        },
}
</script>
