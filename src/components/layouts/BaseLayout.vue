<template>
  <div class="flex h-full font-inter text-primary-900">
    <SideBar></SideBar>
    <div class="w-full flex flex-col">
      <nav-bar></nav-bar>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar, NavBar },
  name: "BaseLayout"
};
</script>

<style></style>
