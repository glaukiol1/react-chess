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
    a1: string | any,
    a2: string | any,
    a3: string | any,
    a4: string | any,
    a5: string | any,
    a6: string | any,
    a7: string | any,
    a8: string | any,
    b1: string | any,
    b2: string | any,
    b3: string | any,
    b4: string | any,
    b5: string | any,
    b6: string | any,
    b7: string | any,
    b8: string | any,
    c1: string | any,
    c2: string | any,
    c3: string | any,
    c4: string | any,
    c5: string | any,
    c6: string | any,
    c7: string | any,
    c8: string | any,
    d1: string | any,
    d2: string | any,
    d3: string | any,
    d4: string | any,
    d5: string | any,
    d6: string | any,
    d7: string | any,
    d8: string | any,
    e1: string | any,
    e2: string | any,
    e3: string | any,
    e4: string | any,
    e5: string | any,
    e6: string | any,
    e7: string | any,
    e8: string | any,
    f1: string | any,
    f2: string | any,
    f3: string | any,
    f4: string | any,
    f5: string | any,
    f6: string | any,
    f7: string | any,
    f8: string | any,
    g1: string | any,
    g2: string | any,
    g3: string | any,
    g4: string | any,
    g5: string | any,
    g6: string | any,
    g7: string | any,
    g8: string | any,
    h1: string | any,
    h2: string | any,
    h3: string | any,
    h4: string | any,
    h5: string | any,
    h6: string | any,
    h7: string | any,
    h8: string | any,
}

export default interface state {
    history: history,
    placing: placing,
    player: string
}