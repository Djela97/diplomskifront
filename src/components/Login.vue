<template>
    <div class="vue-tempalte">
        <form @submit="postData" method="post">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" name="email" v-model="clientInput.mail" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" v-model="clientInput.password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

<!--            <div class="social-icons">-->
<!--                <ul>-->
<!--                    <li><a href="#"><i class="fa fa-google"></i></a></li>-->
<!--                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                </ul>-->
<!--            </div>-->
            <a href="/signup"><button type="button" class="btn btn-primary btn-lg custom">Sign
                up</button></a>
        </form>
    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        data() {
            return{
                clientInput:{
                    mail: "",
                    password: ""
                }
            }
        },
        methods:{
          postData(e){
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                };
              console.log(this.clientInput.mail + ' ' + this.clientInput.password);
              axios.post("https://diplomski-quarkus.herokuapp.com/login", JSON.stringify(this.clientInput), {headers})
              .then( (result) => {
                  console.log(result.data);
                  let payload = {
                    mail: 'abcd',
                    username: 'ddd',
                    folders: []
                  };
                  payload.mail = result.data.mail;
                  payload.username = result.data.username;
                  payload.folders = result.data.folders;
                  window.name = JSON.stringify(payload);
                  window.location.href = 'https://diplomski-mailbox.herokuapp.com/inbox';
                  // window.location.href = 'http://localhost:4001/inbox';
              })
              .catch( (error) =>{
                  console.log(error);
                  this.$alert(error.response.data);
              });
              e.preventDefault();
          }
        }
    }
</script>