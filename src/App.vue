<template>
  <a-config-provider>
    <router-view />
    <global-setting />
  </a-config-provider>
</template>

<script lang="ts" setup></script>

<style>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
  }
</style>
