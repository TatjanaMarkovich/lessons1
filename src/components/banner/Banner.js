import splash from "./splash.jpg"
import bannerStyle from"./banner.module.css"
export default function Banner(){
    return (
        <figure clsssName={bannerStyle.container}>
            <img  className={bannerStyle.picture}
                  src={splash}
                  alt="Текст акции"/>
            <figcaption clsssName={bannerStyle.caption}>
                Текст акции
            </figcaption>
        </figure>
    );
}