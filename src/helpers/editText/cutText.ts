

export const cutText = (text:string | undefined, word:string | null, word2?:string | null ):string[] | null => {
    let first = null
    if(text && word){
       first = text.split(word)
    }
    let second = null
    if(word2 && first){
     second = first[1].split(word2)
    }
    if(!text){
        return ["No info"]
    }
    return word2 ? second : first
}