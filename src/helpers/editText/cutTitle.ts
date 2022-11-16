const cutTitle = (title:string):string => {
    const ed = title.split(' ').slice(0, 5).join(" ")
    return `${ed}...`
}

export default cutTitle