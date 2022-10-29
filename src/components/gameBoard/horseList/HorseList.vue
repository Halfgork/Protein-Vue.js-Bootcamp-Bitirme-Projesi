<template>
  <div class="horse-list">
    <div class="horse-list__title">Horse List</div>
    <div class="horse-list__content">
      <div class="horse-list__content-header">
        <div>Name</div>
        <div>Condition</div>
        <div>Color</div>
      </div>
      <div class="horse-list__content-body" v-for="horse in getHorseList" :key="horse.number">
        <HorseListDetails :horse="horse"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HorseListDetails from '@/components/gameBoard/horseList/horseListDetails/HorseListDetails'

export default {
  name: 'HorseList',
  components: { HorseListDetails },
  computed:{
    ...mapGetters(['getHorseList'])
  }
}
</script>

<style scoped lang="scss" src="./HorseList.scss"/>
