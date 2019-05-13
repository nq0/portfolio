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
            <i class="fas fa-bong fa-2x icon-color fa-fw"></i>
            <span :class="{ showtitle: ishover }">MAKE</span>
          </li>
          <li class="menu-item">
            <i class="fas fa-dice-d6 fa-2x icon-color fa-fw"></i>
            <span :class="{ showtitle: ishover }">GAME</span>
          </li>
        </ul>
      </template>
    </div>
    <div :class="{ bulr: ishover }" class="about-contents">
      <div class="title">
        <p>ABOUT</p>
      </div>
      <div class="contents">
        <div class="left">
          <img src="~/assets/images/icon.png" alt="icon">
          <div>
            <p class="about-title">NOE / nq0</p>
            <p class="about-left">1999年6月生まれ</p>
            <p>福岡工業大学短期大学部所属</p>
            <p class="about-title">
              <a href="https://github.com/nq0" target="_blank"><i class="fab fa-github"></i></a>
              <a href="mailto:noe.works0@gmail.com"><i class="fas fa-envelope"></i></a>
            </p>
          </div>
        </div>
        <div class="right">
          <div>
            <p class="about-title">LIKE</p>
            <p class="grey">おいしいごはん/おえかき/旅行/ねこ/カービィ</p>
          </div>
          <div>
            <p class="about-title">SKILLSET</p>
            <p class="grey">HTML/CSS/JS(Vue.js/Nuxt)/C/JAVA</p>
          </div>
          <div>
            <p class="about-title-small">触ったことがあるやつとか</p>
            <p class="grey">Ruby(Rails)/PHP/Bootstrap/Firebase</p>
          </div>
          <div>
            <p class="about-title">FAVORIT FOOD</p>
            <p class="grey">おすし/ハンバーグ/おこめ/チーズ/その他諸々</p>
          </div>
        </div>
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
  display: block;
  background: #303755;
  height: 100%;
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
  top: 10vh;
  right: 72%;
  p {
  font-weight: 200;
  font-size: 40px;
  color: #fffbf4;
  }
}
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
.about-contents{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-width: 62vw;
    min-height: 60vh;
    margin-left: 52px; 
    background: #fffbf4;
    opacity: 0.8;
    border-radius: 2%;
    padding: 2%;
    .about-title {
      color: #c498a7;
      font-size: 2rem;
      font-weight: 300;
      &-small {
        color: #c498a7;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
    a {
      text-decoration: none;
      color: #c498a7;
      padding: 0 4%;
    }
    .left {
      color: #303755;
      text-align: center;
      padding: 4%;
      img {
        padding: 0 0 6% 0;
        width: 90%;
        border-radius: 50%;
      }
      .about-left {
      }
    }
    .right {
      text-align: center;
      align-self: center;
      padding: 4%;
      div {
        padding-bottom: 2rem;
      }
      .grey {
        color: #474f70;
      }
    }
  }
}
</style>
