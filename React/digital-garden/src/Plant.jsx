function Plant ({ name, color, image, species}){
    return (
        <>
            <div>
                <h2>This is a {name} plant!</h2>
                <p>it looks like:</p>
                <img
                    src = {image}
                    alt = {name}
                />
                <p>it is a beautiful birght {color}</p>
                <p>prom the species {species}</p>
            </div>
        </>
    )
}

export default Plant