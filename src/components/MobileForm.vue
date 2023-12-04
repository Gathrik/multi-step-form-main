<script setup>
import { ref } from 'vue';

const currentStep = ref(1);
const name = ref('');
const email = ref('');
const phone = ref('');

const validateForm = () => {
  // Add your validation logic here
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
  <div class="z-10 flex h-screen flex-col">
    <div class="flex justify-center mt-6">
      <div class="w-8 h-8 mx-2 rounded-full flex items-center justify-center"
           :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 1, 'bg-primary-light-blue text-black': currentStep === 1 }">1</div>
      <div class="w-8 h-8 mx-2 rounded-full flex items-center justify-center"
           :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 2, 'bg-primary-light-blue text-black': currentStep === 2 }">2</div>
      <div class="w-8 h-8 mx-2 rounded-full flex items-center justify-center"
           :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 3, 'bg-primary-light-blue text-black': currentStep === 3 }">3</div>
      <div class="w-8 h-8 mx-2 rounded-full flex items-center justify-center"
           :class="{ 'border border-neutral-white bg-transparent text-neutral-white': currentStep !== 4, 'bg-primary-light-blue text-black': currentStep === 4 }">4</div>
    </div>
    <div v-if="currentStep === 1" class="mx-auto my-10       h-auto w-11/12 flex-col justify-center rounded-xl p-6 align-middle shadow-lg step-1 bg-neutral-white">black
      <h1 class="my-2 text-2xl text-primary-marine-blue">Personal Info</h1>
      <p class="my-2 text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
      <div class="my-2">
        <p class="text-sm text-primary-marine-blue">Name</p>
        <input v-model="name" class="mx-auto w-full rounded border px-4 py-2" type="text" placeholder="e.g. Stephen King">
      </div>
      <div class="my-2">
        <p class="text-sm text-primary-marine-blue">Email Address</p>
        <input v-model="email" class="mx-auto w-full rounded border px-4 py-2" type="text" placeholder="e.g. stephenking@lorem.com">
      </div>
      <div class="my-2">
        <p class="text-sm text-primary-marine-blue">Phone Number</p>
        <input v-model="phone" class="mx-auto w-full rounded border px-4 py-2" type="text" placeholder="e.g. +1 234 567 890">
      </div>
    </div>
    <footer class="mt-auto flex h-16 items-center justify-between bg-neutral-white">
      <div class="flex w-full justify-start">
        <button class="ml-4 text-neutral-cool-gray" v-if="currentStep === 2" @click="currentStep--">Go Back</button>
      </div>
      <div class="flex w-full justify-end">
        <button class="mr-4 h-1/2 rounded px-4 py-2 bg-primary-marine-blue text-neutral-white" v-if="currentStep === 1" @click="nextStep">Next Step</button>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>