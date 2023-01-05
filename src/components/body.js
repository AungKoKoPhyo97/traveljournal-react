import '../css/body.css'

const Body = (props) => {
    const a = "https://unsplash.com/photos/WLxQvbMyfas"
    return (
        <div className="body_container">
            <img src={props.imageUrl} alt={props.location} className="body_img" />
            <div className="body_info">
                <div className="body_maps">
                    <span className="material-symbols-outlined icon_location">
                        location_on
                    </span>
                    <span className="body_location">{props.location}</span>
                    <a href={props.googleMapsUrl} className="googlemap">View on Google Maps</a>
                </div>
                <h1 className="body_title">{props.title}</h1>
                <h4 className="body_date">{props.startDate} - {props.endDate}</h4>
                <p className="body_text">{props.description}</p>
            </div>
        </div>

    )
}

export default Body;