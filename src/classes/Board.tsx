import React from 'react';
import './Board.css';

import state from '../@types/BoardState';
import Piece from '../util/Piece';
import canMoveTo from '../logic/canMoveTo';

export default class Board extends React.Component {
    constructor({props}) {
        super(props)
        this.handlePieceClick = this.handlePieceClick.bind(this);
    }
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
            a1: <Piece name="R" color="w" />,
            a2: <Piece name="P" color="w" />,
            a3: '',
            a4: '',
            a5: '',
            a6: '',
            a7: <Piece name="P" color="b" />,
            a8: <Piece name="R" color="b" />,
            b1: <Piece name="N" color="w" />,
            b2: <Piece name="P" color="w" />,
            b3: '',
            b4: '',
            b5: '',
            b6: '',
            b7: <Piece name="P" color="b" />,
            b8: <Piece name="N" color="b" />,
            c1: <Piece name="B" color="w" />,
            c2: <Piece name="P" color="w" />,
            c3: '',
            c4: '',
            c5: '',
            c6: '',
            c7: <Piece name="P" color="b" />,
            c8: <Piece name="B" color="b" />,
            d1: <Piece name="Q" color="w" />,
            d2: <Piece name="P" color="w" />,
            d3: '',
            d4: '',
            d5: '',
            d6: '',
            d7: <Piece name="P" color="b" />,
            d8: <Piece name="Q" color="b" />,
            e1: <Piece name="K" color="w" />,
            e2: <Piece name="P" color="w" />,
            e3: '',
            e4: '',
            e5: '',
            e6: '',
            e7: <Piece name="P" color="b" />,
            e8: <Piece name="K" color="b" />,
            f1: <Piece name="B" color="w" />,
            f2: <Piece name="P" color="w" />,
            f3: '',
            f4: '',
            f5: '',
            f6: '',
            f7: <Piece name="P" color="b" />,
            f8: <Piece name="B" color="b" />,
            g1: <Piece name="N" color="w" />,
            g2: <Piece name="P" color="w" />,
            g3: '',
            g4: '',
            g5: '',
            g6: '',
            g7: <Piece name="P" color="b" />,
            g8: <Piece name="N" color="b" />,
            h1: <Piece name="R" color="w" />,
            h2: <Piece name="P" color="w" />,
            h3: '',
            h4: '',
            h5: '',
            h6: '',
            h7: <Piece name="P" color="b" />,
            h8: <Piece name="R" color="b" />,
        },
        player: 'white'
    }

    getSqS(): HTMLCollectionOf<Element> {
        return document.getElementsByClassName('sq')
    }

    getSq(sq: string): HTMLElement | null {
        return document.getElementById(sq)
    }

    getActivePieces(color: string): Array<HTMLElement | null>{
        const allPlacements = Object.entries(this.state.placing);
        var total: Array<HTMLElement | null> = [];
        allPlacements.forEach((a)=>{
            if(a[1] !== '') {
                var el = document.getElementById(a[0]) || {children: [{classList: ['a', 'a']}]};
                if(el.children[0].classList[1] === color) { 
                    total.push(
                        document.getElementById(a[0])
                    )
                }
            }
        })
        return total;
    }


    changePiecePos(currentPos: any, id: string, color: string, currentPiece: any){
        console.log(currentPos, id)
        var state = {...this.state}
        state.placing[currentPos] = '';
        state.placing[id] = <Piece name={currentPiece} color={`${color}`} />
        // var currentPieceS: string;
        // if(currentPiece==='n') {
        //     currentPieceS = 'knights'
        // }
        // state.history[(color==='b'?'black':'white')][currentPieceS]
        /**
         * @todo Update history
         */
        this.setState({state})
        var el = document.getElementById(currentPos);
        if(el) {
            el.removeEventListener('click', this.handlePieceClick)
            el = document.getElementById(id);
            if( el ){
                el.addEventListener('click', this.handlePieceClick)
            }
        }
    }


    /**
     * @description Will handle a adding a event listener on the piece, and to show available moves.
     */
    handlePieceClick(ev: any): void {
        const currentPos: string = ev.currentTarget.id;
        const currentPiece: string = ev.currentTarget.children[0].classList[2];
        const color: string = ev.currentTarget.children[0].classList[1];
        var arr: Array<HTMLElement | null> = []; 
        canMoveTo(currentPos, currentPiece, color).forEach(place=>{
            var el = document.getElementById(place)
            if(el && !el.children[0]) {
                el.style.backgroundColor = 'rgba(0,0,0,0.1)'
                el.style.borderRadius = '80%';
                arr.push(el)
                setTimeout(() => {
                    document.addEventListener('click', (ev)=>{
                        if(ev.currentTarget != el && el) {
                            el.style.backgroundColor = 'rgba(0,0,0,0)';
                        }
                    }, {once: true})
                },1000)
            }
        })
        arr.forEach(e=>{
            if(e) {
                if(e) {
                    e.addEventListener('click', (ev) => {
                        this.changePiecePos(currentPos, e.id, color, currentPiece)
                        arr.forEach(el=>{
                            if(el && el) {
                                el.style.backgroundColor = 'transparent';
                                el.style.borderRadius = '0';
                                if (el != e) {
                                    el.replaceWith(el.cloneNode(true)); // remove all event listeners
                                }
                            }
                        })
                    }, {once: true})
                }
            }
        })
    }

    componentDidMount() {
        this.setState({
            player: prompt('Choose side: (white || black)')
        })
        this.getActivePieces(this.state.player[0]).forEach((el)=>{
            if(el) {
                el.addEventListener('click', this.handlePieceClick)
            }
        })
    }
    /**
      * @description Render the chess board, the board is different for each side, first rook for white is on a1 and for black its on a8, so on with the other pieces.
    */
    render() {
        return (
            this.state.player === 'white' ? (
                <div id="board">
                    <div id="8-row" className="row">
                        <div id="a8" className="br sq">{this.state.placing.a8}</div>
                        <div id="b8" className="gr sq">{this.state.placing.b8}</div>
                        <div id="c8" className="br sq">{this.state.placing.c8}</div>
                        <div id="d8" className="gr sq">{this.state.placing.d8}</div>
                        <div id="e8" className="br sq">{this.state.placing.e8}</div>
                        <div id="f8" className="gr sq">{this.state.placing.f8}</div>
                        <div id="g8" className="br sq">{this.state.placing.g8}</div>
                        <div id="h8" className="gr sq">{this.state.placing.h8}</div>
                    </div>
                    <div id="7-row" className="row">
                        <div id="a7" className="gr sq">{this.state.placing.a7}</div>
                        <div id="b7" className="br sq">{this.state.placing.b7}</div>
                        <div id="c7" className="gr sq">{this.state.placing.c7}</div>
                        <div id="d7" className="br sq">{this.state.placing.d7}</div>
                        <div id="e7" className="gr sq">{this.state.placing.e7}</div>
                        <div id="f7" className="br sq">{this.state.placing.f7}</div>
                        <div id="g7" className="gr sq">{this.state.placing.g7}</div>
                        <div id="h7" className="br sq">{this.state.placing.h7}</div>
                    </div>
                    <div id="6-row" className="row">
                        <div id="a6" className="br sq">{this.state.placing.a6}</div>
                        <div id="b6" className="gr sq">{this.state.placing.b6}</div>
                        <div id="c6" className="br sq">{this.state.placing.c6}</div>
                        <div id="d6" className="gr sq">{this.state.placing.d6}</div>
                        <div id="e6" className="br sq">{this.state.placing.e6}</div>
                        <div id="f6" className="gr sq">{this.state.placing.f6}</div>
                        <div id="g6" className="br sq">{this.state.placing.g6}</div>
                        <div id="h6" className="gr sq">{this.state.placing.h6}</div>
                    </div>
                    <div id="5-row" className="row">
                        <div id="a5" className="gr sq">{this.state.placing.a5}</div>
                        <div id="b5" className="br sq">{this.state.placing.b5}</div>
                        <div id="c5" className="gr sq">{this.state.placing.c5}</div>
                        <div id="d5" className="br sq">{this.state.placing.d5}</div>
                        <div id="e5" className="gr sq">{this.state.placing.e5}</div>
                        <div id="f5" className="br sq">{this.state.placing.f5}</div>
                        <div id="g5" className="gr sq">{this.state.placing.g5}</div>
                        <div id="h5" className="br sq">{this.state.placing.h5}</div>
                    </div>
                    <div id="4-row" className="row">
                        <div id="a4" className="br sq">{this.state.placing.a4}</div>
                        <div id="b4" className="gr sq">{this.state.placing.b4}</div>
                        <div id="c4" className="br sq">{this.state.placing.c4}</div>
                        <div id="d4" className="gr sq">{this.state.placing.d4}</div>
                        <div id="e4" className="br sq">{this.state.placing.e4}</div>
                        <div id="f4" className="gr sq">{this.state.placing.f4}</div>
                        <div id="g4" className="br sq">{this.state.placing.g4}</div>
                        <div id="h4" className="gr sq">{this.state.placing.h4}</div>
                    </div>
                    <div id="3-row" className="row">
                        <div id="a3" className="gr sq">{this.state.placing.a3}</div>
                        <div id="b3" className="br sq">{this.state.placing.b3}</div>
                        <div id="c3" className="gr sq">{this.state.placing.c3}</div>
                        <div id="d3" className="br sq">{this.state.placing.d3}</div>
                        <div id="e3" className="gr sq">{this.state.placing.e3}</div>
                        <div id="f3" className="br sq">{this.state.placing.f3}</div>
                        <div id="g3" className="gr sq">{this.state.placing.g3}</div>
                        <div id="h3" className="br sq">{this.state.placing.h3}</div>
                    </div>
                    <div id="2-row" className="row">
                        <div id="a2" className="br sq">{this.state.placing.a2}</div>
                        <div id="b2" className="gr sq">{this.state.placing.b2}</div>
                        <div id="c2" className="br sq">{this.state.placing.c2}</div>
                        <div id="d2" className="gr sq">{this.state.placing.d2}</div>
                        <div id="e2" className="br sq">{this.state.placing.e2}</div>
                        <div id="f2" className="gr sq">{this.state.placing.f2}</div>
                        <div id="g2" className="br sq">{this.state.placing.g2}</div>
                        <div id="h2" className="gr sq">{this.state.placing.h2}</div>
                    </div>
                    <div id="1-row" className="row">
                        <div id="a1" className="gr sq">{this.state.placing.a1}</div>
                        <div id="b1" className="br sq">{this.state.placing.b1}</div>
                        <div id="c1" className="gr sq">{this.state.placing.c1}</div>
                        <div id="d1" className="br sq">{this.state.placing.d1}</div>
                        <div id="e1" className="gr sq">{this.state.placing.e1}</div>
                        <div id="f1" className="br sq">{this.state.placing.f1}</div>
                        <div id="g1" className="gr sq">{this.state.placing.g1}</div>
                        <div id="h1" className="br sq">{this.state.placing.h1}</div>
                    </div>
                </div>
            ) : (
                <div id="board">
                    <div id="1-row" className="row">
                        <div id="a1" className="gr sq">{this.state.placing.a1}</div>
                        <div id="b1" className="br sq">{this.state.placing.b1}</div>
                        <div id="c1" className="gr sq">{this.state.placing.c1}</div>
                        <div id="d1" className="br sq">{this.state.placing.d1}</div>
                        <div id="e1" className="gr sq">{this.state.placing.e1}</div>
                        <div id="f1" className="br sq">{this.state.placing.f1}</div>
                        <div id="g1" className="gr sq">{this.state.placing.g1}</div>
                        <div id="h1" className="br sq">{this.state.placing.h1}</div>
                    </div>
                    <div id="2-row" className="row">
                        <div id="a2" className="br sq">{this.state.placing.a2}</div>
                        <div id="b2" className="gr sq">{this.state.placing.b2}</div>
                        <div id="c2" className="br sq">{this.state.placing.c2}</div>
                        <div id="d2" className="gr sq">{this.state.placing.d2}</div>
                        <div id="e2" className="br sq">{this.state.placing.e2}</div>
                        <div id="f2" className="gr sq">{this.state.placing.f2}</div>
                        <div id="g2" className="br sq">{this.state.placing.g2}</div>
                        <div id="h2" className="gr sq">{this.state.placing.h2}</div>
                    </div>
                    <div id="3-row" className="row">
                        <div id="a3" className="gr sq">{this.state.placing.a3}</div>
                        <div id="b3" className="br sq">{this.state.placing.b3}</div>
                        <div id="c3" className="gr sq">{this.state.placing.c3}</div>
                        <div id="d3" className="br sq">{this.state.placing.d3}</div>
                        <div id="e3" className="gr sq">{this.state.placing.e3}</div>
                        <div id="f3" className="br sq">{this.state.placing.f3}</div>
                        <div id="g3" className="gr sq">{this.state.placing.g3}</div>
                        <div id="h3" className="br sq">{this.state.placing.h3}</div>
                    </div>
                    <div id="4-row" className="row">
                        <div id="a4" className="br sq">{this.state.placing.a4}</div>
                        <div id="b4" className="gr sq">{this.state.placing.b4}</div>
                        <div id="c4" className="br sq">{this.state.placing.c4}</div>
                        <div id="d4" className="gr sq">{this.state.placing.d4}</div>
                        <div id="e4" className="br sq">{this.state.placing.e4}</div>
                        <div id="f4" className="gr sq">{this.state.placing.f4}</div>
                        <div id="g4" className="br sq">{this.state.placing.g4}</div>
                        <div id="h4" className="gr sq">{this.state.placing.h4}</div>
                    </div>
                    <div id="5-row" className="row">
                        <div id="a5" className="gr sq">{this.state.placing.a5}</div>
                        <div id="b5" className="br sq">{this.state.placing.b5}</div>
                        <div id="c5" className="gr sq">{this.state.placing.c5}</div>
                        <div id="d5" className="br sq">{this.state.placing.d5}</div>
                        <div id="e5" className="gr sq">{this.state.placing.e5}</div>
                        <div id="f5" className="br sq">{this.state.placing.f5}</div>
                        <div id="g5" className="gr sq">{this.state.placing.g5}</div>
                        <div id="h5" className="br sq">{this.state.placing.h5}</div>
                    </div>
                    <div id="6-row" className="row">
                        <div id="a6" className="br sq">{this.state.placing.a6}</div>
                        <div id="b6" className="gr sq">{this.state.placing.b6}</div>
                        <div id="c6" className="br sq">{this.state.placing.c6}</div>
                        <div id="d6" className="gr sq">{this.state.placing.d6}</div>
                        <div id="e6" className="br sq">{this.state.placing.e6}</div>
                        <div id="f6" className="gr sq">{this.state.placing.f6}</div>
                        <div id="g6" className="br sq">{this.state.placing.g6}</div>
                        <div id="h6" className="gr sq">{this.state.placing.h6}</div>
                    </div>
                    <div id="7-row" className="row">
                        <div id="a7" className="gr sq">{this.state.placing.a7}</div>
                        <div id="b7" className="br sq">{this.state.placing.b7}</div>
                        <div id="c7" className="gr sq">{this.state.placing.c7}</div>
                        <div id="d7" className="br sq">{this.state.placing.d7}</div>
                        <div id="e7" className="gr sq">{this.state.placing.e7}</div>
                        <div id="f7" className="br sq">{this.state.placing.f7}</div>
                        <div id="g7" className="gr sq">{this.state.placing.g7}</div>
                        <div id="h7" className="br sq">{this.state.placing.h7}</div>
                    </div>
                    <div id="8-row" className="row">
                        <div id="a8" className="br sq">{this.state.placing.a8}</div>
                        <div id="b8" className="gr sq">{this.state.placing.b8}</div>
                        <div id="c8" className="br sq">{this.state.placing.c8}</div>
                        <div id="d8" className="gr sq">{this.state.placing.d8}</div>
                        <div id="e8" className="br sq">{this.state.placing.e8}</div>
                        <div id="f8" className="gr sq">{this.state.placing.f8}</div>
                        <div id="g8" className="br sq">{this.state.placing.g8}</div>
                        <div id="h8" className="gr sq">{this.state.placing.h8}</div>
                    </div>
                </div>
            )

        )
    }
}