<template>
  <div>test1</div>
</template>

<script>
  export default {
    name: 'test1',
    data () {
      return {
        nums: Object.freeze([-2, 0, 3, -5, 2, -1])
      }
    },
    mounted () {
      console.log(this.test(0, 2))
      console.log(this.test(2, 5))
      console.log(this.test(0, 5))
    },
    methods: {
      test (n1, n2) {
        let arr = this.nums.slice(n1, n2 + 1)
        return arr.reduce((x, y) => x + y, 0)
      }
    }
  }
</script>
