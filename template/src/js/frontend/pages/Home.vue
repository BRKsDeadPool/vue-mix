<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>

<template>
    <div id="app">
        <p v-if="count > 0">Você clicou o botão <span v-text="count"></span> <span v-text="count > 1 ? 'vezes' : 'vez'"></span></p>
        <br>
        <button @click.prevent="increment">add</button>
    </div>
</template>