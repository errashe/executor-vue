import { createApp } from 'vue'
import App from './App.vue'
import Current from './components/Current.vue';

const app = createApp(App)

app.component('Current', Current);

app.mount('#app')
