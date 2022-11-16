export const devideText = (text?:string):string[] => {
    let first = null
    if(text){
        first = text.split(".").filter(elem => elem !== "\n\n")
        return first
    }
    return  ["No Info"]
}