<template>
  <div class="game-track">
    <div class="game-track__content">
      <Horse :activeLap="getActiveLap" />
    </div>
  </div>
</template>

<script>
import Horse from '@/components/gameBoard/horse/Horse'
import { mapGetters } from 'vuex'
export default {
  name: 'Track',
  components: { Horse },
  computed:{
    ...mapGetters(['getActiveLap'])
  }
}
</script>

<style scoped lang="scss" src="./Track.scss"/>
