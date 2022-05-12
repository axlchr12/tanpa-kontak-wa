<template>
  <footer>
    <span> &copy;{{ currentYear }}. TanpaKontakWA.</span>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  },
};
</script>

<style>
footer {
  margin: 50px 0;
}
</style>
