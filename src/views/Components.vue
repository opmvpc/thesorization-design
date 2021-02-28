<template>
  <div>
    <toc></toc>
    <div class="container px-3 sm:mx-auto components">
      <h1>Form</h1>
      <section>
        <h2>text input</h2>
        <div></div>
        <h2>label</h2>
        <div></div>
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
        <h2>check list</h2>
        <div></div>
      </section>
      <h1>Form</h1>
      <section></section>
    </div>
  </div>
</template>
<script>
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import ButtonTernary from "../components/buttons/ButtonTernary";
import Toc from '../components/Toc.vue';

export default {
  name: "Components",
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonTernary,
    Toc
  }
};
</script>
