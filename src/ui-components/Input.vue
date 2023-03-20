<template>
    <div class="mt-3 form-floating">
        <input :value="modelValue" @input="this.$emit('update:modelValue', $event.target.value)" class="form-control" id="floatingPassword" :placeholder="label">
        <label for="floatingPassword">{{ label }}</label>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue:[String]
    },
    name:'Input',
}
</script>
<style></style>