<template>
  <div>
    <toc></toc>
    <div class="container px-3 sm:mx-auto">
        <h1>Identité</h1>
        <section>
          <h2>Fonts</h2>
          <div>
            <p class="text-app-900 mb-4">
              <span class="text-xl font-bold">
                Inter font:
              </span>
              <a target="blank" href="https://fonts.google.com/specimen/Inter?query=inter&preview.text_type=custom">https://fonts.google.com/specimen/Inter?query=inter&preview.text_type=custom</a>
            </p>
          </div>
          <div class="font-inter space-y-3 bg-gray-50 p-4 rounded-md">
            <p class="font-inter text-3xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-2xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-base">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-sm">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-xs">
              All work and no play makes Jack a dull boy
            </p>
          </div>
          <div class="font-inter font-bold space-y-3 mt-8 bg-gray-50 p-4 rounded-md">
            <p class="font-inter text-3xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-2xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-base">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-sm">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-xs">
              All work and no play makes Jack a dull boy
            </p>
          </div>
          <div class="font-inter italic space-y-3 mt-8 bg-gray-50 p-4 rounded-md">
            <p class="font-inter text-3xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-2xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-xl">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-base">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-sm">
              All work and no play makes Jack a dull boy
            </p>
            <p class="font-inter text-xs">
              All work and no play makes Jack a dull boy
            </p>
          </div>
        </section>
        <h1>Couleurs</h1>
        <section>
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <h2>Primaire</h2>
              <div class="h-32 w-32 bg-primary-400 rounded-full shadow-lg mb-2">
              </div>
              <div class="text-center">.bg-primary-400</div>
            </div>
            <div class="flex flex-col items-center">
              <h2>Secondaire</h2>
              <div class="h-32 w-32 bg-secondary-400 rounded-full shadow-lg mb-2">
              </div>
              <div class="text-center">.bg-secondary-400</div>
            </div>
            <div class="flex flex-col items-center">
              <h2>Warning</h2>
              <div class="h-32 w-32 bg-warning-400 rounded-full shadow-lg mb-2">
              </div>
              <div class="text-center">.bg-warning-400</div>
            </div>
            <div class="flex flex-col items-center">
              <h2>Danger</h2>
              <div class="h-32 w-32 bg-danger-400 rounded-full shadow-lg mb-2">
              </div>
              <div class="text-center">.bg-danger-400</div>
            </div>
          </div>
        </section>
        <h1>Logo</h1>
        <section>
          <div class="text-6xl font-bold font-mono py-8">👩‍💻 Thesorization 👨‍💻</div>
        </section>
    </div>
  </div>
</template>

<script>
import Toc from '../components/Toc.vue'
export default {
  components: { Toc },
  name: 'Brand',
}
</script>
