import props from '../@types/Piece'
const a = (props: props) => {
    return(
        <img
            className="piece_img"
            src="https://arena.myfide.net/assets/images/chess/birman-chesspieces/bP.svg"
            alt={props.name}
        />
    )
}