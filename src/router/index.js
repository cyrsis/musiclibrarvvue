import Vue from 'vue'
import Router from 'vue-router'
import MusicIndex from '@/components/MusicIndex'
import Playlist from '@/components/Playlist'

import 'bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: MusicIndex},
    {path: '/playlist/:slug', component: Playlist},
  ]
})
