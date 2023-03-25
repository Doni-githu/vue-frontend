export const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log("Error getting data");
        return undefined
    }
}

export const setItem = (key, value) => {
    try {
        return localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log("Error setting data");
        return undefined
    }
}

export const removeItem = (key) => {
    try {
        return localStorage.removeItem(key)
    } catch (error) {
        console.log("Error", error)
        return undefined
    }
}