<template>
  <div class="container px-3 sm:px-0 sm:mx-auto">
    <div id="nav" class="w-auto flex flex-col md:flex-row md:justify-between md:items-center text-xl text-indigo-900 font-bold py-5">
      <div class="inline-flex justify-between items-center">
        <span id="logo" class="text-3xl">
          Thesorization design
        </span>
        <button @click="menuIsOpen = !menuIsOpen" class="md:invisible hover:bg-indigo-100 rounded p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <ul class="hidden md:inline-flex">
        <router-link to="/">Brand</router-link>
        <router-link to="/components">Components</router-link>
        <router-link to="/pages">Pages</router-link>
      </ul>
      <!-- responsive menu -->
      <ul v-show="menuIsOpen" class="md:hidden inline-flex flex-col mt-4">
        <router-link to="/">Brand</router-link>
        <router-link to="/components">Components</router-link>
        <router-link to="/pages">Pages</router-link>
      </ul>
    </div>
    <router-view class="mt-10"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuIsOpen: false,
      }
    }
  }
</script>

<style>
#nav a {
  @apply py-2 px-4 inline
}

#nav a.router-link-exact-active {
  @apply text-indigo-500 md:text-indigo-900 md:border-b-2 md:border-indigo-400
}
</style>
