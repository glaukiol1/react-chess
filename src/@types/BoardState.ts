import Piece from '../util/Piece'

interface pawns {
    pawn1: Array<string>, // white: a2, black: a7
    pawn2: Array<string>, // white: b2, black: b7
    pawn3: Array<string>, // white: c2, black: c7
    pawn4: Array<string>, // white: d2, black: d7
    pawn5: Array<string>, // white: e2, black: e7
    pawn6: Array<string>, // white: f2, black: f7
    pawn7: Array<string>, // white: g2, black: g7
    pawn8: Array<string>, // white: h2, black: h7
}

interface rooks {
    rook1: Array<string>, // white: a1, black: a8
    rook2: Array<string>, // white: h1, black: h8
}

interface knights {
    knight1: Array<string>, // white: b1, black: b8
    knight2: Array<string> // white: g1, black: g8
}

interface bishops {
    bishop1: Array<string>, // white: c1, black: c8
    bishop2: Array<string> // white: f1, black, f8
}

interface playerHistory {
    pawns: pawns,
    rooks: rooks,
    knights: knights,
    bishops: bishops,
    king: Array<string>,
    queen: Array<string>
}

interface history extends Object {
    black: playerHistory,
    white: playerHistory,
}

interface placing extends Object {
    a1: React.ReactElement | string,
    a2: React.ReactElement | string,
    a3: React.ReactElement | string,
    a4: React.ReactElement | string,
    a5: React.ReactElement | string,
    a6: React.ReactElement | string,
    a7: React.ReactElement | string,
    a8: React.ReactElement | string,
    b1: React.ReactElement | string,
    b2: React.ReactElement | string,
    b3: React.ReactElement | string,
    b4: React.ReactElement | string,
    b5: React.ReactElement | string,
    b6: React.ReactElement | string,
    b7: React.ReactElement | string,
    b8: React.ReactElement | string,
    c1: React.ReactElement | string,
    c2: React.ReactElement | string,
    c3: React.ReactElement | string,
    c4: React.ReactElement | string,
    c5: React.ReactElement | string,
    c6: React.ReactElement | string,
    c7: React.ReactElement | string,
    c8: React.ReactElement | string,
    d1: React.ReactElement | string,
    d2: React.ReactElement | string,
    d3: React.ReactElement | string,
    d4: React.ReactElement | string,
    d5: React.ReactElement | string,
    d6: React.ReactElement | string,
    d7: React.ReactElement | string,
    d8: React.ReactElement | string,
    e1: React.ReactElement | string,
    e2: React.ReactElement | string,
    e3: React.ReactElement | string,
    e4: React.ReactElement | string,
    e5: React.ReactElement | string,
    e6: React.ReactElement | string,
    e7: React.ReactElement | string,
    e8: React.ReactElement | string,
    f1: React.ReactElement | string,
    f2: React.ReactElement | string,
    f3: React.ReactElement | string,
    f4: React.ReactElement | string,
    f5: React.ReactElement | string,
    f6: React.ReactElement | string,
    f7: React.ReactElement | string,
    f8: React.ReactElement | string,
    g1: React.ReactElement | string,
    g2: React.ReactElement | string,
    g3: React.ReactElement | string,
    g4: React.ReactElement | string,
    g5: React.ReactElement | string,
    g6: React.ReactElement | string,
    g7: React.ReactElement | string,
    g8: React.ReactElement | string,
    h1: React.ReactElement | string,
    h2: React.ReactElement | string,
    h3: React.ReactElement | string,
    h4: React.ReactElement | string,
    h5: React.ReactElement | string,
    h6: React.ReactElement | string,
    h7: React.ReactElement | string,
    h8: React.ReactElement | string
}

export default interface state {
    history: history,
    placing: placing,
    player: string
}