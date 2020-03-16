<template>
  <div id="Joke">
    <div v-if="!alert">
      <JokeContent
        :joke1="joke1"
        :joke2="joke2"
        :joke3="joke3"
        :joke4="joke4"
        :joke5="joke5"
        :joke6="joke6"
        :joke7="joke7"
        :joke8="joke8"
        :joke9="joke9"
        :joke10="joke10"
      />
    </div>
    <div v-if="alert" class="divContent animated bounceInUp">接口次数已用光，请明日再来吧！</div>
    <div style="text-align:center">
      <button @click="getJoke();toTop()" class="paddding btn-animate animated bounceInUp">换一换</button>
    </div>
  </div>
</template>

<script>
import JokeContent from "./JokeContent";

export default {
  name: "Joke",
  data() {
    return {
      alert: false,
      joke1: "",
      joke2: "",
      joke3: "",
      joke4: "",
      joke5: "",
      joke6: "",
      joke7: "",
      joke8: "",
      joke9: "",
      joke10: ""
    };
  },
  created() {
    this.getJoke();
  },
  methods: {
    getJoke() {
      this.$jsonp("//v.juhe.cn/joke/randJoke.php", {
        key: "d67a7c323829ca4a078d97c6de02c960"
      })
        .then(json => {
          this.joke1 = json.result[0].content;
          this.joke2 = json.result[1].content;
          this.joke3 = json.result[2].content;
          this.joke4 = json.result[3].content;
          this.joke5 = json.result[4].content;
          this.joke6 = json.result[5].content;
          this.joke7 = json.result[6].content;
          this.joke8 = json.result[7].content;
          this.joke9 = json.result[8].content;
          this.joke10 = json.result[9].content;
          // Success.
        })
        .catch(err => {
          // Failed.
          this.alert = true;
        });
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 20);
    }
  },
  components: {
    JokeContent
  }
};
</script>
