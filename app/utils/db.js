import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAppState = async (value) => {
    try {
        await AsyncStorage.setItem('@appState', value.toString())
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getAppState = async () => {
    try {
        const value = await AsyncStorage.getItem('@appState')
        console.log("test",value);
        return parseInt(value);
    } catch(e) {
        return 0
    }
}

export const clearData = async () => {
    try {
        await AsyncStorage.clear()
        return Promise.resolve();
    } catch(e) {
        return Promise.reject(e);
    }
}

export const createUserData = async (data)=>{
    try {
        const jsonData = JSON.stringify(data)
        await AsyncStorage.setItem('@__user', jsonData)
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    }
}

export const getUserData = async ()=>{
    try {
        let value = await AsyncStorage.getItem('@__user')      
        return value !== null? JSON.parse(value) : null;
    } catch(e) {
        return null
    }
}

export const getAppToken = async ()=>{
    const userData = await getUserData();
    return (userData != null) ? userData.token : null
}