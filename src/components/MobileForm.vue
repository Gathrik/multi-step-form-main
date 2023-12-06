<script setup>
import { ref } from 'vue';

const currentStep = ref(1);
const name = ref('');
const email = ref('');
const phone = ref('');

const validateForm = () => {
  return name.value && email.value && phone.value;
};

const nextStep = () => {
  if (validateForm()) {
    currentStep.value++;
    console.log('Name: ', name.value + '\nEmail: ', email.value + '\nPhone: ', phone.value);
  } else {
    alert('Please fill out all fields.');
  }
};
</script>

<template>
  <img class="absolute -z-10" src="../assets/images/bg-sidebar-mobile.svg" alt="">
  <div class="pt-6 flex justify-center">
    <div class="mx-2 flex h-8 w-8 items-center justify-center rounded-full"
         :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 1, 'bg-primary-light-blue text-black': currentStep === 1 }">1</div>
    <div class="mx-2 flex h-8 w-8 items-center justify-center rounded-full"
         :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 2, 'bg-primary-light-blue text-black': currentStep === 2 }">2</div>
    <div class="mx-2 flex h-8 w-8 items-center justify-center rounded-full"
         :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 3, 'bg-primary-light-blue text-black': currentStep === 3 }">3</div>
    <div class="mx-2 flex h-8 w-8 items-center justify-center rounded-full"
         :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 4, 'bg-primary-light-blue text-black': currentStep === 4 }">4</div>
  </div>
  <router-link :to="{ name: 'Step1' }"></router-link>
  <router-view></router-view>
  <footer class="mt-auto flex h-16 items-center justify-between bg-neutral-white">
    <div class="flex w-full justify-start">
      <button class="ml-4 text-neutral-cool-gray">Go Back</button>
    </div>
    <div class="flex w-full justify-end">
      <button class="mr-4 h-1/2 rounded px-4 py-2 bg-primary-marine-blue text-neutral-white">Next Step</button>
    </div>
  </footer>
</template>

<style scoped>

</style>