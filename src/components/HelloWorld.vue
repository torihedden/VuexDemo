<template>
  <div class="container">
   <div class="row text-center">
     <!-- So how do we display state inside the store in our Vue components?
     Since Vuex stores are reactive, the simplest way to "retrieve" state from it
     is simply returning some store state from within a computed property: -->
      <h1>You have this many points: {{ $store.state.count }}</h1>
      <div class="example">
        <h3>Conditional rendering based on state:</h3>
        <div class="">
          <h4>This is {{ greaterThanTen }}.</h4>
        </div>
      </div>
      <div class="example">
        <h3>Additional Conditional rendering based on state:</h3>
        <div class="">
          <h4 v-if="has100Points">Congrats! You've unlocked the 100 points perk.</h4>
        </div>
      </div>
      <div class="example">
        <h3>Alter state with actions:</h3>
        <div class="">
          <button class="btn btn-success" @click="increment">+ Add point</button>
          <button class="btn btn-danger" @click="decrement">- Remove point</button>
        </div>
      </div>
      <div class="example">
        <h3>Alter state with action:</h3>
        <div class="">
          <button class="btn btn-danger" type="button" name="button" @click="resetCount">Reset points to zero</button>
        </div>
      </div>
      <div class="example">
        <h3>Alter state asynchronously:</h3>
        <div class="">
          <button class="btn" @click="incrementAsync">Increment by one asynchronously</button>
        </div>
      </div>
      <div class="example">
        <h3>Set state via input:</h3>
        <div class="">
          <input type="number" name="" value="" v-model="$store.state.count">
        </div>
      </div>
      <div class="example">
        <h3>Toggle state behavior & trigger continuous state changes:</h3>
        <div class="">
          <p>Gain {{ $store.state.autoPointGainFactor }} points automatically?</p>
          <input type="checkbox" name="" value="" @click="toggleAutoPoints" v-model="$store.state.automaticPoints">
          {{ $store.state.automaticPoints }}
        </div>
      </div>
      <div class="example">
        <h3>Good Resources:</h3>
        <div class="">
          <a href="https://alligator.io/vuejs/intro-to-vuex/">Managing Vue.js State with Vuex</a>
          <br>
          <a href="https://medium.com/codingthesmartway-com-blog/vue-js-2-state-management-with-vuex-introduction-db26cb495113">Vue.js 2 State Management With Vuex - Introduction</a>
        </div>
      </div>
   </div>
 </div>
</template>

<!--
Notice, that we’re adding the mapGetters function from the vuex package first.
Then we’re calling mapGetters, passing in as a parameter a array listing the Getters we would like to use
and assign the return value to the computed property of the component configuration object
-->

<!--
don't forget to extend the import statement to also import the mapActions function
-->
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters([
    'greaterThanTen',
    'has100Points'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementAsync',
    'resetCount',
    'toggleAutoPoints'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
button {
  font-size: 15px;
  background: white;
  border-color: white;
  border: solid 1px gray;
  border-radius: 3px;
}
button:hover {
  background: gray;
}
.example {
  padding: 0 5%;
}
.example:nth-of-type(even) {
  /*border: solid 1px black;*/
  background-color: lightgray;
}
.example * {
  text-align: left;
  display: inline-block;
  position: relative;
}
.example h3 {
  width: 30%;
}
.example div {
  width: 60%;
  text-align: center;
}
</style>
