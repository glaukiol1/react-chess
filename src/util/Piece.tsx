import props from '../@types/Piece'
const a = (props: props) => {
    return(
        <img
            className={`piece_img ${props.color} ${props.name}`}
            src={`https://arena.myfide.net/assets/images/chess/birman-chesspieces/${props.color}${props.name}.svg`}
            alt={props.name}
        />
    )
}
export default a;