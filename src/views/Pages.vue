<template>
  <div>
    <toc></toc>
    <div class="container px-3 sm:mx-auto">
      <h1>Layout</h1>
      <section>
        <h2>Layout de base</h2>
      </section>
    </div>

    <div class="w-full vh-100 shadow-xl ">
      <base-layout></base-layout>
    </div>

    <div class="container px-3 sm:mx-auto mt-10">
      <h1>Authentification</h1>
      <section>
        <h2>Login</h2>
      </section>
    </div>

    <div class="w-full vh-100 shadow-xl">
      <login></login>
    </div>
  </div>
</template>

<script>
import Login from "../components/auth/login.vue";
import BaseLayout from "../components/layouts/BaseLayout.vue";
import Toc from "../components/Toc.vue";
export default {
  name: "Pages",
  components: { BaseLayout, Toc, Login }
};
</script>
