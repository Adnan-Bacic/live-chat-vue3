import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css
import './assets/main.css'

import { projectAuth } from './firebase/config'

let app;

//remount app for router to not redirect when refreshing
projectAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)
        .use(router)
        .mount('#app')
    }
})

/*
createApp(App).use(router).mount('#app')
*/