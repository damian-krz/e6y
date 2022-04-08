<template>
    <div class="registerContainer">
        <form class="registerContainer__form">
        <div class="registerContainer__logo">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/ey1.png" alt="e6y">
            </router-link>
        </div>
            <p class="registerContainer__login info">
                Already have an account? 
                <router-link class="link" :to="{ name: 'Login' }">Sign in</router-link>
            </p>
            <h2 class="registerContainer__header">Register</h2>
            <div class="registerContainer__inputs">
                <div class="registerContainer__inputs--input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                </div>
                <div class="registerContainer__inputs--input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                </div>
                <div class="registerContainer__inputs--input">
                    <input type="text" placeholder="Username" v-model="username">
                </div>
                <div class="registerContainer__inputs--input">
                    <input type="email" placeholder="Email" v-model="email">
                </div>
                <div class="registerContainer__inputs--input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <div v-show="error" class="error">{{ this.errorMsg }}</div>
            <button class="registerContainer__button" @click.prevent="register">Sign up</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../firebase/firebaseInit';

export default {
    name: 'Register',

    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        };
    },

    methods: {
        async register() {
            if(
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== "" &&
                this.email !== "" &&
                this.password !== ""
            ) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email: this.email,
                });
                this.$router.push({ name: 'Home' });
                return;
            };
            this.error = true;
            this.errorMsg = "Please fill out all the fields"
        },
    },
}
</script>

<style scoped lang="scss">
    .registerContainer {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

        &__logo {
            width: 15rem;
            height: 12rem;

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
            margin-top: 1rem;
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
            transition: all .2s ease-in-out;

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

        .error {
            color: magenta;
            padding: .5rem;
            font-weight: bold;
            font-size: 1rem;
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