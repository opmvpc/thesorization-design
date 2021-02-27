<template>
  <button
    class="bg-transparent hover:bg-primary-200 text-primary-800 font-semibold hover:text-white py-2 px-4 border border-primary-300 hover:border-transparent rounded"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonSecondary"
};
</script>
