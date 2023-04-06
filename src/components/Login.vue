<template>
    <div class="w-50 form mx-auto">
        <p class="fs-1 text-center">Login</p>
        <form @submit.prevent class="text-center">
            <template v-if="error">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {{ error.message }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </template>
            <Input v-model="email" :type="'email'" :label="'Email'" />
            <Input v-model="password" :type="'password'" :label="'Password'" />
            <button type="submit" @click="onSendUser" class="mt-2 btn btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed:{
        ...mapState({
            isLoading: state => state.auth.isLoading,
            error: state => state.auth.err
        })
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
                }).catch((err) => {

                })
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width:768px) {
    .form {
        width: 70% !important;
    }
}

@media only screen and (max-width:514px) {
    .form {
        width: 90% !important;
    }
}

@media only screen and (max-width:368px) {
    .form {
        width: 100% !important;
    }
}
</style>