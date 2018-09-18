<template>

  <table class="table is-fullwidth is-striped is-hoverable is-narrow">

    <thead>
    <th style="width: 30%;">Artist</th>
    <th style="width: 30%;">Title</th>
    <th style="width: 20%;">Album</th>
    <th style="width: 20%;">Genre</th>
    </thead>

    <tbody v-for="(song,index) in songs" v-bind:key="index">
    <tr>
      <td style="width: 30%;">{{song.artist}}</td>
      <td style="width: 30%;">{{song.title}}</td>
      <td style="width: 30%;">{{song.album}}</td>
      <td style="width: 20%;">{{song.genre}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>

  import Musicdata from '@/assets/list.json'

  export default {




    data() {
      return {
        songs: Musicdata,
        sortBy: '',
        sortDirection: 'asc'

      }
    },

    methods: {
      filter_songs() {

      }
    },

  }
</script>

<style scoped>

</style>
