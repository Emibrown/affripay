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
    await AsyncStorage.setItem("__user", data.toString())
}

export const getUserData = async ()=>{
    let data = await AsyncStorage.getItem("__user")
    return data;
}

export const getAppToken = async ()=>{
    const userData = await getUserData();
    return (userData != null) ? userData.token : null
}