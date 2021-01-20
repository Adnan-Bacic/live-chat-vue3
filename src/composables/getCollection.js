
import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let coollectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    const unsub = coollectionRef.onSnapshot((snapshot) => {
        console.log('snapshot')
        let results = []

        snapshot.docs.forEach((doc) => {
            doc.data().createdAt && results.push({
                ...doc.data(),
                id: doc.id
            })

            documents.value = results
            error.value = null
        }, (err) => {
            console.log(err.message)
            documents.value = null
            error.value = 'Could not get messages'
        })
    })

    //unsubscribe from prev collection when watcher is stopped
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return{
        documents,
        error
    }
}

export default getCollection