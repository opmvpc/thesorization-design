<template>
  <div class="h-full bg-primary-800 flex items-center justify-center">
    <div class="flex flex-col space-y-10">
      <div
        class="text-gray-100 flex items-center justify-center font-bold text-2xl font-mono"
      >
        Thesorization
      </div>
      <div class="bg-white shadow-xl rounded-lg">
        <form class="flex flex-col px-12 py-8 space-y-5">
          <label class="w-full flex flex-col text-primary-600 font-bold">
            Email
            <input-text class="w-72"></input-text>
          </label>
          <label class="w-full flex flex-col text-primary-600 font-bold">
            Password
            <input-password class="w-72"></input-password>
          </label>
          <div class="flex justify-end pt-2">
            <button-primary>Se connecter</button-primary>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "../inputs/InputText.vue";
import InputPassword from "../inputs/InputPassword.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";

export default {
  name: "Login",
  components: { InputText, InputPassword, ButtonPrimary }
};
</script>

<style></style>
