export const addZero = (salary:string):string => {
    const parse = salary.split("-")
    const firstParse = parseFloat(parse[0])
    const secondParse = parseFloat(parse[1])
    return ` ${firstParse} 000 - ${secondParse} 000`

}