<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="长沙黑马-10期"/>
    <!-- main -->
    <!-- <router-view></router-view> -->
    <transition>
      <!-- <router-view/> -->
      <router-view></router-view>
    </transition>
    <!-- tabbar -->
    <mui-tabbar/>
    
  </div>
</template>

<script>
// 引入定义好的组件  
import MuiTabbar from './muicomponents/MuiTabbar'

export default {
  name: "App",
  // 2. 注册组件
  components: {
    "mui-tabbar": MuiTabbar
  }
};
</script>

<style>
body {
  background: #fff;
}
* {
  margin: 0;
  padding: 0;
}
ul,li {
  list-style: none;
}
#app {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter{
  opacity: 0;
  transform: translateX( 100%)
}

.v-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX( -100%)
}

.v-enter-active,
.v-leave-active {
  transition: all .4s ease;
}
</style>
