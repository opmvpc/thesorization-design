<template>
  <button
    class="bg-indigo-200 hover:bg-indigo-300 text-indigo-800 font-bold py-2 px-4 border border-indigo-300 rounded"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonPrimary"
};
</script>
