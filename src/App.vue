<template>
  <div id="app">
    <GDGHeader />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import GDGHeader from "@/components/GDGHeader.vue";

export default {
  components: {
    GDGHeader
  }
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

#app {
  padding: 0 30px;
}

button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  margin: 0 30px;
  cursor: pointer;
  min-width: 110px;
}

button:focus {
  outline: none;
}
</style>