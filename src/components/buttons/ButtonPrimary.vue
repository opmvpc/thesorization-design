<template>
  <button
    class="shadow bg-primary-50 hover:bg-primary-100 hover:text-primary-600 hover:shadow-md text-primary-500 font-bold py-2 px-4 rounded-lg transition focus:outline-none focus:ring ring-primary-400"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonPrimary"
};
</script>
