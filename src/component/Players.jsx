import "./Players.css"

const Players = ({name,image, team,nationality,age,JerseyNumber}) => {
    

    return (
      <div className="container">
        <div className="card">
          <img src={image} alt="picture" />
          <div>
            <h3 className="title">Name:{name}</h3>
            <p>Age:{age}</p>
            <p>Nationality:{nationality}</p>
            </div>
            <div>
            <p>Team:{team}</p>
            <p>Age:{age}</p>
            <p>Jersey#:{JerseyNumber}</p>
          </div>
          </div>
      </div>
    );
  };
  
  export default Players;