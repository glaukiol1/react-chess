import React from 'react';
import './Board.css';

import state from '../@types/BoardState'

export default class Board extends React.Component {
    state: state = {
        history: {
          black: {
            pawns: {
              pawn1: ['a7'],
              pawn2: ['b7'],
              pawn3: ['c7'],
              pawn4: ['d7'],
              pawn5: ['e7'],
              pawn6: ['f7'],
              pawn7: ['g7'],
              pawn8: ['h7'],
            },
            rooks: {
              rook1: [],
              rook2: [],
            },
            knights: {
              knight1: [],
              knight2: [],
            },
            bishops: {
              bishop1: [],
              bishop2: [],
            },
            queen: [],
            king: [],
          },
          white: {
            pawns: {
              pawn1: ['a7'],
              pawn2: ['b7'],
              pawn3: ['c7'],
              pawn4: ['d7'],
              pawn5: ['e7'],
              pawn6: ['f7'],
              pawn7: ['g7'],
              pawn8: ['h7'],
            },
            rooks: {
              rook1: [],
              rook2: [],
            },
            knights: {
              knight1: [],
              knight2: [],
            },
            bishops: {
              bishop1: [],
              bishop2: [],
            },
            queen: [],
            king: [],
          }
        },
        placing: {
            a1: '',
            a2: 'white-pawn',
            a3: '',
            a4: '',
            a5: '',
            a6: '',
            a7: '',
            a8: '',
            b1: '',
            b2: 'white-pawn',
            b3: '',
            b4: '',
            b5: '',
            b6: '',
            b7: '',
            b8: '',
            c1: '',
            c2: 'white-pawn',
            c3: '',
            c4: '',
            c5: '',
            c6: '',
            c7: '',
            c8: '',
            d1: '',
            d2: 'white-pawn',
            d3: '',
            d4: '',
            d5: '',
            d6: '',
            d7: '',
            d8: '',
            e1: '',
            e2: 'white-pawn',
            e3: '',
            e4: '',
            e5: '',
            e6: '',
            e7: '',
            e8: '',
            f1: '',
            f2: 'white-pawn',
            f3: '',
            f4: '',
            f5: '',
            f6: '',
            f7: '',
            f8: '',
            g1: '',
            g2: 'white-pawn',
            g3: '',
            g4: '',
            g5: '',
            g6: '',
            g7: '',
            g8: '',
            h1: '',
            h2: 'white-pawn',
            h3: '',
            h4: '',
            h5: '',
            h6: '',
            h7: '',
            h8: '',
        },
        player: 'black'
      }
    render() {
        return (
            this.state.player === 'white' ? (
                <div id="board">
                    <div id="8-row" className="row">
                        <div id="a8" className="br">{this.state.placing.a8}</div>
                        <div id="b8" className="gr">{this.state.placing.b8}</div>
                        <div id="c8" className="br">{this.state.placing.c8}</div>
                        <div id="d8" className="gr">{this.state.placing.d8}</div>
                        <div id="e8" className="br">{this.state.placing.e8}</div>
                        <div id="f8" className="gr">{this.state.placing.f8}</div>
                        <div id="g8" className="br">{this.state.placing.g8}</div>
                        <div id="h8" className="gr">{this.state.placing.h8}</div>
                    </div>
                    <div id="7-row" className="row">
                        <div id="a7" className="gr"></div>
                        <div id="b7" className="br"></div>
                        <div id="c7" className="gr"></div>
                        <div id="d7" className="br"></div>
                        <div id="e7" className="gr"></div>
                        <div id="f7" className="br"></div>
                        <div id="g7" className="gr"></div>
                        <div id="h7" className="br"></div>
                    </div>
                    <div id="6-row" className="row">
                        <div id="a6" className="br"></div>
                        <div id="b6" className="gr"></div>
                        <div id="c6" className="br"></div>
                        <div id="d6" className="gr"></div>
                        <div id="e6" className="br"></div>
                        <div id="f6" className="gr"></div>
                        <div id="g6" className="br"></div>
                        <div id="h6" className="gr"></div>
                    </div>
                    <div id="5-row" className="row">
                        <div id="a5" className="gr"></div>
                        <div id="b5" className="br"></div>
                        <div id="c5" className="gr"></div>
                        <div id="d5" className="br"></div>
                        <div id="e5" className="gr"></div>
                        <div id="f5" className="br"></div>
                        <div id="g5" className="gr"></div>
                        <div id="h5" className="br"></div>
                    </div>
                    <div id="4-row" className="row">
                        <div id="a4" className="br"></div>
                        <div id="b4" className="gr"></div>
                        <div id="c4" className="br"></div>
                        <div id="d4" className="gr"></div>
                        <div id="e4" className="br"></div>
                        <div id="f4" className="gr"></div>
                        <div id="g4" className="br"></div>
                        <div id="h4" className="gr"></div>
                    </div>
                    <div id="3-row" className="row">
                        <div id="a3" className="gr"></div>
                        <div id="b3" className="br"></div>
                        <div id="c3" className="gr"></div>
                        <div id="d3" className="br"></div>
                        <div id="e3" className="gr"></div>
                        <div id="f3" className="br"></div>
                        <div id="g3" className="gr"></div>
                        <div id="h3" className="br"></div>
                    </div>
                    <div id="2-row" className="row">
                        <div id="a2" className="br"></div>
                        <div id="b2" className="gr"></div>
                        <div id="c2" className="br"></div>
                        <div id="d2" className="gr"></div>
                        <div id="e2" className="br"></div>
                        <div id="f2" className="gr"></div>
                        <div id="g2" className="br"></div>
                        <div id="h2" className="gr"></div>
                    </div>
                    <div id="1-row" className="row">
                        <div id="a1" className="gr"></div>
                        <div id="b1" className="br"></div>
                        <div id="c1" className="gr"></div>
                        <div id="d1" className="br"></div>
                        <div id="e1" className="gr"></div>
                        <div id="f1" className="br"></div>
                        <div id="g1" className="gr"></div>
                        <div id="h1" className="br"></div>
                    </div>
                </div>
            ) : (
                <div id="board">
                    <div id="1-row" className="row">
                        <div id="a1" className="gr"></div>
                        <div id="b1" className="br"></div>
                        <div id="c1" className="gr"></div>
                        <div id="d1" className="br"></div>
                        <div id="e1" className="gr"></div>
                        <div id="f1" className="br"></div>
                        <div id="g1" className="gr"></div>
                        <div id="h1" className="br"></div>
                    </div>
                    <div id="2-row" className="row">
                        <div id="a2" className="br"></div>
                        <div id="b2" className="gr"></div>
                        <div id="c2" className="br"></div>
                        <div id="d2" className="gr"></div>
                        <div id="e2" className="br"></div>
                        <div id="f2" className="gr"></div>
                        <div id="g2" className="br"></div>
                        <div id="h2" className="gr"></div>
                    </div>
                    <div id="3-row" className="row">
                        <div id="a3" className="gr"></div>
                        <div id="b3" className="br"></div>
                        <div id="c3" className="gr"></div>
                        <div id="d3" className="br"></div>
                        <div id="e3" className="gr"></div>
                        <div id="f3" className="br"></div>
                        <div id="g3" className="gr"></div>
                        <div id="h3" className="br"></div>
                    </div>
                    <div id="4-row" className="row">
                        <div id="a4" className="br"></div>
                        <div id="b4" className="gr"></div>
                        <div id="c4" className="br"></div>
                        <div id="d4" className="gr"></div>
                        <div id="e4" className="br"></div>
                        <div id="f4" className="gr"></div>
                        <div id="g4" className="br"></div>
                        <div id="h4" className="gr"></div>
                    </div>
                    <div id="5-row" className="row">
                        <div id="a5" className="gr"></div>
                        <div id="b5" className="br"></div>
                        <div id="c5" className="gr"></div>
                        <div id="d5" className="br"></div>
                        <div id="e5" className="gr"></div>
                        <div id="f5" className="br"></div>
                        <div id="g5" className="gr"></div>
                        <div id="h5" className="br"></div>
                    </div>
                    <div id="6-row" className="row">
                        <div id="a6" className="br"></div>
                        <div id="b6" className="gr"></div>
                        <div id="c6" className="br"></div>
                        <div id="d6" className="gr"></div>
                        <div id="e6" className="br"></div>
                        <div id="f6" className="gr"></div>
                        <div id="g6" className="br"></div>
                        <div id="h6" className="gr"></div>
                    </div>
                    <div id="7-row" className="row">
                        <div id="a7" className="gr"></div>
                        <div id="b7" className="br"></div>
                        <div id="c7" className="gr"></div>
                        <div id="d7" className="br"></div>
                        <div id="e7" className="gr"></div>
                        <div id="f7" className="br"></div>
                        <div id="g7" className="gr"></div>
                        <div id="h7" className="br"></div>
                    </div>
                    <div id="8-row" className="row">
                        <div id="a8" className="br">{this.state.placing.a8}</div>
                        <div id="b8" className="gr">{this.state.placing.b8}</div>
                        <div id="c8" className="br">{this.state.placing.c8}</div>
                        <div id="d8" className="gr">{this.state.placing.d8}</div>
                        <div id="e8" className="br">{this.state.placing.e8}</div>
                        <div id="f8" className="gr">{this.state.placing.f8}</div>
                        <div id="g8" className="br">{this.state.placing.g8}</div>
                        <div id="h8" className="gr">{this.state.placing.h8}</div>
                    </div>
                </div>
            )

        )
    }
}