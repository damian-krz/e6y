<template>
    <div class="forgotPasswordContainer">
        <router-link class="link" :to="{ name: 'Login' }">Sign in</router-link>
        <router-link class="link" :to="{ name: 'Register' }">Sign Up</router-link>
        <form class="forgotPasswordContainer__form">
            <div class="forgotPasswordContainer__logo">
                <router-link :to="{ name: 'Home' }">
                    <img src="../assets/ey2.png" alt="e6y">
                </router-link>
            </div>
            <h2 class="forgotPasswordContainer__header">Reset password</h2>
            <p class="info">Forgot password? Enter your email</p>
            <div class="forgotPasswordContainer__inputs">
                <div class="forgotPasswordContainer__inputs--input">
                    <input type="email" placeholder="Email" v-model="email">
                </div>
            </div>
        <button class="forgotPasswordContainer__button" @click.prevent="resetPassword">Reset password</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    name: 'ForgotPassword',

    data() {
        return {
            email: "",
        };
    },

    methods: {
        resetPassword() {
            firebase.auth().sendPasswordResetEmail(this.email).then(() => {

            }).catch(err => {

            });
        },
    },
}
</script>

<style scoped lang="scss">
    .forgotPasswordContainer {
        color: white;
        display: flex;
        flex-direction: column;
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
                font-weight: bold;

                input {
                    width: 100%;
                    padding: .5rem;
                    outline: none;
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
    }
</style>