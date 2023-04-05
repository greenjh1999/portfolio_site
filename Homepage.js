import js_pic from "./js_pic.jpeg"

const Homepage = () => {

    return(
        <div className="body-Container">
            <img src={js_pic} alt="JS pic"></img>
            <h2>Welcome to my Website!</h2>
            <p>As you may see already, my name is John Green, Im an aspiring web developer and programmer. I love programming, it feels like magic.
                This website is create to share my skills, projects, and keep you up to date with what im working on, what im learning and how im doing
                in the world of tech. Feel free to get in contact with me by clicking the Contact link above!

            </p>
            
            <p className="body-paragraph">
            </p>
        </div>
    )
}

export default Homepage;