<template>
  <div class="container px-3 sm:px-0 sm:mx-auto">
    <h1>Layout</h1>
    <section>
      <h2>Layout de base</h2>
    </section>
  </div>
  <div class="w-full vh-100 shadow-xl ">
    <base-layout></base-layout>
  </div>
</template>

<script>
import BaseLayout from '../components/layouts/BaseLayout.vue'
export default {
  components: { BaseLayout },
  name: 'Pages',
}
</script>
