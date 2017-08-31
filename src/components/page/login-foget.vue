<style scoped>
h1, p {
  color: #eee; 
}
</style>

<template>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item>
            <h1>短信认证</h1>
        </Form-item>
        <p style="font-size: 14px;"> 已有账号，请<router-link to="login">登录</router-link></p>
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
            <label style="float: right; font-size: 14px;">
            通过<router-link to="security-question">密码保护</router-link>找回密码
            </label>
        </Form-item>
    
        <Form-item>
            <Button type="primary" style="float:left;" @click="handleCancel()"> 回登录页 </Button>
            <Button type="primary" style="float:right;" @click="handleSubmit('formInline')"> 提交 </Button>
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
            formInline: {
                tel: '',
                code: '',
            },
            ruleInline: {
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
                    this.$Message.success('提交成功!');
                    this.$router.push('/login');
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
