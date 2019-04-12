<template>
  <section class="container">
    <div>
      <button @click="post">そーしん！</button>
      <logo/>
      <h1 class="title">portfolio</h1>
      <h2 class="subtitle">My pioneering Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import firebase from 'firebase'

export default {
  components: {
    Logo
  },
  data: () => ({
    config: {
      apiKey: "AIzaSyCZgG6nYx--nb4Q7VwfLPQKLS--uy3no0I",
      authDomain: "nya-nq.firebaseapp.com",
      databaseURL: "https://nya-nq.firebaseio.com",
      projectId: "nya-nq",
      storageBucket: "nya-nq.appspot.com",
      messagingSenderId: "567795671860"
    },
    firebaseData: []
  }),
  methods: {
    initializer () {
      firebase.initializeApp(this.config)
      this.get()
    },
    post () {
      firebase.database().ref('user').push(
        {
          message: 'メッセージaaaa',
          name: '名前',
          image: '画像'
        }
      )
    },
    async get (){
      const data = await firebase.database().ref(`user`)
      data.on("value", function(snapshot) {
        // console.log(snapshot.val())
        this.firebaseData.push(snapshot.val())
      },function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      })
    }
  },
  created () {
    this.initializer() 
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
