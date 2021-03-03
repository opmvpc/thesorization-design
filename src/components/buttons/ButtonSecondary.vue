<template>
  <button
    class="shadow bg-secondary-50 hover:bg-secondary-100 hover:shadow-md text-secondary-500 hover:text-secondary-600 font-bold py-2 px-4 rounded-lg transition focus:outline-none focus:ring ring-secondary-400"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonSecondary"
};
</script>
