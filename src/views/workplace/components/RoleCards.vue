<template>
  <div v-for="(info, index) in list" :key="index" class="card">
    <div class="blob"></div>
    <span
      class="img"
      :style="
        'background-image: url(' + info.logo + ');' + 'background-size: cover;'
      "
    >
    </span>
    <h2>{{ info.title }}<br /><span>Developer</span></h2>
    <p> 天选打工人 </p>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    name: 'RoleCards',
    props: {},
    setup() {
      const list = reactive([
        {
          title: '程序猿',
          logo: 'https://tvax3.sinaimg.cn/crop.0.0.828.828.180/0061a3IXly8gwevjeaobrj30n00n0q3j.jpg?KID=imgbed,tva&Expires=1671914553&ssig=m9bspWfZtL',
        },
        {
          title: '设计狮',
          logo: 'https://img.springlearn.cn/blog/1e096078c094969f82693cdea8e34d8d.png',
        },
        {
          title: '打工人',
          logo: 'https://img.springlearn.cn/blog/1e096078c094969f82693cdea8e34d8d.png',
        },
      ]);
      return { list };
    },
  });
</script>

<style lang="less" scoped>
  .card {
    width: 190px;
    height: 254px;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
    margin: 0 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #4bb8ff;
  }

  .card .blob {
    height: 10px;
    width: 75%;
    border-radius: 0 0 30px 30px;
    margin: 0 auto;
    background-color: #4bb8ff;
    visibility: visible;
    transition: all 0.3s;
  }

  .card:hover .blob {
    height: 0;
  }

  .card .img {
    display: flex;
    margin: 30px auto 10px auto;
    width: 70px;
    height: 70px;
    background-color: #4bb8ff;
    border-radius: 50%;
    font-size: 11px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  .card:hover .img {
    width: 100%;
    height: 70%;
    border-radius: 10px 0 0;
    margin: 0 auto;
    background-color: #f0f0f0;
    z-index: 99999;
  }

  .card h2 {
    padding: 15px 10px;
    font-size: 25px;
    transition: all 0.1s;
    z-index: -99;
    line-height: 17px;
  }

  .card span {
    font-size: 18px;
  }

  .card:hover h2 {
    opacity: 0;
    width: 100%;
    position: absolute;
    transition: all 0.5s;
  }

  .card > p {
    opacity: 0;
    transition: all 0.75s;
  }

  .card > p > svg {
    padding: 5px;
  }

  .card:hover > p {
    position: absolute;
    bottom: 15px;
    left: 35px;
    opacity: 1;
    transition: all 0.1s;
  }

  .card:hover .logo {
    width: 100%;
    visibility: hidden;
  }
</style>
