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
    a1: React.ReactElement | '',
    a2: React.ReactElement | '',
    a3: React.ReactElement | '',
    a4: React.ReactElement | '',
    a5: React.ReactElement | '',
    a6: React.ReactElement | '',
    a7: React.ReactElement | '',
    a8: React.ReactElement | '',
    b1: React.ReactElement | '',
    b2: React.ReactElement | '',
    b3: React.ReactElement | '',
    b4: React.ReactElement | '',
    b5: React.ReactElement | '',
    b6: React.ReactElement | '',
    b7: React.ReactElement | '',
    b8: React.ReactElement | '',
    c1: React.ReactElement | '',
    c2: React.ReactElement | '',
    c3: React.ReactElement | '',
    c4: React.ReactElement | '',
    c5: React.ReactElement | '',
    c6: React.ReactElement | '',
    c7: React.ReactElement | '',
    c8: React.ReactElement | '',
    d1: React.ReactElement | '',
    d2: React.ReactElement | '',
    d3: React.ReactElement | '',
    d4: React.ReactElement | '',
    d5: React.ReactElement | '',
    d6: React.ReactElement | '',
    d7: React.ReactElement | '',
    d8: React.ReactElement | '',
    e1: React.ReactElement | '',
    e2: React.ReactElement | '',
    e3: React.ReactElement | '',
    e4: React.ReactElement | '',
    e5: React.ReactElement | '',
    e6: React.ReactElement | '',
    e7: React.ReactElement | '',
    e8: React.ReactElement | '',
    f1: React.ReactElement | '',
    f2: React.ReactElement | '',
    f3: React.ReactElement | '',
    f4: React.ReactElement | '',
    f5: React.ReactElement | '',
    f6: React.ReactElement | '',
    f7: React.ReactElement | '',
    f8: React.ReactElement | '',
    g1: React.ReactElement | '',
    g2: React.ReactElement | '',
    g3: React.ReactElement | '',
    g4: React.ReactElement | '',
    g5: React.ReactElement | '',
    g6: React.ReactElement | '',
    g7: React.ReactElement | '',
    g8: React.ReactElement | '',
    h1: React.ReactElement | '',
    h2: React.ReactElement | '',
    h3: React.ReactElement | '',
    h4: React.ReactElement | '',
    h5: React.ReactElement | '',
    h6: React.ReactElement | '',
    h7: React.ReactElement | '',
    h8: React.ReactElement | ''
}

export default interface state {
    history: history,
    placing: placing,
    player: string,
}