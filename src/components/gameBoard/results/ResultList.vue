<template>
  <div class="result-list">
    <p>Results</p>
    <ResultListDetails :result="result" :runningIndex="index" v-for="(result, index) in getResults" :key="result.lap"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ResultListDetails from '@/components/gameBoard/results/resultListDetails/ResultListDetails'

export default {
  name: 'ResultList',
  components: { ResultListDetails },
  computed:{
    ...mapGetters(['getResults'])
  }
}
</script>

<style scoped lang="scss" src="./ResultList.scss"/>
