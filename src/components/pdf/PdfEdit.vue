<template>
  <div>
    <h3>Update Form</h3>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-textarea
        v-model="pdfData.text"
        placeholder="Please enter a custom part of the pdf"
        rows="2"
        max-rows="3"
        required
      ></b-form-textarea>
      <b-button
        variant="primary"
        type="submit"
      >
        Recreate a pdf
      </b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script src="./PdfEdit.js"></script>
