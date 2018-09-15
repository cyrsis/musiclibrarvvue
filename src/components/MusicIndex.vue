<template>

   <table class="table is-fullwidth is-striped is-hoverable is-narrow">

     <theader>
       <th>Artist</th>
       <th>Title</th>
       <th>Album</th>
       <th>Genre</th>
     </theader>

     <tbody v-for="(song,index) in songs" v-bind:key="index">
     <tr>
       <td>{{song.artist}}</td>
       <td>{{song.title}}</td>
       <td>{{song.album}}</td>
       <td>{{song.genre}}</td>
     </tr>
     </tbody>
   </table>
</template>

<script>

  import Musicdata from '@/assets/list.json'
    export default {
        data (){
          return{
            songs:Musicdata
          }
        }
    }
</script>

<style scoped>

</style>
