<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slider-left'
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').filter(Boolean).length;
      const fromDepth = from.path.split('/').filter(Boolean).length;
      this.transitionName =
        toDepth < fromDepth ? 'slider-right' : 'slider-left';
    }
  }
};
</script>

<style lang="stylus">
#app
  font-size: $font-size-base

  .child-view
    fixed: top left right bottom
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1)
    overflow: auto

    &.slider
      &-left-enter, &-right-leave-to
        transform: translate3d(100%, 0, 0)

      &-left-leave-to, &-right-enter
        transform: translate3d(-100%, 0, 0)
</style>
