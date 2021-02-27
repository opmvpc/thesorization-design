<template>
  <div class="components">
    <h1>Form</h1>
    <section>
      <h2>text input</h2>
      <div class="my-5">
        <input type="text" name="first_name" id="first_name" />
      </div>
      <h2>label</h2>
      <div>
        <label for="first_name">First Name</label>
      </div>
      <h2>bouton</h2>
      <div class="flex justify-between my-5">
        <div class="flex flex-col items-center">
          <button-primary>Primary</button-primary>
        </div>
        <div class="flex flex-col items-center">
          <button-secondary>Secondary</button-secondary>
        </div>
        <div class="flex flex-col items-center">
          <button-ternary>Ternary</button-ternary>
        </div>
      </div>
      <h2>Text Area</h2>
      <div class="my-5">
        <textarea
          class="form-textarea mt-1 block"
          placeholder="Enter some text..."
        ></textarea>
      </div>
      <h2>Select</h2>
      <div class="my-5">
        <select class="form-select block  mt-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <h2>Check Box</h2>
      <div>
        <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" checked>
        <span class="ml-2">Option 1</span>
        </label>
      </div>
    </section>
  </div>
</template>
<script>
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import ButtonTernary from "../components/buttons/ButtonTernary";

export default {
  name: "Components",
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonTernary
  }
};
</script>
