import { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const apiURL = "http://localhost:1337/api/v1/movies/";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      releaseDate: null,
      director: "",
      genre: "",
      actors: [],
    };
  }

  addMovie = () => {
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };

    fetch(apiURL, requestOptions);
  };

  render() {
    return (
      <MDBContainer className="form">
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Add new movie</p>
              <div className="grey-text">
                <MDBInput
                  label="Movie name"
                  icon="film"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={(e) => {
                    this.setState({ movieName: e.target.value });
                  }}
                />
                <MDBInput
                  label="Movie release date"
                  icon="calendar"
                  group
                  type="date"
                  validate
                  error="wrong"
                  success="right"
                  onChange={(e) =>
                    this.setState({
                      releaseDate: e.target.value,
                    })
                  }
                />
                <MDBInput
                  label="Director"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={(e) =>
                    this.setState({
                      director: e.target.value,
                    })
                  }
                />
                <MDBInput
                  label="Genre"
                  icon="marker"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={(e) =>
                    this.setState({
                      genre: e.target.value,
                    })
                  }
                />
                <MDBInput
                  type="textarea"
                  rows="10"
                  label="Actors"
                  icon="user-tie"
                  onChange={(e) =>
                    this.setState({
                      actors: e.target.value.split("\n"),
                    })
                  }
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="indigo" onClick={this.addMovie}>
                  Add movie
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddMovie;
