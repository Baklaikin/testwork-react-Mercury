import Image from "../Images/picture.png";

export default function Picture() {
    return (
        <figure className="figure">
            <img className="img-fluid" src={Image} alt="default picture" />
            <figcaption className="figure-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </figcaption>
        </figure>
    )
}