<template>
  <div class="date-box">
    <div class="date-time" style="font-size: 2.5rem">{{ dateObj.time }}</div>
    <div class="date-date">
      {{ dateObj.date }}&nbsp;<span class="date-day"
        >|&nbsp;{{ dateObj.week }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import { dateFormat, FormatsEnums } from '@/utils/nowTime';

  interface IDate {
    time: string;
    week: string;
    date: string;
    timer: number;
  }

  const dateObj: IDate = reactive({
    time: '--:--:--',
    date: '----/--/--',
    week: '--',
    timer: 0,
  });

  const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  const getTime = () => {
    dateObj.time = dateFormat(0, FormatsEnums.TIME);
    dateObj.date = dateFormat(0, FormatsEnums.YMD);
    // getDay() 方法返回指定日期是星期几（从 0 到 6）。
    const weekDay = new Date().getDay();
    dateObj.week = weekList[weekDay];
  };

  onMounted(() => {
    dateObj.timer = window.setInterval(() => {
      getTime();
    }, 1000);
  });
</script>

<style scoped lang="less">
  .date-box {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    color: white;
    //background-color: white;
    //box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    //  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    //  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    //  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    //  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    //  100px 100px 80px rgba(0, 0, 0, 0.07);
  }
</style>
