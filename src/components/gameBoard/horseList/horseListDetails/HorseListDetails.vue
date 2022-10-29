<template>
  <div class="horse-list-details">
    <div>{{ horse.name }}</div>
    <div>{{ horse.condition }}</div>
    <div>{{ horse.color }}</div>
  </div>
</template>

<script>
export default {
  name: 'HorseListDetails',
  props:{
    horse:{
      type:Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss" src="./HorseListDetails.scss"/>
