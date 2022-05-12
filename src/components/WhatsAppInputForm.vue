<template>
  <form @submit.prevent="handleSubmit">
    <label for="phoneNumber">Phone Number</label>
    <input
      inputmode="numeric"
      oninput="this.value = this.value.replace(/\D+/g, '')"
      v-model="phoneNumber"
      autocomplete="off"
      required
      placeholder="contoh: 8112233445"
    />
    <div v-if="phoneNumberError" class="error">{{ phoneNumberError }}</div>
    <label for="message">Message</label>
    <input
      type="text"
      v-model="message"
      autocomplete="off"
      placeholder="contoh: haii"
    />
    <div v-if="messageError" class="error">{{ messageError }}</div>
    <div class="submit">
      <button type="submit">KIRIM PESAN</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      phoneNumberError: '',
      message: '',
      messageError: '',
      url: '',
    };
  },
  methods: {
    handleSubmit() {
      this.phoneNumberError =
        this.phoneNumber.length > 13 ? 'Phone Number maksimal 13 angka' : '';
      this.messageError = this.message.length ? '' : 'Message harus diisi';

      if (!this.phoneNumberError && !this.messageError) {
        this.url =
          'https://api.whatsapp.com/send/?phone=62' +
          this.phoneNumber +
          '&text=' +
          this.message +
          '';
        console.log(this.url);
        window.open(
          this.url,
          '_blank' // <- This is what makes it open in a new window.
        );
      }
    },
  },
};
</script>

<style>
* {
  font-family: 'Rubik', sans-serif;
}

form {
  max-width: 400px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.submit {
  text-align: center;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
