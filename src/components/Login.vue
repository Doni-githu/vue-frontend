<template>
    <div class="w-50 mx-auto">
        <p class="fs-1 text-center">Login</p>
        <form @submit.prevent class="text-center">
            <Input v-model="email" :type="'email'" :label="'Email'" />
            <Input v-model="password" :type="'password'" :label="'Password'" />
            <button type="submit" @click="onSendUser" class="mt-2 btn btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSendUser() {
            if (!this.email || !this.password) {
                alert("All fields are required")
                return
            }
            const newOBJ = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', newOBJ)
                .then((res) => {
                    this.$router.push('/')
                })
        }
    }
}
</script>
<style></style>