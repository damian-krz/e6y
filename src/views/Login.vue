<template>
    <div class="loginContainer">
        <form class="loginContainer__form">
        <div class="loginContainer__logo">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/ey3.png" alt="e6y">
            </router-link>
        </div>
            <p class="loginContainer__register info">
                Don't have an account? 
                <router-link class="link" :to="{ name: 'Register' }">Sign Up</router-link>
            </p>
            <h2 class="loginContainer__header">Login    </h2>
            <div class="loginContainer__inputs">
                <div class="loginContainer__inputs--input">
                    <input type="email" placeholder="Email" v-model="email">
                </div>
                <div class="loginContainer__inputs--input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <router-link class="link info" :to="{ name: 'ForgotPassword' }">Forgot password?</router-link>
            <div v-show="error" class="error">{{ this.errorMsg }}</div>
            <button class="loginContainer__button" @click.prevent="login">Sign in</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    name: 'Login',

    data() {
        return {
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        };
    },

    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.push({ name: 'Home' });
                this.error = false;
                this.errorMsg = "";
            }).catch(err => {
                this.error = true;
                this.errorMsg = err.message;
            });
            console.log(firebase.auth().currentUser);
        },
    },
}
</script>

<style lang="scss">
    .loginContainer {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

        &__logo {
            width: 15rem;
            height: 12rem;
            border: 1px solid transparent;

            &:hover {
                animation: color 1.5s infinite;
            }
            
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            } 
        }

        &__form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &__header {
            font-size: 1.5rem;
            padding: .5rem;
        } 

        &__inputs {
            &--input {
                padding: .2rem;
                width: 250px;

                input {
                    width: 100%;
                    padding: .5rem;
                    outline: none;
                    font-weight: bold;
                    background-color: magenta;
                    color: white;
                    font-family: "Comfortaa", sans-serif;
                    border: 1px solid transparent;
                    font-weight: bold;

                        &::placeholder {
                            font-family: "Comfortaa", sans-serif;
                            color: white;
                            font-weight: bold;
                        }
                }
            }
        }

        &__button {
            padding: .5rem 2rem;
            cursor: pointer;
            width: 250px;
            background: black;
            font-weight: bold;
            font-size: 1rem;
            border: 1px solid transparent;
            outline: none;
            transition: all .2s ease-in-out;
            color: white;
            font-family: 'Comfortaa', sans-serif;

            &:hover {
                animation: color 1.5s infinite;
            }

            &:focus {
                animation: color 1.5s infinite;
            }

        }

        .link {
            text-decoration: none;
            color: magenta;
            padding: .2rem;
            outline: none;

            &:hover {
                animation: color 1.5s infinite;
            }

            &:focus {
                animation: color 1.5s infinite;
            }
        }

        .info {
            font-size: 1rem;
            padding: 1rem;
        }

        @keyframes color {
            0% {
                color:#FF69B4;
                background-color: #9400D3;
            }
            14% {
                color:#FE2020;
                background-color: #4B0082;
            }
            28% {
                color:#FFA500;
                background-color: #40E0D0;
            }
            42% {
                color:#FFFF00;
                background-color: #008000;
            }
            56% {
                color:#008000;
                background-color: #FFFF00;
            }
            70% {
                color:#40E0D0;
                background-color: #FFA500;
            }
            84% {
                color:#4B0082;
                background-color: #FE2020;
            }
            100% {
                color:#9400D3;
                background-color: #FF69B4;
            }
        }

        .error {
            color: magenta;
            padding: .5rem;
            font-weight: bold;
            font-size: 1rem;
        }
    }
</style>