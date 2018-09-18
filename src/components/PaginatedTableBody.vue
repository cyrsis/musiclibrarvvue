<template>
  <tbody>
  <template v-for="(song,index) in pageinatedItems"></template>
  <tr v-bind:key="index">
    <td>{{song.artist}}</td>
    <td>{{song.artist}}</td>

  </tr>

</template>
</tbody>
</template>


<script>
  export default {
    props: {
      item: {
        type: Array,
        required: true
      },
      per_page: {
        type: Number,
        required: true,
        default: 50
      }

    },
    data() {
      return {
        page: 1
      }
    },
    computed: {
      totalPages() {
        return Math.ceil(this.items.length/this.per_page);
      },

      

    },

  }
</script>

<style scoped>

</style>
