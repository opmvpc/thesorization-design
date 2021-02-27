<template>
  <button
    class="bg-transparent hover:bg-indigo-200 text-indigo-800 font-semibold hover:text-white py-2 px-4 border border-indigo-300 hover:border-transparent rounded"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonSecondary"
};
</script>
