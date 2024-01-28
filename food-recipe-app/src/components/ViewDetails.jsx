import React from "react";
import { IoIosDoneAll } from "react-icons/io";
import { useSelector } from "react-redux";

function ViewDetails() {
  const details = useSelector((store) => store.viewdetails);

  return (
    <main className="container bg-secondary mb-4 p-3">
      <div className="row d-flex justify-content-center fs-1 mb-3">
        View Details
      </div>
      <div className="row mb-2 d-flex justify-content-center">
        <div className="col-md-6 col-lg-8">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">{details.label}</h3>

              <p className="card-text mb-auto my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                reiciendis dolorum beatae, error laudantium similique numquam
                labore saepe? Laudantium, enim.
              </p>

              <div className="mt-2 text-body-secondary">
                <h4>
                  <IoIosDoneAll />
                  Dish Type:
                  <span className="fs-6">{details.dish.toUpperCase()}</span>
                </h4>
              </div>
              <div className="mb-1 text-body-secondary">
                <h4>
                  <IoIosDoneAll />
                  Cuisine:
                  <span className="fs-6">{details.cuisine.toUpperCase()}</span>
                </h4>
              </div>
              <div className="mb-1 text-body-secondary">
                <h4>
                  <IoIosDoneAll />
                  Meal Type:
                  <span className="fs-6">{details.meal.toUpperCase()}</span>
                </h4>
              </div>
              <div className="mb-1 text-body-secondary">
                <h4>
                  <IoIosDoneAll />
                  Available Calories:
                  <span className="fs-5"> {details.calories} </span>
                </h4>
              </div>
              <div className="mb-1 text-body-secondary">
                {details.healthlabel.map((item) => (
                  <span className="btn btn-dark p-1 m-1" key={item}>
                    {" #" + item}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-lg-auto d-lg-block d-md-block d-sm-block">
              <img
                className="bd-placeholder-img details-img"
                width="240"
                role="img"
                src={details.image}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ViewDetails;
