<template>
  <div class="container-fluid">
    <h4><i class="fas fa-map"></i> Featured Places</h4>
    <div class="row">
      <div class="card-deck">
      <div v-for="place in places">
         <div class="card">
          <img class="card-img-top" :src="place.thumb" :alt="place.name">
          <div class="card-body">
            <h5 class="card-title">{{place.name}}</h5>
            <p class="card-text">{{place.description}}</p>
            <p><i class="fas fa-map-marker"></i> {{place.city}}</p>
          </div>
       </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        places: []
      }
    },
    created () {
      axios.get('https://freeinternetapi.now.sh/places')
      .then(response => {
        this.places = response.data
      })
      .catch(e => {
        this.places.push(e)
      })
    }
  }
</script>
