import React from 'react';
import './Board.css';

interface props {
    player: string,
    gameId: number
}

const a = (props: props) => {
    return (
        props.player==='white'?(
        <div id="board">
            <div id="8-row" className="row">
                <div id="a8" className="br"></div>
                <div id="b8" className="gr"></div>
                <div id="c8" className="br"></div>
                <div id="d8" className="gr"></div>
                <div id="e8" className="br"></div>
                <div id="f8" className="gr"></div>
                <div id="g8" className="br"></div>
                <div id="h8" className="gr"></div>
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
        ):(
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
                    <div id="a8" className="br"></div>
                    <div id="b8" className="gr"></div>
                    <div id="c8" className="br"></div>
                    <div id="d8" className="gr"></div>
                    <div id="e8" className="br"></div>
                    <div id="f8" className="gr"></div>
                    <div id="g8" className="br"></div>
                    <div id="h8" className="gr"></div>
                </div>
            </div>
        )

    )
}

export default a;