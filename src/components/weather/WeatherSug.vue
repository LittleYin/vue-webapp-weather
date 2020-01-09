<template>
    <div id="WeatherSug">
      <div class="tem  animated bounceInUp">
        <div class="imgline">
          <img src="../../assets/img/建议.svg" class="oicon" />
          <span>建议</span>
        </div>
        <div>
          <div>
            <div class="sugspace">空气指数：{{this.$store.state.data.suggestion.air.brf}}</div>
            <div>{{this.$store.state.data.suggestion.air.txt}}</div>
            <div class="sugspace">舒适度指数：{{this.$store.state.data.suggestion.comf.brf}}</div>
            <div>{{this.$store.state.data.suggestion.comf.txt}}</div>
            <div class="sugspace">洗车指数：{{this.$store.state.data.suggestion.cw.brf}}</div>
            <div>{{this.$store.state.data.suggestion.cw.txt}}</div>
            <div class="sugspace">穿衣指数：{{this.$store.state.data.suggestion.drsg.brf}}</div>
            <div>{{this.$store.state.data.suggestion.drsg.txt}}</div>
            <div class="sugspace">感冒指数：{{this.$store.state.data.suggestion.flu.brf}}</div>
            <div>{{this.$store.state.data.suggestion.flu.txt}}</div>
            <div class="sugspace">运动指数：{{this.$store.state.data.suggestion.sport.brf}}</div>
            <div>{{this.$store.state.data.suggestion.sport.txt}}</div>
            <div class="sugspace">旅游指数：{{this.$store.state.data.suggestion.trav.brf}}</div>
            <div>{{this.$store.state.data.suggestion.trav.txt}}</div>
            <div class="sugspace">紫外线指数：{{this.$store.state.data.suggestion.uv.brf}}</div>
            <div>{{this.$store.state.data.suggestion.uv.txt}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"WeatherSug"
}
</script>