import firebase from "firebase/app"

export const actions = {
    async login({ dispatch, commit }, { email, password }) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (e) {
            commit('setError')
            throw e
        }
    },
}