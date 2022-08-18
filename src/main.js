import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAgile from 'vue-agile';
import Vue2Editor from 'vue2-editor';
import firebase from 'firebase/app';
import 'firebase/auth';
import VueTypedJs from 'vue-typed-js';

let app;
firebase.auth().onAuthStateChanged(() => {
    if(!app) {
        createApp(App).use(store, VueAgile, Vue2Editor, VueTypedJs).use(router).mount('#app');
    };
});

