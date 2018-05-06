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
    <form>
      <input type="text" name="nickname" placeholder="Nickname" autofocus required>
      <input type="password" name="password" placeholder="Password" required>
      <input type="submit" name="login" class="login login-submit" value="Login">
    </form>
  </div>
</template>

<script src="./Login.js"></script>

<style src="@/assets/css/login/login.css"></style>
