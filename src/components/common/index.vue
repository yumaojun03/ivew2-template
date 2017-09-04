<style scoped>

.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 65em;
    margin: .5em;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 20px 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #fff;
    min-width: 100px;
}

.layout-header {
    height: 40px;
    background: #eee;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    /* background: #5b6270; */
    border-radius: 3px;
    /* margin: 15px auto; */
    line-height: 30px;
    color: white;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}

.demo-badge-alone{
    background: #5cb85c;
}

/* .box-shadow: rgba(0,0,0,.25) 0 1px 0, inset rgba(255,255,255,.16) 0 1px 0; */

</style>

<template>

<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
            <Menu :active-name="setActive" theme="light" width="auto" @on-select="routeTo">
                <div class="layout-logo-left"></div>
                <Menu-item name="rtf">
                    <Icon type="ios-speedometer" :size="iconSize"></Icon>
                    <span class="layout-text">仪表盘</span>
                </Menu-item>
                <Submenu name="1">
                    <template slot="title">
                       <Icon type="ios-people"></Icon> 
                            <span class="layout-text">身份管理</span>
                    </template>
                <Menu-item name="about">
                    <Icon type="person" :size="iconSize"></Icon>
                    <span class="layout-text">用户</span>
                </Menu-item>
                <Menu-item name="form">
                    <Icon type="person-stalker" :size="iconSize"></Icon>
                    <span class="layout-text">用户组</span>
                </Menu-item>
                <Menu-item name="table">
                    <Icon type="ios-locked" :size="iconSize"></Icon>
                    <span class="layout-text">角色</span>
                </Menu-item>
                <Menu-item name="table">
                    <Icon type="ios-grid-view" :size="iconSize"></Icon>
                    <span class="layout-text">项目</span>
                </Menu-item>
                </Submenu>
                <Submenu>
                    <template slot="title">
                       <Icon type="android-apps"></Icon> 
                           <span class="layout-text">资产管理</span> 
                    </template>
                <Menu-item name="markdown-viewer">
                    <Icon type="android-laptop" :size="iconSize"></Icon>
                    <span class="layout-text">服务器</span>
                </Menu-item>
                <Menu-item name="markdown-editor-1">
                    <Icon type="ios-home" :size="iconSize"></Icon>
                    <span class="layout-text">机房</span>
                </Menu-item>
                <Menu-item name="markdown-editor-2">
                    <Icon type="ios-cog" :size="iconSize"></Icon>
                    <span class="layout-text">系统用户</span>
                </Menu-item>
                </Submenu>
                <Submenu>
                    <template slot="title">
                       <Icon type="shuffle"></Icon>
                           <span class="layout-text">持续集成</span> 
                    </template>
                <Menu-item name="rtf">
                    <Icon type="document-text" :size="iconSize"></Icon>
                    <span class="layout-text">富文本框</span>
                </Menu-item>
                <Menu-item name="upload">
                    <Icon type="ios-cloud-upload-outline" :size="iconSize"></Icon>
                    <span class="layout-text">文件上传</span>
                </Menu-item>
                <Menu-item name="echarts">
                    <Icon type="pie-graph" :size="iconSize"></Icon>
                    <span class="layout-text">图表(Echarts)</span>
                </Menu-item>
                </Submenu>
            </Menu>
        </i-col>
        
        <i-col :span="spanRight">
            <div class="layout-header">
                <i-button type="text" @click.native="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </i-button>
                <Dropdown style="float:right;padding: 1em;margin-right:2em" placement="bottom-end">
                    <Icon type="person"></Icon>
                    <span>喻茂峻</span>
                    <Icon type="arrow-down-b"></Icon>
                    <DropdownMenu slot="list">
                        <DropdownItem><Icon type="android-settings"></Icon>设置</DropdownItem>
                        <DropdownItem><Icon type="help-circled"></Icon>帮助</DropdownItem>
                        <DropdownItem divided disabled>主题</DropdownItem>
                        <DropdownItem><Icon type="checkmark-round"></Icon> Dark</DropdownItem>
                        <DropdownItem>Light</DropdownItem>
                        <DropdownItem divided><Icon type="arrow-right-c"></Icon>退出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown style="float:right;padding: 1em;margin-right:1em" placement="bottom-end">
                    <Badge dot>
                        <Icon type="ios-bell" size="16"></Icon>
                    </Badge>
                    <DropdownMenu slot="list">
                        <DropdownItem><Icon type="android-settings"></Icon><span style="margin-left:1em">设置</span></DropdownItem>
                        <DropdownItem><Icon type="help-circled"></Icon>帮助</DropdownItem>
                        <DropdownItem divided disabled>主题</DropdownItem>
                        <DropdownItem><Icon type="checkmark-round"></Icon> Dark</DropdownItem>
                        <DropdownItem>Light</DropdownItem>
                        <DropdownItem divided><Icon type="arrow-right-c"></Icon>退出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb-item>首页</Breadcrumb-item>
                    <Breadcrumb-item>页面</Breadcrumb-item>
                    <Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <transition mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <div class="layout-copy">
                2017 &copy; Define IOT
            </div>
        </i-col>
    </Row>
</div>


</template>

<script>

export default {

    data() {
            return {
                spanLeft: 5,
                spanRight: 19,
                page: ['about','form','table','markdown-viewer', 'markdown-editor-1', 'markdown-editor-2','rtf','upload','echarts']
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            },
            setActive() {
              return this.$route.path.replace('/','');
            }
        },
        methods: {
            toggleClick() {
                    if (this.spanLeft === 5) {
                        this.spanLeft = 2;

                        this.spanRight = 22;
                    } else {
                        this.spanLeft = 5;
                        this.spanRight = 19;
                    }
                },
                routeTo(e) {
                    //console.log(e);
                    this.$router.push(e);
                }
        }
}

</script>
