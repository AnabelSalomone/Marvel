<template>
  <div>
    <header>
      <img id="imgtitle" src="https://sep.yimg.com/ay/stylinonline/marvel-46.jpg" />
      <h3>List of characters</h3>
    </header>
    <div v-if="!loaded" id="loader"> </div>
  
    <div v-else>
      <ul class="list-group">
        <li class="list-group-item" v-for="item in apiData">
          <router-link :to="{name:'Card' , params:{id:item.id}}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Store } from '@/Store.js'

export default {
  name: 'home',
  data() {
    return {
      apiData: [],
      loaded: false
    }
  },

  created() {
    Store.getData().then((res) => {
      this.apiData = res;
      this.loaded = true;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  max-width: 50vw;
  margin: auto;
}

header {
  margin: auto;
  text-align: center;
  max-height: 60%;
  max-width: 60%;
}

#loader {
  margin: auto;
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
