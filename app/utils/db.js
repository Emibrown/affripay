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
