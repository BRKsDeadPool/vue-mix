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
        <p v-if="count > 0">Você clicou o botão {{ count }} {{ count > 1 ? 'vezes' : 'vez' }}</p>
        <br>
        <button @click.prevent="increment">add</button>
    </div>
</template>