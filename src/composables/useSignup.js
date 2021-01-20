import { ref } from 'vue'
import { projectAuth } from '../firebase/config';

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try{
        //create user
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if(!res){
            throw new Error('Could not complete signup')
        }

        await res.user.updateProfile({
            displayName: displayName
        })
        error.value = null

        return res

        //console.log(res.user)
    }
    catch(err){
        console.warn(err.message)
        error.value = err.message
    }
}

const useSignup = () => {
    return{
        error,
        signup
    }
}

export default useSignup