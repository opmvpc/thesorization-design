<template>
  <div class="relative md:static h-full">
    <button
      id="menu-button"
      @click="isOpen = !isOpen"
      class="m-3 visible md:invisible absolute bottom-0 left-0 z-20 bg-gray-100 p-2 rounded-full focus:outline-none focus:text-primary-500 focus:ring focus:ring-primary-500 transition"
      :class="{ 'ml-67': isOpen }"
    >
      <svg
        v-show="!isOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
      <svg
        v-show="isOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <div
      :class="{ invisible: !isOpen }"
      v-click-away="onClickAway"
      class="absolute md:static md:visible sidebar h-full w-64 bg-blue-800 flex flex-col"
    >
      <div
        class="h-16 text-gray-100 flex items-center pl-4 font-bold text-xl font-mono border-b border-blue-900"
      >
        Thesorization
      </div>
      <div class="flex-grow">
        <div class="links-group">
          <ul>
            <a class="active" href="#">
              <svg
                class=""
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              Dashboard
            </a>
          </ul>
        </div>
        <div class="links-group">
          <div class="links-group-name">
            Mémoires
          </div>
          <ul>
            <a href="#">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
              Sujets
            </a>
            <a href="#">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Jurys
            </a>
            <a href="#">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                ></path>
              </svg>
              Défenses
            </a>
          </ul>
        </div>
        <div class="links-group">
          <div class="links-group-name">
            Administration
          </div>
          <ul>
            <a href="#">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              Utilisateurs
            </a>
          </ul>
        </div>
      </div>
      <div class="links-group border-t border-blue-900 py-2">
        <ul class="">
          <a href="#">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Paramètres
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue3-click-away";
export default {
  name: "SideBar",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    onClickAway(event) {
      if (
        this.isOpen &&
        event.target.id !== "menu-button" &&
        event.target.parentNode.id !== "menu-button" &&
        event.target.parentNode.parentNode.id !== "menu-button"
      ) {
        this.isOpen = false;
      }
    }
  },
  directives: {
    ClickAway: directive
  }
};
</script>

<style>
.sidebar .links-group {
  @apply mt-10;
}

.sidebar .links-group .links-group-name {
  @apply text-gray-300 text-xs font-bold pb-4 mx-4;
}

.sidebar .links-group ul {
  @apply flex flex-col space-y-1 text-gray-100 text-sm;
}

.sidebar .links-group ul > a {
  @apply inline-flex items-center mx-4 py-2;
}

.sidebar .links-group ul > a.active {
  @apply inline-flex items-center ml-2 mr-4 px-2 bg-blue-900 rounded-lg transition;
}

.sidebar .links-group ul > a:hover {
  @apply inline-flex items-center ml-2 mr-4 px-2 bg-blue-700 rounded-lg transition text-gray-50;
}

.sidebar .links-group ul > a > svg {
  @apply w-6 h-6 text-blue-400 mr-2;
}

.sidebar .links-group ul > a.active > svg {
  @apply text-blue-300;
}

.sidebar .links-group ul > a:hover > svg {
  @apply text-blue-200;
}
</style>
