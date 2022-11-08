



function Card (props) {
    let string = props.children

    return(
        <div className={props.className? `${props.className} card` : "card"}>{string}</div>
    )
}

export default Card