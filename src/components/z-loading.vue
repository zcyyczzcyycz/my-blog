<template>
  <div id="loading">
    <div class="boxLoading"></div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
#loading{
    width: 100vw;
    height: 100vh;
    position: fixed;
    text-align: center;
    line-height: 100vh;
    font-size: 40px;
    z-index: 9999;
    top: 0;
    left: 0;
    background: var(--mask-color);
    .boxLoading {  
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.boxLoading:before {
  content: '';
  width: 50px;
  height: 5px;
  background: #fff;
  opacity: 0.7;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow .5s linear infinite;
}
.boxLoading:after {
  content: '';
  width: 50px;
  height: 50px;
  background: var(--loading-primary-color);
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
}
</style>