<template>
  <div class="">
    <div class="shadow">
      <div id="nav" class="container px-3 sm:mx-auto flex flex-col md:flex-row md:justify-between md:items-center text-xl text-app-900 font-bold h-20">
        <div class="inline-flex justify-between items-center">
          <span class="text-3xl font-mono">
            Thesorization design
          </span>
          <button @click="menuIsOpen = !menuIsOpen" class="md:invisible hover:bg-app-100 rounded p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <ul class="hidden md:inline-flex h-full">
          <router-link to="/">Brand</router-link>
          <router-link to="/components">Components</router-link>
          <router-link to="/pages">Pages</router-link>
        </ul>
        <!-- responsive menu -->
        <ul v-show="menuIsOpen" class="md:hidden inline-flex flex-col mt-4 bg-gray-50 py-4 rounded-lg">
          <router-link to="/">Brand</router-link>
          <router-link to="/components">Components</router-link>
          <router-link to="/pages">Pages</router-link>
        </ul>
      </div>
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
    },
  }
</script>

<style>
#nav a {
  @apply px-4 inline flex items-center md:border-b-4 md:border-white
}

#nav a:hover {
  @apply md:border-app-400 text-app-400 transition
}

#nav a.router-link-exact-active {
  @apply text-app-600 md:border-b-4 md:border-app-600
}
</style>
