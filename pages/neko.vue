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
    <div :class="{ bulr: ishover }" class="about-contents">
      <div class="title">
        <p>???</p>
      </div>
      <div class="contents">
        <div class="text">
          <p>ちゅ〜るをあげてねこ様からの一言をもらおう！</p>
        </div>
        <div class="items">
          <div class="nekosama">
            <img class="neko" src="~/assets/images/nekochan.png" alt="neko">
            <img :class="{ move: moveTyuru }" class="tyuru" src="~/assets/images/tyuru.png" alt="ちゅ〜る">
          </div>
          <div class="word">
            <div class="hukidashi">
              <div class="comment">{{ nekoText }}</div>
            </div>
          </div>
        </div>
        <div>
          <button @click="doClick" class="button">ちゅ〜るをあげる</button>
        </div>
      </div>
      <div>
        <Fishes />
      </div>
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
    ishover: false,
    nekoText: 'ちゅ〜るをよこすのだ',
    moveTyuru: false,
    nekoWords: [
      '美味',
      'にゃ〜ん',
      'よきにはからえ',
      'ゴロゴロ',
      'なでなでを許可しよう',
      'もっとくれ',
      'う〜む',
      '入眠',
      'お昼寝タイム',
      'くるしゅうない',
      '感服つかまつった'
    ]
  }),
  components: {
    Fishes
  },
  methods: {
    doClick() {
      this.moveTyuru = true
      setTimeout(() => this.setText(), 1000)
    },
    setText() {
      const i = Math.floor(Math.random() * 11)
      this.nekoText = this.nekoWords[i]
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  font-family: 'M+PLUS+1p';
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-width: 62vw;
    min-height: 60vh;
    max-height: 72vh;
    margin-left: 52px; 
    margin-top: 4%;
    background: #fffbf4;
    opacity: 0.8;
    border-radius: 2%;
    .text {
      font-size: 1.2rem;
      color: #303755;
    }
    .items {
      display: flex;
      flex-direction: row;
      .nekosama {
        position: relative;
        display: flex;
        justify-content: center;
        .neko {
          width: 76%;
        }
        .tyuru {
          width: 40%;
          position: absolute;
          bottom: -116px;
        }
        .move {
          transition: .6s;
          transform: translate(0,-66px);
        }
      }
      .word {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30vw;
        height: 30vh;
        .hukidashi {
          position: relative;
          width: 25vw;
          height: 25vh;
          background-color: white;
          border: solid 2px #dfb0c0;
          border-radius: 30px;
          box-sizing: border-box;
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: -32px;
            margin-top: -16px;
            border: 16px solid transparent;
            border-right: 16px solid white;
            z-index: 2;
            }
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: -36px;
            margin-top: -18px;
            border: 18px solid transparent;
            border-right: 18px solid #dfb0c0;
            z-index: 1;
          }
          .comment {
            height: 24vh;
            color: #4c5788;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
          }
        }
      }
    }
    .button {
      padding: 0.3em 1em;
      color: #5764a0;
      border: solid 2px #dfb0c0;
      border-radius: 20px;
      transition: .4s;
      &:hover {
        background: #e6b3b3;
        color: white;
      }
      &:active {
        transform: translate(2px,2px);
      }
    }
  }
}
</style>
