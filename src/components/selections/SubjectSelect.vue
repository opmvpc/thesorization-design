<template>
  <div v-show="alertSubjectSelect" role="alert">
    <div
      class="border border-danger-400 rounded-b bg-danger-100 px-4 py-1 m-4 text-danger-700"
    >
      <p>You can select only a maximum of 5 subjects.</p>
      <div class="m-2 p-2">
        <button
          class="bg-gray-50 hover:bg-gray-200 font-semibold py px-4 rounded-lg focus:outline-none focus:ring ring-gray-400"
          v-on:click="alertSubjectSelect = false"
        >
          Continue
        </button>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 ">
    <div class="text-center bg-gray-50 text-gray-800 p-4 m-2 rounded">
      <h3 class="text-gray-800">Selected</h3>
      <p>Drag your selection order here</p>
      <draggable
        class="list-group"
        :list="selectedSubjectList"
        group="subject"
        @change="log"
        itemKey="id"
      >
        <template #item="{ element, index}">
          <div
            class="list-group-item text-white bg-primary-400 m-1 p-1 rounded-md text-center"
          >
            <div class="flex flex-shrink justify-between">
              <p class="font-inter text-base">
                {{ element.title }}
              </p>
              <div class="title" v-on:click="toggle(element)">
                <span v-if="!element.active">
                  {{ index + 1 }} {{ expandIcon }}
                </span>
                <span v-else>{{ index + 1 }} {{ collapseIcon }}</span>
              </div>
            </div>
            <div class="body" v-show="element.active">
              <p class="font-inter text-xs">
                {{ element.details }}
              </p>
              <p class="text-left font-inter text-xs">
                Tutor : {{ element.tutor }}
              </p>
            </div>
          </div>
        </template>
      </draggable>

      <button-primary class="p-10 m-5">Submit</button-primary>
    </div>
    <div
      class="text-center text-gray-800 bg-gray-50 m-2 p-4 rounded col-span-2"
    >
      <h3 class="text-primary-600">Available Subject</h3>
      <draggable
        class="list-group"
        :list="subjectList"
        :group="{ name: 'subject', pull: true, put: true }"
        :clone="clone"
        @change="log"
        itemKey="id"
      >
        <template #item="{ element}">
          <div
            class="list-group-item bg-primary-100 m-2 p-2 rounded-md text-center"
          >
            <div class="flex justify-between" v-on:click="toggle(element)">
              <p class="font-inter text-base">
                {{ element.title }}
              </p>
            </div>
            <div class="body" v-show="element.active">
              <p class="font-inter text-xs">
                {{ element.details }}
              </p>
              <p class="text-left font-inter text-xs">
                Tutor : {{ element.tutor }}
              </p>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import ButtonPrimary from "../buttons/ButtonPrimary";

export default {
  name: "SubjectSelect",
  components: {
    draggable,
    ButtonPrimary
  },
  data() {
    return {
      alertSubjectSelect: false,
      expandIcon: "+",
      collapseIcon: "-",
      subjectList: [
        {
          id: 1,
          title: "P versus NP",
          details: "Prove or disprove",
          tutor: "Stephen Cook"
        },
        {
          id: 2,
          title: "Riemann hypothesis",
          details:
            "All nontrivial zeros of the analytical continuation of the Riemann zeta function have a real part of 1/2?",
          tutor: "Enrico Bombieri"
        },
        {
          id: 3,
          title: "Navier–Stokes existence and smoothness",
          details: "The general solution, what else?",
          tutor: "Charles Fefferman"
        },
        {
          id: 4,
          title: "Goldbach's conjecture",
          details:
            "Every even whole number greater than 2 is the sum of two prime numbers",
          tutor: "Enrico Bombieri"
        },
        {
          id: 5,
          title: "Collatz conjecture",
          details: "The 3n + 1 problem",
          tutor: "Enrico Bombieri"
        },
        {
          id: 6,
          title: "Subject 6",
          details: "So much to say about subject 6",
          tutor: "tutor 1"
        },
        {
          id: 7,
          title: "Subject 7",
          details: "details of subject 7",
          tutor: "tutor 2"
        },
        {
          id: 8,
          title: "Subject 8",
          details: "details of subject 8",
          tutor: "tutor 3"
        },
        {
          id: 9,
          title: "Subject 9",
          details: "details of subject 9",
          tutor: "tutor 2"
        },
        {
          id: 10,
          title: "Subject 10",
          details: "details of subject 10",
          tutor: "tutor 1"
        },
        {
          id: 11,
          title: "Subject 11",
          details: "details of subject 11",
          tutor: "tutor 2"
        },
        {
          id: 12,
          title: "Subject 12",
          details: "details of subject 12",
          tutor: "tutor 5"
        }
      ],
      selectedSubjectList: []
    };
  },
  methods: {
    clone: function(el) {
      if (
        this.selectedSubjectList.length < 5 &&
        !this.selectedSubjectList.filter(e => e.id === el.id).length > 0
      ) {
        return el;
      } else {
        console.log("subjectList : ", this.subjectList);
        console.log("selected :", this.selectedSubjectList);
      }
    },
    log: function(evt) {
      window.console.log("evt", evt);
      if (evt.removed) {
        // if element is not in any list push it back to subjectList
        if (
          !this.selectedSubjectList.filter(e => e.id === evt.removed.element.id)
            .length > 0 &&
          !this.subjectList.filter(e => e.id === evt.removed.element.id)
            .length > 0
        ) {
          this.subjectList.push(evt.removed.element);
          this.alertSubjectSelect = true;
        }
      }
    },
    toggle(el) {
      el.active = !el.active;
    }
  }
};
</script>
