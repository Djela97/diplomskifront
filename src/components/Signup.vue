<template>
    <div class="vue-tempalte">
        <form @submit="postData" method="post">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Username</label>
                <input type="text" v-model="clientInput.username" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="clientInput.mail" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="clientInput.password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios);
    export default {
        data() {
            return {
                clientInput:{
                    username: "",
                    mail: "",
                    password: ""
                }
            }
        },
        methods: {
            postData(e) {
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                };
                console.log(this.clientInput.mail + ' ' + this.clientInput.password);
                axios.post("http://localhost:8080/register", JSON.stringify(this.clientInput), {headers})
                    .then((result) => {
                        console.log(result.data);
                        // let payload = {
                        //     mail: 'abcd',
                        //     username: 'ddd',
                        //     folders: []
                        // };
                        // payload.mail = result.data.mail;
                        // payload.username = result.data.username;
                        // payload.folders = result.data.folders;
                        // window.name = JSON.stringify(payload);
                        this.$alert("Success");
                        window.location.href = 'http://localhost:4000/login';
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$alert(error.response.data);
                    });
                e.preventDefault();
            }
        }
    }
</script>