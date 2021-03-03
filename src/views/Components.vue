<template>
  <div>
    <toc></toc>
    <div class="container px-3 py-2 sm:mx-auto components">
      <h1>Inputs</h1>
      <section>
        <h2>Text</h2>
        <div class="mb-8">
          <input-text placeholder="username"></input-text>
        </div>
        <h2>Password</h2>
        <div class="mb-8">
          <input-password placeholder="password"></input-password>
        </div>
        <h2>label</h2>
        <div class="mb-8">
          <label class="w-52 flex flex-col text-gray-500">
            Username :
            <input-text></input-text>
          </label>
        </div>
        <h2>Checkbox</h2>
        <div class="mb-8">
          <label class="block text-gray-500">
            <input type="checkbox" class="form-checkbox" checked />
            <span class="ml-2">Entrée</span>
          </label>
          <label class="block text-gray-500">
            <input type="checkbox" class="form-checkbox" checked />
            <span class="ml-2">Plat</span>
          </label>
          <label class="block text-gray-500">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">Dessert</span>
          </label>
        </div>
        <h2>Radio</h2>
        <div class="mb-8">
          <label class="block text-gray-500">
            <input type="radio" name="sexe" class="form-radio" />
            <span class="ml-2">Homme</span>
          </label>
          <label class="block text-gray-500">
            <input type="radio" name="sexe" class="form-radio" />
            <span class="ml-2">Femme</span>
          </label>
          <label class="block text-gray-500">
            <input type="radio" name="sexe" class="form-radio" checked />
            <span class="ml-2">Autre</span>
          </label>
        </div>
        <h2>Select</h2>
        <div>
          <label class="block">
            <span class="w-full flex flex-col text-gray-500">Pays :</span>
            <select
              class="form-select border my-2 py-2 px-3 text-gray-800 rounded-md shadow hover:bg-primary-50 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
            >
              <option>Belgique</option>
              <option>France</option>
            </select>
          </label>
        </div>
      </section>
      <h1>Boutons</h1>
      <section>
        <div class="flex justify-around my-5">
          <div>
            <button-primary>Primary</button-primary>
          </div>
          <div>
            <button-secondary>Secondary</button-secondary>
          </div>
          <div>
            <button-ternary>Ternary</button-ternary>
          </div>
        </div>
      </section>
      <h1>Form</h1>
      <section>
        <div class="content-center">
          <div
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 max-w-xl"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="">
                <label class="block text-gray-600">
                  First name :
                  <input-text class="w-full"></input-text>
                </label>
              </div>
              <div class="">
                <label class="block text-red-600">
                  Last name :
                  <input-text class="border-red-600 w-full"></input-text>
                </label>
                <p class="text-red-600 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div class="mt-6 flex justify-end space-x-6">
              <button-ternary>Cancel</button-ternary>
              <button-primary>Save</button-primary>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import ButtonTernary from "../components/buttons/ButtonTernary";
import InputText from "../components/inputs/InputText";
import InputPassword from "../components/inputs/InputPassword";
import Toc from "../components/Toc.vue";

export default {
  name: "Components",
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonTernary,
    InputText,
    InputPassword,
    Toc
  }
};
</script>
