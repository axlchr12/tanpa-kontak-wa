<template>
  <WhatsAppInputForm />
  <Footer />
</template>

<script>
// @ is an alias to /src
import WhatsAppInputForm from '../components/WhatsAppInputForm.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'HomeView',
  components: { WhatsAppInputForm, Footer },
};
</script>
