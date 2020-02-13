<template>
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  created () {
    this.checkTime()
    this.date = '2020-02-27 00:00:00'
  },
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
    this.checkTime()
  },
  props: {
    date: {
      type: String
    }
  },
  data () {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds () {
      return Math.trunc(
        moment(this.date, 'YYYY-MM-DD HH:mm').format('x') / 1000
      )
    },
    seconds () {
      return (this.dateInMilliseconds - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24)
    }
  },
  methods: {
    checkTime () {
      if (
        this.days <= 0 &&
        this.minutes <= 0 &&
        this.hours <= 0 &&
        this.seconds <= 0
      ) {
        this.$emit('showPage', true)
      }
    }
  },
  updated () {
    this.checkTime()
  },
  filters: {
    two_digits (value) {
      if (value < 0) {
        return '00'
      }
      if (value.toString().length <= 1) {
        return `0${value}`
      }
      return value
    }
  }
}
</script>

<style scoped>
.countdown {
  display: flex;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 0 20px !important;
}

.text {
  color: #575a65;
  letter-spacing: 0.06em;
  font-size: 18px;
  font-family: Graphik;
  font-weight: 400;
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
  text-align: center;
}

.digit {
  color: #F40057;
  font-size: 50px;
  font-weight: 600;
  /* margin: 10px; */
  margin: 0!important;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .digit {
    font-size: 60px;
  }
}

@media screen and (max-width: 425px) {
  .digit {
    font-size: 35px;
  }

  .text {
    font-size: 14px;
  }
}

@media screen and (max-width: 375px) {
  .digit {
    font-size: 30px;
    margin: 0px;
  }

  .text {
    font-size: 8px;
  }
}
</style>
