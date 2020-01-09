<template>
  <div id="About"> 
    <div class="header  animated bounceInUp">About</div>
     <Introduction />
      <Copyright />
  </div>
</template>
 
<script>
import Introduction from "./Introduction"
import Copyright from "./Copyright"

export default {
  name: 'About',
  components:{
    Introduction,
    Copyright
  }
}
</script>
