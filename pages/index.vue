<template>
  <div class="home-container">
    <div class="menu" @mouseenter="ishover = true" @mouseleave="ishover = false">
      <template v-if="!ishover">
        <ul class="menuber">
          <li class="menu-item"><i class="fas fa-bars fa-2x icon-color fa-fw"></i></li>
          <li class="menu-item"><i class="fas fa-home fa-2x icon-color fa-fw"></i></li>
          <li class="menu-item"><i class="fas fa-paw fa-2x icon-color fa-fw"></i></li>
          <li class="menu-item"><i class="fas fa-bong fa-2x icon-color fa-fw"></i></li>
          <li class="menu-item"><i class="fas fa-dice-d6 fa-2x icon-color fa-fw"></i></li>
        </ul>
      </template>
      <template v-else>
        <ul class="menuber">
          <li class="menu-item"><i class="fas fa-times fa-2x icon-color fa-fw"></i><span :class="{ showtitle: ishover }"></span></li>
          <li class="menu-item"><i class="fas fa-home fa-2x icon-color fa-fw"></i><span :class="{ showtitle: ishover }">HOME</span></li>
          <li class="menu-item"><i class="fas fa-paw fa-2x icon-color fa-fw"></i><span :class="{ showtitle: ishover }">ABOUT</span></li>
          <li class="menu-item"><i class="fas fa-bong fa-2x icon-color fa-fw"></i><span :class="{ showtitle: ishover }">MAKE</span></li>
          <li class="menu-item"><i class="fas fa-dice-d6 fa-2x icon-color fa-fw"></i><span :class="{ showtitle: ishover }">GAME</span></li>
        </ul>
      </template>
    </div>
    <div :class="{ bulr: ishover }">
      <div class="right"><img class="top-img" src="~/assets/images/top-neko.jpg" alt="neko"></div>
      <div class="title">
        <p>nqw0.com</p>
      </div>
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
    </div>
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
  },
  data: () => ({
    ishover: false
  })
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'M+PLUS+1p';
}
.home-container {
  display: flex;
  justify-content: space-between;
  .menu {
    z-index: 999;
    width: 52px;
    height: 100vh;
    background-color: #c498a7;
    animation-direction: 3s;
    transition: 0.4s;
    box-shadow: 1px 1px 12px 4px rgba(0,0,0,0.2);
    &:hover {
        width: 200px;
      }
    .menuber {
      padding: 6px;
      list-style-type: none;
      :nth-child(5) {
        position: absolute;
        bottom: 0;
      }
      .menu-item {
        padding-bottom: 2vh;
        font-size: 16px;
        overflow: hidden;
        span {
          padding-left: 10px;
        }
      }
    }
  }
}
.right {
  text-align: right;
}
.top-img {
  height: 100vh;
}
.bulr {
  background: inherit;
  filter: blur(4px);
  transition: 0.6s;
  }
.icon-color {
  color: #fff;
}
.title {
  position: absolute;
  top: 15vh;
  p {
  font-weight: 200;
  font-size: 40px;
  color: #303755;
  }
}
.fish-icon {
  position: absolute;
  color: rgb(156, 193, 236);
}
.fish1 {
  top: 70px;
  right: 1100px;
  animation:fuwafuwa 3s infinite linear alternate;
  &:hover + .circle {
    display: block;
    top: 70px;
    right: 1100px;
  }
}
.fish2 {
  top: 600px;
  right: 1100px;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 2.3s;
  &:hover + .circle {
    display: block;
    top: 600px;
    right: 1100px;
  }
}
.fish3 {
  top: 40px;
  right: 480px;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 0.6s;
  &:hover + .circle {
    display: block;
    top: 40px;
    right: 480px;
  }
}
.fish4 {
  top: 500px;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 0.9s;
  &:hover + .circle {
    display: block;
    top: 500px;
  }
}
.fish5 {
  top: 600px;
  right: 160px;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 1.2s;
  &:hover + .circle {
    display: block;
    top: 600px;
    right: 160px;
  }
}
.fish6 {
  top: 700px;
  right: 800px;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 1.5s;
  &:hover + .circle {
    display: block;
    top: 700px;
    right: 800px;
  }
}
.fish7 {
  top: 90px;
  right: 100px;
  animation:fuwafuwa 3s infinite linear alternate;
  animation-delay: 1.8s;
  &:hover + .circle {
    display: block;
    top: 90px;
    right: 100px;
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
.showtitle {
  color: #fff;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
@keyframes fade-in {
  0% {opacity: 0; transform: translate3d(0,-20px,0);}
  100% {opacity: 1; transform: translate3d(0,0,0);}
}
</style>