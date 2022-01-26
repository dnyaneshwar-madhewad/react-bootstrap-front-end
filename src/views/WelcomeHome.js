import { useState } from "react";
import { Carousel, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

export default function WelcomeHome() {
  let navigate = useNavigate();
  const [list, setList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 11]);

  return (
    <>
      <HeaderNavigation />

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row">
        {list.map((item, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="card">
              <div className="card-header">Product 1</div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                deserunt, debitis, eum veniam corrupti asperiores modi unde
                commodi officia delectus error ut. Assumenda iusto modi eaque
                placeat quos unde beatae voluptas recusandae reiciendis
                architecto praesentium porro id nostrum accusantium voluptatum
                dignissimos incidunt molestias neque rerum, provident, quo
                corrupti corporis sapiente?
                <div>
                  <input
                    type="button"
                    className="btn btn-secondary btn-sm"
                    value="Add to cart"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
