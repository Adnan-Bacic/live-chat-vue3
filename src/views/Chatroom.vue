
<template>
  <div class="container">
      <Navbar />
      <ChatWindow />
       <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser, { user } from '../composables/getUser'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
    components:{
        Navbar,
        NewChatForm,
        ChatWindow
    },
    setup(){
        const { user } = getUser()
        const router = useRouter()

        //redirect on logout, when currentUser is null
        watch(user, () => {
            if(!user.value){
                router.push({
                    name: 'Welcome'
                })
            }
        })
    }
}
</script>

<style>
</style>