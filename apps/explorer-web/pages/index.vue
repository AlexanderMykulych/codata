<script setup lang="ts">
const code = ref(`
const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}
const code = ref('')
`)
</script>

<template>
  <div class="h-full flex">
    <div class="w-full">
      <CodeEditor
        v-model:code="code"
      />
    </div>
    <div class="w-full">
      {{ tokens }}

      <pre>{{ hast }}</pre>
    </div>
  </div>
</template>
