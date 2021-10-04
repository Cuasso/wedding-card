import { useHistory } from "react-router-dom"

const pageStyle = {
    "margin": "5rem auto"
}

const titleStyle = {
    "color": "#e8917b",
    "font-size": "5rem"
}

const bodyStyle = {
    "font-size": "2rem",
    margin: "3rem auto",
}

const listStyle = {
    "font-size": "2rem",
    margin: "3rem auto",
    "text-aling": "left",
    "width": "300px",
    "text-align": "left",
    "cursor": "pointer",
    "padding": "1rem"
}


const MainPage = () => {
    let history = useHistory();

    const onClickHandler = (event) => {
        const id = event.target.id

        if (id === "weddings")
            history.push("/nuestra-boda")

        if (id === "baptism")
            history.push("/mi-primer-bautismo")

        if (id === "fiftheen")
            history.push("/mis-15")

    }

    return (
        <div style={pageStyle}>
            <h1 style={titleStyle}>Sobre nosotros</h1>
            <p style={bodyStyle}>Mira nuestros modelos y avisanos si alguna te gusta</p>
            <ul style={listStyle}>
                <li id="weddings" onClick={onClickHandler}>Casamientos</li>
                <li id="baptism" onClick={onClickHandler}>Bautismo ...proximamente</li>
                <li id="fiftheen" onClick={onClickHandler}>Mis 15 años ..proximamente</li>
            </ul>
        </div>
    )
}

export default MainPage