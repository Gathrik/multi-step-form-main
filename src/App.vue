<script>
import MobileForm from './components/MobileForm.vue';
import DesktopForm from './components/DesktopForm.vue';

export default {
  components: {
    MobileForm,
    DesktopForm
  },
  data() {
    return {
      isMobile: window.innerWidth <= 375
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  },
  destroyed() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 375;
    }
  }
};
</script>

<template>
  <div id="app" >
    <div class="container">
      <div class="form-container">
        <mobile-form v-if="isMobile" />
        <desktop-form v-else />
      </div>
    </div>
  </div>
</template>


