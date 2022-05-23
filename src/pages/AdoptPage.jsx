import React from "react";
import "./AdoptPage.css"
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import blackArrow from "../images/blackarrow.svg"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";

export function AdoptPage() {
    const apiUrl = "https://api.petfinder.com/v2/types";
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPZFNtOVYzb2FHd0ptdnZOMW9CY20zUzh6NHJ0ZmsxcUtsUzNGVktaUHYwemhJV0g0dCIsImp0aSI6IjFiOGY5N2Y0NDhiYmZkOWJmNDY3MTY2ZThhZGNlZDQ4YmQxNTVhMzViM2E2Yjg4M2JmMGMwMDI2ZmU1NDUxOWFjNGJjY2I1YzA3NGU4YzU4IiwiaWF0IjoxNjUzMzMyNzkxLCJuYmYiOjE2NTMzMzI3OTEsImV4cCI6MTY1MzMzNjM5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.DHufcg7UzZoHrwtL7xvMsEq7DEX4-dRqTVD8tZbGOxYkyn7o2ObKS7WmnHWKBb49roW76T5QoeN2dgveZuWf-p-hS8g6TKESRYE9ZK7wTtQNoDRSSM__Efgd1e6-l4__Ui0b1DuM4f1NJEu1TxE0NbUY0uWnQEPlEEwwx7i9FDLWpf0s_TCxoNs3vE1j8oMMwuyRdkhUX2cgdDn5Qv7v1LfjMeC5ZG1VWtKtL-x4qFRy2k1yK9U57hh9v82mJo6zUhlSHDuW-brHUBGr4opBu6dQwpJCIkN5oAqOSf1PTEh06_jfQCeeh500bOo7mYdSlP_JPMP_sGNdL1ehytfk7w";
    const [listOfTypes, setListOfTypes] = useState([""]);
    const [listOfBreeds, setListOfBreeds] = useState([""]);
    const [listOfColors, setListOfColors] = useState([""]);
    const [animalTypeValue, setAnimalTypeValue] = useState("All types");
    const [breedTypeValue, setBreedTypeValue] = useState("All breeds");
    const breedsUrl = `https://api.petfinder.com/v2/types/${animalTypeValue}/breeds`;
    const typeUrl = `https://api.petfinder.com/v2/types/${animalTypeValue}`
    const [animalData, setAnimalData] = useState([]);

    useEffect(() => {
        Axios.get(apiUrl, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
            setListOfTypes(response.data.types.map((c) => c.name));
        });
    }, []);

    useEffect(() => {
        if (animalTypeValue !== "All types") {
            Axios.get(breedsUrl, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
                setListOfBreeds(response.data.breeds.map((c) => c.name));
            });
        }
    }, [animalTypeValue, breedsUrl]);

    useEffect(() => {
        if (animalTypeValue !== "All types") {
            Axios.get(typeUrl, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
                setListOfColors(response.data.type.colors);
            });
        }

    }, [animalTypeValue, typeUrl])

    const filterAnimals = () => {
        Axios.get(`https://api.petfinder.com/v2/animals?type=${animalTypeValue}&breed=${breedTypeValue}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
            console.log(response.data.animals);
            setAnimalData(response.data.animals);
        });
    }

    return (
        <div className="adopt-container">
            <div className="backbutton-title">
                <NavLink to="/">
                    <div className="back-button-container">
                        <img className="arrow" src={blackArrow} alt="" />
                        <button className="back-button">Back</button>
                    </div>
                </NavLink>
                <div className="adopt-title">These lovely souls are waiting for you!</div>
                <div>
                </div>
            </div>
            <div className="form-container">
                <div className="form-one-container">
                    <div className="form-one">Refine your search:</div>
                </div>
                <div className="form-two">
                    <div className="form-two-one">
                        <div className="label">Type of pet:</div>
                        <Dropdown
                            placeholder="All types"
                            className="dropdownisti"
                            options={listOfTypes}
                            value={animalTypeValue}
                            onChange={(e) => {
                                setAnimalTypeValue(e.value);
                            }}
                        />
                    </div>
                    <div className="form-two-one">
                        <div className="label">Breed:</div>
                        <Dropdown
                            placeholder="All breeds"
                            className="dropdownisti"
                            options={listOfBreeds}
                            onChange={(e) => {
                                setBreedTypeValue(e.value);
                            }}
                        />
                    </div>
                    <div className="form-two-one">
                        <div className="label">Gender:</div>
                        <Dropdown
                            placeholder="All gender"
                            className="dropdownisti"
                            options={["Male", "Female"]}
                        />
                    </div>
                    <div className="form-two-one">
                        <div className="label">Size:</div>
                        <Dropdown
                            placeholder="All sizes"
                            className="dropdownisti"
                            options={["small", "medium", "large", "xlarge"]}
                        />
                    </div>
                </div>
                <div className="form-two">
                    <div className="form-two-one">
                        <div className="label">Age:</div>
                        <Dropdown
                            placeholder="All ages"
                            className="dropdownisti"
                            options={["baby", 'young', "adult", "senior"]}
                        />
                    </div>
                    <div className="form-two-one">
                        <div className="label">Color:</div>
                        <Dropdown
                            placeholder="All colors"
                            className="dropdownisti"
                            options={listOfColors}
                        />
                    </div>
                    <div className="form-two-one">
                        <div className="label">Must be good with:</div>
                        <div className="radio-buttons-container">
                            <input type="radio" id="children" name="dogs" value="children" />
                            <label htmlFor="children">Children</label>
                            <input type="radio" id="dogs" name="dogs" value="dogs" />
                            <label htmlFor="dogs">Dogs</label>
                            <input type="radio" id="cats" name="dogs" value="cats" />
                            <label htmlFor="cats">Cats</label></div>
                    </div>
                </div>
            </div>
            <div className="filter-button-container">
                <button className="filter-button" onClick={filterAnimals}>Apply filters</button>
            </div>
            <div className="sortby-container">
                <span>Sort by:</span>
            </div>
            <div className="matches-sort-container">
                <div className="matches-text">We found n matches:</div>
                <div className="sort-content">
                    <Dropdown
                        placeholder="Age (ascending)"
                        className="dropdown-sort"
                        options={["Age (ascending)", "Age (descending)", 'Color', "Size (ascending)", "Size (descending)"]}
                    />
                </div>
            </div>
            <Container className="container">
                <Row className="row">
                    {animalData.map((animalData, k) => (
                        <Col key={k} xs={12} md={4} lg={3}>
                            <NavLink to="/preadopt">
                                <Card style={{ margin: "10px" }}>
                                    <Card.Img src={animalData.photos[0].small} style={{ width: "285px", height: "200px" }} />
                                    <Card.Body>
                                        <Card.Title>{animalData.name}</Card.Title>
                                        <Card.Text>{animalData.age}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}