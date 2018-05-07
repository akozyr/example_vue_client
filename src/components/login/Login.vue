<template>
  <div class="login-container">
    <h1>Login to Your Account</h1><br>
    <b-alert
      variant="danger"
      dismissible
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert = false"
    >
      {{ message }}
    </b-alert>
    <b-form @submit.prevent="onSubmit()">
      <b-form-input
        v-model="credentials.email"
        type="email"
        placeholder="Email"
        required
      >
      </b-form-input>
      <b-form-input
        v-model="credentials.password"
        type="password"
        placeholder="Password"
        required
      >
      </b-form-input>
      <b-button
        type="submit"
        variant="primary"
        class="login login-submit"
      >Login</b-button>
    </b-form>
  </div>
</template>

<script src="./Login.js"></script>

<style src="@/assets/css/login/login.css"></style>
