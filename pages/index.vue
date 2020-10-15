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
          <li class="menu-item">
            <i class="fas fa-times fa-2x icon-color fa-fw"></i>
            <span :class="{ showtitle: ishover }"></span>
          </li>
          <li class="menu-item">
            <nuxt-link to="/">
              <i class="fas fa-home fa-2x icon-color fa-fw"></i>
              <span :class="{ showtitle: ishover }">HOME</span>
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/about">
              <i class="fas fa-paw fa-2x icon-color fa-fw"></i>
              <span :class="{ showtitle: ishover }">ABOUT</span>
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/made">
              <i class="fas fa-bong fa-2x icon-color fa-fw"></i>
              <span :class="{ showtitle: ishover }">MADE</span>
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/neko">
              <i class="fas fa-dice-d6 fa-2x icon-color fa-fw"></i>
              <span :class="{ showtitle: ishover }">NYAAAN</span>
            </nuxt-link>
          </li>
        </ul>
      </template>
    </div>
    <div :class="{ bulr: ishover }">
      <div class="right"><img class="top-img" src="~/assets/images/top-neko.jpg" alt="neko"></div>
      <div class="title">
        <p>NYAAAN</p>
      </div>
      <Fishes />
    </div>
  </div>
</template>

<script>
import Fishes from '~/components/Fishes.vue'
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
  }),
  components: {
    Fishes
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  font-family: 'M+PLUS+1p';
  .menu {
    position: fixed;
    z-index: 999;
    width: 52px;
    height: 100vh;
    background-color: #c498a7;
    animation-direction: 3s;
    transition: 0.6s;
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
        a {
          text-decoration: none;
        }
      }
    }
  }
}
.right {
  display: flex;
  justify-content: flex-end;
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
  right: 72%;
  p {
  font-weight: 200;
  font-size: 40px;
  color: #67678f;
  }
}
.info {
  position: absolute;
  bottom: 20vh;
  right: 68%;
  color: #c498a7;
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