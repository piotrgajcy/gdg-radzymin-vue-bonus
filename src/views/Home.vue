<template>
  <div class="home">
    <p class="counter">Licznik kliknięć: {{ visibilityCounter }}</p>
    <section class="main-pizza">
      <!-- tutaj dodaj pizze -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["visibilityCounter"])
  }
};
</script>

<style>
.counter {
  font-weight: 700;
}
.main-pizza {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.pizza {
  flex: 1 1 auto;
}

.pizza p {
  text-align: center;
}

.pizza button {
  margin: 0 auto;
  display: block;
}

.sliced-pizza {
  position: relative;
  max-width: 360px;
  min-height: 400px;
  margin: 0 auto;
}

.sliced-pizza img {
  position: absolute;
  display: inline-block;
  width: 100%;
}
</style>
