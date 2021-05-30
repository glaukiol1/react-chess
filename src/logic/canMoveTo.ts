function nextChar(c:string,n:number) {
    return String.fromCharCode(c.charCodeAt(0) + n);
}

function prevChar(c:string,n:number) {
    return String.fromCharCode(c.charCodeAt(0) - n);
}

const knight = (pos: string, color: string): Array<string> => {
    var total: Array<string> = [];
    total.push(
        `${nextChar(pos[0],2)}${color==='b'?parseInt(pos[1])-1:parseInt(pos[1])+1}`
    )
    total.push(
        `${nextChar(pos[0],1)}${color==='b'?parseInt(pos[1])-2:parseInt(pos[1])+2}`
    )
    total.push(
        `${prevChar(pos[0],1)}${color==='b'?parseInt(pos[1])-2:parseInt(pos[1])+2}`
    )
    total.push(
        `${prevChar(pos[0],2)}${color==='b'?parseInt(pos[1])-1:parseInt(pos[1])+1}`
    )
    total.push(
        `${nextChar(pos[0],1)}${color==='b'?parseInt(pos[1])+2:parseInt(pos[1])-2}`
    )
    total.push(
        `${prevChar(pos[0],1)}${color==='b'?parseInt(pos[1])+2:parseInt(pos[1])-2}`
    )
    total.push(
        `${nextChar(pos[0],2)}${color==='b'?parseInt(pos[1])+1:parseInt(pos[1])-1}`
    )
    total.push(
        `${prevChar(pos[0],2)}${color==='b'?parseInt(pos[1])+1:parseInt(pos[1])-1}`
    )
    return total
}

const a = (currentPos: string, piece: string, color: string): Array<string> => {
    if(piece.toLowerCase()==='n') {
        return knight(currentPos, color)
    }
    return ['undefined']
}

export default a;