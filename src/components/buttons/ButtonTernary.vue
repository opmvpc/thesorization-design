<template>
  <button
    class="bg-white hover:bg-primary-50 text-primary-800 font-semibold py-2 px-4  rounded shadow"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonTernary"
};
</script>
