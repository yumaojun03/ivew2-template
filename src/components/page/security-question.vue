<style scoped>
h1, p {
  color: #eee; 
}
</style>

<template>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item>
            <h1>身份认证</h1>
        </Form-item>
        <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="请输入用户名称">
                <Icon type="person" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="answer1">
            <Input type="text" v-model="formInline.password" placeholder="请输入答案">
                <Icon type="locked" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="answer2">
            <Input type="text" v-model="formInline.passwordConfirm" placeholder="请输入答案">
                <Icon type="locked" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="answer3">
            <Input type="text" v-model="formInline.password" placeholder="请输入答案">
                <Icon type="locked" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" style="float:right;" @click="handleSubmit('formInline')"> 下一步 </Button>
        </Form-item>
        <hr>
        <div class="create-account" style="height: 40px;">
            <router-link to="register" style="float: left; font-size: 14px;">注册账号 </router-link>
            <router-link to="foget" style="float: right; font-size: 14px;">找回密码 </router-link>
        </div>
    </i-form>
</template>
    
<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                answer1: '',
                answer2: '',
                answer3: '',
            },
            ruleInline: {
                user: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                answer1: [{
                    required: true,
                    message: '请输入答案',
                    trigger: 'blur'
                }],
                answer2:[{
                    required: true,
                    message: '请输入答案',
                    trigger: 'blur'
                }],
                answer3: [{
                    required: true,
                    message: '请输入答案',
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
    }
}
</script>
