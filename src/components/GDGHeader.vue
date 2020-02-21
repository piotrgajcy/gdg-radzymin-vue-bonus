<template>
  <div class="head">
    <header>
      <h1>{{ meetup }}</h1>
      <button @click="changeVisibility">{{ isVisible ? 'Ukryj logo' : 'Pokaż logo' }}</button>
      <a :href="link" v-if="isVisible">
        <img src="../assets/gdg-radzymin.png" class="logo" />
      </a>
    </header>
    <div id="nav">
      <router-link to="/">Strona Główna</router-link>|
      <router-link to="/top">Ulubione Pizze</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  // propsy w tym przypadku już nie są potrzebne bo korzystamy z globalnego stora
  //   props: {
  //     city: {
  //       type: String,
  //       required: true
  //     },
  //     logo: {
  //       type: String,
  //       required: true
  //     },
  //     link: {
  //       type: String,
  //       required: true
  //     }
  //   },
  data() {
    return {
      event: "GDG",
      isVisible: true
    };
  },
  methods: {
    changeVisibility() {
      // this.$emit("clicked"); zamiast emitowania wywołana zostanie akcja w storze
      this.$store.dispatch("clicked");
      this.isVisible = !this.isVisible;
    }
  },
  computed: {
    meetup() {
      return `${this.event} ${this.city}  ${new Date().getFullYear()}`;
    },
    ...mapGetters(["city", "logo", "link"])
  }
};
</script>

<style scoped>
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header {
  display: flex;
  align-items: center;
  height: 60px;
}
#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  max-width: 300px;
}
</style>