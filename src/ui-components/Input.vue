<template>
    <div class="mt-3 form-floating">
        <input :type="type" :value="modelValue" @input="this.$emit('update:modelValue', $event.target.value)" class="form-control" :id="label" :placeholder="label">
        <label :for="label">{{ label }}</label>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        modelValue:[String]
    },
    name:'Input',
}
</script>
<style></style>