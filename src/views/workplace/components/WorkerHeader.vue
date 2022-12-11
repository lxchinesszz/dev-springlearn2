<template>
  <div id="header">
    <div class="navLogo">
      <img src="https://img.springlearn.cn/geek.png" alt="" class="navLogo" />
    </div>
    <div class="menuContainer">
      <div class="menuList">
        <ul class="nav">
          <li class="navItem" @click="$router.push({ path: '/todo/list' })">将军令</li>
          <li class="navItem" @click="mousemoveTTL">时钟屏保</li>
          <li
            class="navItem"
            @click="
            openUrl('https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0')
          "
          >配色
          </li
          >
          <li @click="openUrl('https://www.json.cn/')">杰森</li>
          <li @click="openJson">杰森斯坦森</li>
          <li class="navItem" @click="openCalendar">日历</li>
          <li @click="addFavorite">收藏书签</li>
          <li>渐变背景</li>
          <li>
            <icon-tool />
          </li>
        </ul>
      </div>
      <div class="userLogo animated swing">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "WorkerHeader"
  });
</script>

<style scoped>
#header {
  padding: 0;
  background: #cae7ef url(https://img.springlearn.cn/cloudtou.svg) repeat-y 30% 22%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.menuContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navLogo {
  margin-left: 8%;
  width: 120px;
  height: 3rem;
  background-image: url('https://img.springlearn.cn/geek.png');
}

.userLogo {
  margin-right: 25px;
}

.nav {
  display: flex;
  font-size: 1.2rem;
}

.nav li {
  list-style: none;
  padding: 0;
  margin: 0 15px;
  cursor: pointer;
}
</style>
