  
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)

const logout = async () => {
    error.value = null

    try{
        await projectAuth.signOut()
    }
    catch(err){
        console.warn(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return{
        logout,
        error
    }
}

export default useLogout