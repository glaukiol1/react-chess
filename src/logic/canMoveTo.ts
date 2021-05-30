/**
 * @description Give it a 1 letter string, it will go forward `c` times in the alphabet.
 * @param c character (a-z)
 * @param n number to go forward,
 * @returns string
 */
function nextChar(c:string,n:number) {
    return String.fromCharCode(c.charCodeAt(0) + n);
}

/**
 * @description Give it a 1 letter string, it will go back `c` times in the alphabet.
 * @param c character (a-z)
 * @param n number to go back,
 * @returns string
 */
function prevChar(c:string,n:number) {
    return String.fromCharCode(c.charCodeAt(0) - n);
}

/**
 * @description Logic of the knight piece.
 * @param pos current position of the knight
 * @param color color of the side, white: w | black: b
 * @returns {Array<string>} array containing available moves (a1-h8) of a specified knight
 */

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

/**
 * @description Logic for available moves, will return an Array<string> of available moves.
 * @param currentPos Current position of the piece (a1-h8)
 * @param piece piece tag (r | n | b | q | k | p)
 * @param color color of the side, black: b || white: w
 * @returns {Array<string>} an array with containing available moves, if the piece tag is null/incorrect, it will return ['undefined']
 */
const canMoveTo = (currentPos: string, piece: string, color: string): Array<string> => {
    if(piece.toLowerCase()==='n') {
        return knight(currentPos, color)
    }
    return ['undefined']
}

export default canMoveTo;