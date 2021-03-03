<template>
  <button
    class="bg-white hover:bg-gray-50 text-gray-500 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring ring-gray-400"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonTernary"
};
</script>
