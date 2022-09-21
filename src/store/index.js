import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    profile: {},
    likes: 1,
  },
  getters: {
  
  },
  mutations: {
    getLikes(state) {
      console.log(state);
    },
    getProfile(state) {
      axios
        .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
        .then(response => {
            state.profile = response.data
            console.log(state.profile);
        });
    }
  },
  actions: {
    
  },
  modules: {

  }
})
