export const getItem = (key) => {
    try {
        console.log("Success getting data")
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log("Error getting data");
        return undefined
    }
}

export const setItem = (key, value) => {
    try {
        console.log("Success settin data")
        return localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log("Error setting data");
        return undefined
    }
}