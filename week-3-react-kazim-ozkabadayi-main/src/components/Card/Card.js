import React from "react";
import { Link } from "react-router-dom";

function Card({ name, gender, species, status, image, location, episode }) {
  return (
    <Link
      to={{
        pathname: "/cardDetail",
        state: {
          name: name,
          gender: gender,
          species: species,
          status: status,
          image: image,
          location: location,
          episode: episode,
        },
      }}
    >
      <div className="card-section">
        <div className="card-image">
          <img src={image} />
          <div className="card-name description-part">
            <p>{name}</p>
          </div>
          <div className="card-detail description-part">
            <ul>
              <li>
                <strong>Gender:</strong> {gender}
              </li>
              <li>
                <strong>Status:</strong> {status}
              </li>
              <li>
                <strong>Species:</strong> {species}
              </li>
              <li>
                <strong>Location:</strong> {location}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
