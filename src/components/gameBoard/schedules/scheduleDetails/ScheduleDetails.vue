<template>
  <div class="schedule-details">
    <p>Lap {{schedule.lap}}  - {{schedule.trackLength}}</p>
    <div class="schedule-details__header">
      <div class="schedule-details__header--position">Position</div>
      <div class="schedule-details__header--name">Name</div>
    </div>
    <div class="schedule-details__content" v-for="horse in schedule.horses">
      <div class="schedule-details__content--position">{{horse.position}}</div>
      <div class="schedule-details__content--name">{{horse.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleDetails',
  props: {
    schedule:{
      type: Object,
      required: true
    }
  },
  created () {}
}
</script>

<style scoped lang="scss" src="./ScheduleDetails.scss"/>
