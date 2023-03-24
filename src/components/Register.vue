<template>
    <div class="w-50 mx-auto">
        <p class="fs-1 text-center">Register</p>
        <form @submit.prevent class="text-center">
            <Input v-model="firstName" :type="'text'" :label="'First Name'" />
            <Input v-model="lastName" :type="'text'" :label="'Last Name'" />
            <Input v-model="email" :type="'email'" :label="'Email'" />
            <Input v-model="password" :type="'password'" :label="'Password'" />
            <button type="submit" :disabled="isLoading" @click="onSendUser" class="mt-2 btn btn-primary">Register</button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.auth.isLoading
        })
    },
    methods: {
        onSendUser() {
            if (!this.firstName || !this.lastName || !this.email || !this.password) {
                alert("All fields are required")
                return
            }
            const newOBJ = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.lastName,
                password: this.password
            }
            this.$store.dispatch('getUser', newOBJ)
                .then((res) => {
                    console.log(res);
                    this.$router.push('/')
                }).catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>
<style></style>