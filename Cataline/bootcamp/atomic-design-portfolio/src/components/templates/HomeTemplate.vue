<template>
  <Container class="home-template">
    <Header />
    <Presentatio />
    <Services />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from '@/components/bosons/'
import { Header, Presentatio, Services } from '@/components/organisms'

export default defineComponent({
  components: { Container, Header, Presentatio, Services }
})
</script>

<style lang="scss" scoped>
.home-template {
  margin: 5rem auto;
  display: grid;
  grid-gap: 5rem;
}
</style>
