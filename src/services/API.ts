
    
export const getAllItems = async (page:number = 1) => {
        const BASE_URL = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?page=${page}`
        const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
        const response = await fetch(BASE_URL, {
            headers : {
                "Authorization" : `Bearer ${token}`
            },
        }).then(res => res.json())
    return response
}