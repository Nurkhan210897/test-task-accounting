import firebase from "firebase/app"

export const actions = {
    async login({ dispatch, commit }, { email, password, name }) {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            const uid = await dispatch('getUid');
            await firebase.database().ref(`/users/${uid}/info`).set({
                name
            })
        } catch (e) {
            commit('setError')
            throw e
        }
    },

    getUid() {
        const user = firebase.auth().currentUser
        return user ? user.uid : null
    },

}