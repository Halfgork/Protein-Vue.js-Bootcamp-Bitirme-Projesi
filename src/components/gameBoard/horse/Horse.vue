<template>
  <div class="horse">
    <h4>Lap {{activeLap && activeLap.lap || '-' }} @ {{activeLap && activeLap.trackLength || '-' }}m </h4>
    <div v-for="(horse, index) in activeLap && activeLap.horses" :key="index" class="horse-racing">
      <div class="game-track__content--lane">{{index+1}}</div>
      <div class="game-track__content--race" :style="{width: `${activeLap.trackLength/4}px`}">
        <HorseDetails :horse="horse" :width="activeLap.trackLength"/>
      </div>
    </div>
  </div>
</template>

<script>
import HorseDetails from '@/components/gameBoard/horse/horseDetails/HorseDetails'
export default {
  name: 'Horse.vue',
  components: { HorseDetails },
  props: {
    activeLap: {
      type:Object,
    }
  },
}
</script>

<style scoped lang="scss" src="./Horse.scss">

</style>
