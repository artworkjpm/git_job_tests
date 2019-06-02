import React from "react";

const Return = props => {
  return (
    <div
      className="modal fade"
      id={"return" + props.productId}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.name} | Id: {props.productId} | €{props.price}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {" "}
            <img
              src={props.src}
              className="mr-3"
              alt="..."
              height="100"
              width="100"
            />
            <div>
              <h5>Reason to return item</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Changed my mind
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Bad fitting
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Other
                </label>
                <div className="form-group">
                  <input type="text" className="form-control" id="explain" />
                  <small id="explain" className="form-text text-muted">
                    Please explain what was wrong with this item
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
