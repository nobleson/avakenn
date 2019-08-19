<template>
  <div class="picker__footer">
    <button type="button" class="btn btn-flat clockpicker-button" tabindex="23" @click="handleDoneClick">{{done}}</button>
    <button type="button" class="btn btn-flat clockpicker-button" tabindex="23" @click="handleClearClick">{{clear}}</button>
  </div>
</template>

<script>
const ClockpickerFooter = {
  props: {
    done: String,
    clear: String
  },
  methods: {
    handleDoneClick() {
      this.$emit('doneClicked', true);
    },
    handleClearClick() {
      this.$emit('clearClicked', true);
    }
  }
}; 

export default ClockpickerFooter;
</script>