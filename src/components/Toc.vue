<template>
  <div id="toc" class="container px-3 sm:mx-auto flex flex-col text-app-900 mb-10 font-bold">
    <ul class="flex flex-col">
      <li v-for="(title, index) in titles" :key="'toc-'+ index" class="transition transform hover:translate-x-2">
        <a v-if="title.tagName === 'H1'" :href="'#'+ title.id" class="block text-lg transition transform hover:translate-x-2">{{ title.textContent }}</a>
        <a v-else :href="'#'+ title.id" class="block text-base ml-6 text-app-600">{{ title.textContent }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toc',
  data() {
    return {
      titles: []
    }
  },
  methods: {
    slugify: (string) => {
      const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')

      return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.titles = document.querySelectorAll('h1, h2');
      console.log(this.titles);
      for (let index = 0; index < this.titles.length; index++) {
        const title = this.titles[index];
        title.id = this.slugify(title.textContent);
        console.log(title.tagName);
      }
    });
  }
}
</script>

<style>

</style>
