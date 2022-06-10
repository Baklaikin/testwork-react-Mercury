import Image from "../Images/picture.png";

export default function Picture() {
    return (
        <figure className="figure">
            <img className="img-fluid" src={Image} alt="brain that connects to computer and transfer information" />
            <figcaption className="figure-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga totam repellendus veniam, commodi dolorum distinctio molestias repudiandae quaerat doloribus, aperiam quam at culpa quo nobis labore. 
            </figcaption>
        </figure>
    )
}