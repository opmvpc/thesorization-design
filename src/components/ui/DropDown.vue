<template>
  <div class="relative">
    <div>
      <div @click="isOpen = !isOpen">
        <slot name="drop-down-button">
        </slot>
      </div>
    </div>
    <div v-if="isOpen" v-click-away="onClickAway" class="drop-down-list origin-top-right absolute z-10 right-0 bg-white shadow-lg rounded-lg mt-2" :class="'w-' + width">
      <slot name="drop-down-list"></slot>
    </div>
  </div>
</template>

<script>
import { directive } from "vue3-click-away";
export default {
  name: 'DropDown',
  props: {
    width: {
      type: Number,
      default: 48,
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    onClickAway() {
      if (this.isOpen) {
        this.isOpen = false;
      }
    }
  },
  directives: {
    ClickAway: directive
  },
}
</script>

<style>
  .drop-down-list ul {
    @apply block divide-y divide-gray-100 py-1
  }

  .drop-down-list ul > li, .drop-down-list ul > a {
    @apply flex px-4 py-2
  }

  .drop-down-list ul > li, .drop-down-list ul > a:hover {
    @apply bg-gray-50 text-primary-700 transition overflow-hidden
  }
</style>
