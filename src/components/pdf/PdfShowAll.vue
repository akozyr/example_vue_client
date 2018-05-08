<template>
  <div>
    <b-table
      v-if="items.length"
      :items="tableHeaderItems"
      :fields="fields"
      hover
    >
      <template slot="actions" slot-scope="data">
        <b-link :href="data.item.link" target="_blank">Show</b-link>
        <b-link :to="{ name: 'pdf-show', params: { id: data.index } }">Edit</b-link>
        <b-link @click="onDelete(data.index)">Delete</b-link>
      </template>
    </b-table>
    <div v-else>
      <b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-textarea
          v-for="pdf in pdfFormNewItems"
          :key="pdf.type"
          v-model="pdfData[pdf.model_name]"
          :placeholder="getPdfDataItemPlaceholder(pdf.type)"
          rows="2"
          max-rows="3"
          required
        ></b-form-textarea>
        <b-button
          id="b-create-pdfs"
          variant="primary"
          type="submit"
        >
          Create Pdf Files
        </b-button>
        <b-popover
          target="b-create-pdfs"
          placement="bottomright"
          title="Pdf files haven't been created yet."
          triggers="hover focus"
          content="Please click for creating pdf files.">
        </b-popover>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script src="./PdfShowAll.js"></script>
