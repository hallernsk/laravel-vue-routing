<template>
  <header class="header">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="/">Главная</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/products">Товары</router-link>
      </li>    
    </ul>
  </header>   
</template>
    
    <script>
    import { defineComponent } from "vue";
    </script>
    
    <style lang="less" scoped>
    
    .header {
        width: 990px;
        margin: 0 auto;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    </style>