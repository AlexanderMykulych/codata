<script setup lang="ts">
import { Editor } from '@guolao/vue-monaco-editor'

const code = defineModel<string>('code')

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: false,
  formatOnPaste: false,
}
</script>

<template>
  <Editor
    v-model:value="code"
    theme="vs-dark"
    language="javascript"
    :options="MONACO_EDITOR_OPTIONS"
  />
</template>
