import Strings from './Strings'

function Footer(props) {
    return(
        <>
        <h3>{Strings.Footer}</h3>
        <p>{props.name.First}</p>
        </>
    )
}

 export default Footer;