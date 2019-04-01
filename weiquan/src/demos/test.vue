<template>
  <div @click="test(arr)">test1</div>
</template>

<script>
  export default {
    name: 'test1',
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
      // console.log(this.test(this.arr))
      this.test()
      console.log(this.result)
    },
    methods: {
      test () {
        this.arr.forEach(e => {
          this.result.push(e.id)
          if (Array.isArray(e.children)) {
            // debugger
            this.test(e.children)
          }
        })
        // return result
      }
    }
  }
</script>
