<template>
  <div @click="test(arr)">test</div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        arr: [
          {
            id: 1,
            children: null
          },
          {
            id: 2,
            children: [
              {
                id: 3,
                children: null
              }
            ]
          }
        ],
        result: []
      }
    },
    mounted () {
      this.test(this.arr)
      console.log(this.result)
    },
    methods: {
      test (arr) {
        arr.forEach(e => {
          this.result.push(e.id)
          if (Array.isArray(e.children)) {
            this.test(e.children)
          }
        })
      }
    }
  }
</script>
