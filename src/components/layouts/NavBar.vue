<template>
<div class="flex items-center bg-gray-100 h-16 px-4 border-b border-gray-200">
    <div class="">
      <div class="text-lg font-bold">
        Dashboard
      </div>
    </div>
    <div class="flex-grow">

    </div>
    <div class="inline-flex items-center">
      <drop-down :width="64">
        <template v-slot:drop-down-button>
          <button class="p-2 mr-4 hover:bg-gray-200 rounded-full hover:text-primary-700 transition focus:bg-gray-200 focus:text-primary-700 focus:ring focus:ring-primary-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </button>
        </template>
        <template v-slot:drop-down-list>
          <ul>
            <a href="#">
              <div class="mr-2">📩</div>
              <div>Nouveau message de P. Dupont</div>
            </a>
            <a href="#">
              <div class="mr-2">✨</div>
              <div>Votre sujet a été validé!</div>
            </a>
            <a href="#">
              <div class="mr-2">📢</div>
              <div>Annonce: Nouvelles fonctionnalités</div>
            </a>
          </ul>
        </template>
      </drop-down>
      <drop-down>
        <template v-slot:drop-down-button>
          <button class="p-1 hover:bg-gray-200 rounded-full hover:text-primary-700 transition focus:bg-gray-200 focus:text-primary-700 focus:ring focus:ring-primary-700 focus:outline-none">
            <div class="bg-white rounded-full h-8 w-8 flex items-center justify-center font-mono text-primary-500 font-bold">
              JD
            </div>
          </button>
        </template>
        <template v-slot:drop-down-list>
          <ul>
            <a href="#">Mon profil</a>
            <a href="#">Déconnection</a>
          </ul>
        </template>
      </drop-down>
    </div>
  </div>
</template>

<script>
import DropDown from '../ui/DropDown.vue'
export default {
  components: { DropDown },
  name: 'NavBar'
}
</script>

<style>

</style>
