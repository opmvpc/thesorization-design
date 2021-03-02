<template>
  <div>
    <toc></toc>
    <div class="container px-3 py-2 sm:mx-auto components">
      <h1>Form</h1>
      <section>
        <h2>text input</h2>
        <div>
          <input-primary
            border-indigo-500
            placeholder="username"
          ></input-primary>
        </div>
        <div class="my-2">
          <input-password
            border-indigo-500
            placeholder="password"
          ></input-password>
        </div>
        <h2>label</h2>
        <div>
          <label class="block w-full">
            <span class="text-indigo-400 mr-2 ">Username :</span>
            <input-primary></input-primary>
          </label>
        </div>
        <h2>bouton</h2>
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
        <h2>checkbox</h2>
        <div>
          <label class="block">
            <span class="text-indigo-800 mr-2 ">True</span>
            <input
              type="checkbox"
              class="form-checkbox text-indigo-600"
              checked
            />
          </label>
          <label class="block">
            <span class="text-indigo-800 mr-2 ">False</span>
            <input type="radio" class="form-radio text-green-200" />
          </label>
        </div>
        <h2>select</h2>
        <div>
          <label class="block">
            <span class="text-indigo-800">Selection</span>
            <select class="form-select block border border-indigo-400 mt-1">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
        </div>
      </section>
      <h1>Form</h1>
      <section>
        <div class="content-center">
          <div
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 max-w-xl bg-primary-100"
          >
            <div class="mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 ">
                <label class="block">
                  <span class="text-indigo-800 mr-2 ">Lastname:</span>
                  <input-primary></input-primary>
                </label>
                <p class="text-red-600 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="md:w-1/2 px-3 mb-6 ">
                <label class="block">
                  <span class="text-indigo-800 mr-2 ">Firstname :</span>
                  <input-password></input-password>
                </label>
              </div>
            </div>
            <div class="mx-3 md:flex">
              <div class="md:w-1/2 px-3 mb-6 ">
                <button-primary>Save</button-primary>
              </div>
              <div class="md:w-1/2 px-3 mb-6 ">
                <button-ternary>Cancel</button-ternary>
              </div>
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
import InputPrimary from "../components/inputs/InputPrimary";
import InputPassword from "../components/inputs/InputPassword";
import Toc from "../components/Toc.vue";

export default {
  name: "Components",
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonTernary,
    InputPrimary,
    InputPassword,
    Toc
  }
};
</script>
