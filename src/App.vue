<template>
    <div>
        <el-menu :router="true" mode="horizontal">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/firstChild">child-first</el-menu-item>
            <el-menu-item index="/secondChild">child-second</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <div id="firstChild"></div>
        <div id="secondChild"></div>
    </div>
</template>

<style>
</style>
