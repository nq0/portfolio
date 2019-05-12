<template>
  <div>
    <i class="fas fa-fish fa-2x fish-icon fish1"/>
    <div class="circle"></div>
    <i class="fas fa-fish fa-2x fish-icon fish2"/>
    <div class="circle"></div>
    <i class="fas fa-fish fa-2x fish-icon fish3"/>
    <div class="circle"></div>
    <i class="fas fa-fish fa-2x fish-icon fish4"/>
    <div class="circle"></div>
    <i class="fas fa-fish fa-2x fish-icon fish5"/>
    <div class="circle"></div>
    <i class="fas fa-fish fa-2x fish-icon fish6"/>
    <div class="circle"></div>
    <i class="fas fa-fish fa-2x fish-icon fish7"/>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' }
      ]
    }
  }
}
</script>

<style style lang="scss" scoped>
.fish-icon {
  position: absolute;
  color: rgb(156, 193, 236);
}
.fish1 {
  top: 4%;
  right: 90%;
  animation:fuwafuwa 3s infinite linear alternate;
  &:hover + .circle {
    display: block;
    top: 4%;
    right: 90%;
  }
}
.fish2 {
  top: 70%;
  right: 88%;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 2.3s;
  &:hover + .circle {
    display: block;
    top: 70%;
    right: 88%;
  }
}
.fish3 {
  top: 9%;
  right: 43%;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 0.6s;
  &:hover + .circle {
    display: block;
    top: 9%;
    right: 43%;
  }
}
.fish4 {
  top: 50%;
  right: 83%;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 0.9s;
  &:hover + .circle {
    display: block;
    top: 50%;
    right: 83%;
  }
}
.fish5 {
  top: 60%;
  right: 11%;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 1.2s;
  &:hover + .circle {
    display: block;
    top: 60%;
    right: 11%;
  }
}
.fish6 {
  top: 86%;
  right: 75%;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 1.5s;
  &:hover + .circle {
    display: block;
    top: 86%;
    right: 75%;
  }
}
.fish7 {
  top: 6%;
  right: 14%;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 1.8s;
  &:hover + .circle {
    display: block;
    top: 6%;
    right: 14%;
  }
}
.circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border: solid thin #8fa2e4;
  border-radius: 50%;
  display: none;
  animation: wave 1.6s infinite;
}
@keyframes wave {
  0% {transform: scale(1);}
  100% {transform: scale(4); opacity: 0;}
}
.fuwafuwa {
  animation:fuwafuwa 3s infinite linear alternate;
}
@keyframes fuwafuwa {
0% {transform:translate(0, 0) rotate(-10deg);}
50% {transform:translate(0, -10px) rotate(0deg);}
100% {transform:translate(0, 0)rotate(10deg);}
}

</style>
