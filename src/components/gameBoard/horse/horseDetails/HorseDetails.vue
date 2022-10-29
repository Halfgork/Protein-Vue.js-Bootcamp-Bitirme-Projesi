<template>
  <div ref="horse" class="horse-running">
    <HorseIcon :color="horse.color"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HorseIcon from '@/components/gameBoard/horse/horseDetails/HorseIcon'
import { GAMESTATUS } from '@/constants/labels'

export default {
  name: "HorseDetails",
  components: { HorseIcon },
  props: {
    horse:{
      required:true
    },
    width:{
      required: true
    }
  },
  data(){
    return{
      interval: null
    }
  },
  computed:{
    ...mapGetters(['getGameStatus', 'getActiveLap'])
  },
  methods:{
    checkConditionStatus(position){
      return position < this.horse.condition
    },
    checkRunDetails(){
      if(this.getActiveLap.results.length === 10){
        this.$store.dispatch('setActiveLap')
      }
    },
    moveHorse(){
      let position = parseFloat(this.$refs.horse.style.left || '0')
      let canStillRun = this.checkConditionStatus(position)
      let speed = canStillRun ? this.horse.speed : 5
      let isFinished = position > (this.width / 4) - 55
      if(isFinished){
        this.horse.status = GAMESTATUS.FINISHED
        this.$store.dispatch('setActiveLapResult', this.horse)
        clearInterval(this.interval)
        this.checkRunDetails()
      }else{
        this.$refs.horse.style.left = `${position + speed}px`
      }
}
  },
  watch:{
    'getGameStatus'(newVal, oldVal){
      if(newVal === GAMESTATUS.RUNNING){
        this.interval = setInterval(() => this.moveHorse(), 100)
        this.moveHorse()
      }
      else{
        clearInterval(this.interval)
      }
    },
    'getActiveLap'(newVal, oldVal){
      if(newVal !== oldVal){
        this.$refs.horse.style.left = 0
        this.$store.dispatch('setGameStatus', GAMESTATUS.PAUSED)
      }
    }
  }
}
</script>

<style scoped>
.horse-running{
  position: absolute;
  top: 10px;
}
</style>
