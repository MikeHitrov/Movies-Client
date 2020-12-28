import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn } from "mdbreact";
import "../styles/movieList.scss";

const apiURL = "http://localhost:1337/api/v1/movies/";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    fetch(apiURL)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            movies: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    console.log(this.state.movies);
  }

  render() {
    return (
      <>
        {this.state.movies.map((data) => (
          <MDBContainer>
            <MDBListGroup className="list">
              <MDBListGroupItem href="#" key={data.id}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{data.title}</h5>
                  <small>{data.releaseDate}</small>
                </div>
                <p className="mb-1">Director: {data.director}</p>
                <p className="mb-1">Genre: {data.genre}</p>
                <p className="mb-1">Actors: {data.actors}</p>
                <MDBBtn gradient="blue">Edit</MDBBtn>
                <MDBBtn outline color="danger">
                  Delete
                </MDBBtn>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        ))}
      </>
    );
  }
}

export default Movies;
