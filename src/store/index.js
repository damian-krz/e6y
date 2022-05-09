import { createStore } from 'vuex'
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../firebase/firebaseInit';

export default createStore({
  state: {
    sampleBlogPost: [
      {
        blogTitle: 'This is sample title',
        blogPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet suscipit metus. Suspendisse blandit velit purus, eget dictum dui accumsan sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean rhoncus ligula a justo viverra, eget dictum orci convallis. Sed sollicitudin lacinia lorem, non molestie risus. Nam vestibulum hendrerit dictum. Proin vel dignissim diam. Donec suscipit, lorem ut dictum facilisis, libero neque auctor nisi, eget dapibus justo lacus quis justo.',
        blogPhoto: '3'
      },
      {
        blogTitle: 'This is sample title',
        blogPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet suscipit metus. Suspendisse blandit velit purus, eget dictum dui accumsan sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean rhoncus ligula a justo viverra, eget dictum orci convallis. Sed sollicitudin lacinia lorem, non molestie risus. Nam vestibulum hendrerit dictum. Proin vel dignissim diam. Donec suscipit, lorem ut dictum facilisis, libero neque auctor nisi, eget dapibus justo lacus quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet suscipit metus. Suspendisse blandit velit purus, eget dictum dui accumsan sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean rhoncus ligula a justo viverra, eget dictum orci convallis. Sed sollicitudin lacinia lorem, non molestie risus. Nam vestibulum hendrerit dictum. Proin vel dignissim diam. Donec suscipit, lorem ut dictum facilisis, libero neque auctor nisi, eget dapibus justo lacus quis justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet suscipit metus. Suspendisse blandit velit purus, eget dictum dui accumsan sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean rhoncus ligula a justo viverra, eget dictum orci convallis. Sed sollicitudin lacinia lorem, non molestie risus. Nam vestibulum hendrerit dictum. Proin vel dignissim diam. Donec suscipit, lorem ut dictum facilisis, libero neque auctor nisi, eget dapibus justo lacus quis justo.',
        blogPhoto: '6'
      },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    updateUser(state, payload) { 
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("") +
      state.profileLastName.match(/(\b\S)?/g).join("");
    }
  },
  actions: {
    async getCurrentUser({commit}) {
      const dataBase  = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults  = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      
    },
  },
  modules: {
  }
})
