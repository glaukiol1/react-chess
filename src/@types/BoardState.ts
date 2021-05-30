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
    a1: string,
    a2: string,
    a3: string,
    a4: string,
    a5: string,
    a6: string,
    a7: string,
    a8: string,
    b1: string,
    b2: string,
    b3: string,
    b4: string,
    b5: string,
    b6: string,
    b7: string,
    b8: string,
    c1: string,
    c2: string,
    c3: string,
    c4: string,
    c5: string,
    c6: string,
    c7: string,
    c8: string,
    d1: string,
    d2: string,
    d3: string,
    d4: string,
    d5: string,
    d6: string,
    d7: string,
    d8: string,
    e1: string,
    e2: string,
    e3: string,
    e4: string,
    e5: string,
    e6: string,
    e7: string,
    e8: string,
    f1: string,
    f2: string,
    f3: string,
    f4: string,
    f5: string,
    f6: string,
    f7: string,
    f8: string,
    g1: string,
    g2: string,
    g3: string,
    g4: string,
    g5: string,
    g6: string,
    g7: string,
    g8: string,
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    h6: string,
    h7: string,
    h8: string,
}

export default interface state {
    history: history,
    placing: placing,
    player: string
}