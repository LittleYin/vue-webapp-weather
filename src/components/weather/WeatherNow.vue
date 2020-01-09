<template>
    <div id="WeatherNow">
    <div class="tem tem1 animated bounceInUp">
      <div class="imgline">
        <img src="../../assets/img/再多.svg" class="oicon" />
        <span>天气</span>
      </div>
      <div>
        <div>
          <ul>
            <li class="temCity">{{this.$store.state.data.basic.city}}</li>
            <li class="temCond">{{this.$store.state.data.now.cond.txt}}</li>
            <li class="temNow">{{this.$store.state.data.now.tmp+"°"}}</li>
          </ul>
        </div>
        <div class="temandpop">
          <ul>
            <li class="temPop">降雨概率：{{this.$store.state.data.daily_forecast[0].pop+"%"}}</li>
            <li
              class="temMaxMin"
            >{{this.$store.state.data.daily_forecast[0].tmp.max+"°"}} / {{this.$store.state.data.daily_forecast[0].tmp.min+"°"}}</li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    </div>
</template>

<script>
export default {
    name:"WeatherNow"
}
</script>