import splash from "./splash.jpg"

export default function Banner(){
    return (
        <figure>
            <img  src={splash} alt="Текст акции"/>
            <figcaption>Текст акции</figcaption>
        </figure>
    );
}