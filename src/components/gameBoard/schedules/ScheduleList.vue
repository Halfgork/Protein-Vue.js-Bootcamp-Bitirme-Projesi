<template>
  <div class="schedule-list">
    <p>Program</p>
    <ScheduleDetails :schedule="schedule" v-for="(schedule, index) in getScheduleList" :key="index"/>
  </div>
</template>

<script>
import ScheduleDetails from '@/components/gameBoard/schedules/scheduleDetails/ScheduleDetails'
import { mapGetters } from 'vuex'
export default {
  name: 'ScheduleList',
  components: { ScheduleDetails },
  computed:{
    ...mapGetters(['getScheduleList'])
  }
}
</script>

<style scoped lang="scss" src="./ScheduleList.scss"/>
