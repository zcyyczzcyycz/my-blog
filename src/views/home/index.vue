<template>
<div id="home">
    <div class="container-fluid nav">
    <div class="nav-left">
    left
    </div>
    <div class="nav-right">
  right
    </div>
</div>
</div>
</template>

<script setup>
  
</script>

<style scoped lang="scss">
#home{
    .nav{
     min-height: 120px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: #fff;
     font-size: 25px;
    }
}
</style>
