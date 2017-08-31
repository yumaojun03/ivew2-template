<style scoped>
h1, p {
  color: #eee; 
}
</style>

<template>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item>
            <h1>用户注册</h1>
        </Form-item>
        <p style="font-size: 14px;"> 已有账号，请<router-link to="login">登录</router-link></p>
        <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="请输入用户名称">
                <Icon type="person" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码8-16位数字和字母组合">
                <Icon type="locked" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="passwordConfirm">
            <Input type="password" v-model="formInline.passwordConfirm" placeholder="请重新输入密码">
                <Icon type="locked" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="tel">
            <Input type="text" v-model="formInline.tel" placeholder="请输入手机号">
                <Icon type="android-call" slot="prepend"></Icon>
            </Input> 
        </Form-item>
        <Form-item prop="code">
            <Input type="text" v-model="formInline.code" placeholder="验证码">
                <Icon type="compose" slot="prepend"></Icon>
                <Button v-if="show" slot="append" disabled>{{count}}s后重新获取</Button>
                <Button v-else slot="append" @click="getCode()">获取验证码</Button>
            </Input>
        </Form-item>
        <Form-item>
            <Checkbox v-model="agree">阅读并同意<a href="javascript:;">《迪飞物联网技术有限公司网站服务协议》</a>及相关服务条款</Checkbox>
        </Form-item>
        <Form-item>
            <Button type="primary" style="float:left;" @click="handleCancel()"> 回登录页 </Button>
            <Button v-if="agree" type="primary" style="float:right;" @click="handleSubmit('formInline')"> 提交 </Button>
            <Button v-else style="float:right;" disabled> 提交 </Button>
        </Form-item>
    </i-form>
</template>
    
<script>
export default {
    data() {
        return {
            timer: null,
            count: 60,
            show: false,
            agree: false,
            formInline: {
                user: '',
                password: '',
                passwordConfirm: '',
                tel: '',
                code: '',
            },
            ruleInline: {
                user: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '密码8-16位数字和字母组合',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    min: 8,
                    message: '密码长度不能小于8位',
                    trigger: 'blur'
                }],
                passwordConfirm:[{
                    required: true,
                    message: '密码8-16位数字和字母组合',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    min: 8,
                    message: '密码长度不能小于8位',
                    trigger: 'blur'
                }],
                tel: [{
                    required: true,
                    message: '请输入手机号',
                    trigger: 'blur'
                }, {
                    len: 11,
                    message: '请输入正确的手机号码',
                    trigger: 'blur'
                }],
                code: [{
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let url = '/user/register';
                    this.axios.post(url, {
                        userId: this.formInline.user,
                        //to do MD5加密 
                        password: this.formInline.password,
                        tel: this.formInline.tel,
                        code: this.formInline.code
                    })
                    .then(function(response){
                        this.$Message.success('提交成功!');
                        this.$router.push('/login');    
                    })
                    .catch(function(err){
                        console.log(err);
                    });
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleCancel() {
            this.$router.push('/login');
        },
        getCode() {
            if (this.formInline.tel) {
                let url = '/user/sendVerifyCode';
                this.axios.post(url, {
                    tel: this.formInline.tel,
                    smsType: '0'
                })
                .then(function(response){
                    this.$Message.success('成功发送验证码');
                    if (!this.timer) {
                        this.count = 60;
                        this.show = true;
                        this.timer = setInterval(() => {
                          if (this.count > 0 && this.count <= 60) {
                            this.count--;
                          } else {
                            this.show = false;
                            clearInterval(this.timer);
                            this.timer = null;
                          }
                        }, 1000)
                    }
                })
                .catch(function(err){
                    console.log(err);
                });
            } else {
                this.$Message.error('手机号为空!');
            }
        }
    }
}
</script>
