<template>
  <button
    class="bg-primary-200 hover:bg-primary-300 text-primary-800 font-bold py-2 px-4 border border-primary-300 rounded"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonPrimary"
};
</script>
