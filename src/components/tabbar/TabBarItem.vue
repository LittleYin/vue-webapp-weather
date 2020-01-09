<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  font-size: 14px;
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
}
.tab-bar-item img {
  width: 20px;
  padding-top: 4px;
  margin: 0px;
}
.active {
  color: #e8989a;
}
</style>
