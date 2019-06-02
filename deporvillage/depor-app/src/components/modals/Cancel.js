import React from "react";

const Cancel = props => {
  return (
    <div
      className="modal fade"
      id={"cancel" + props.productId}
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
            <div>Are you sure you want to cancel this item?</div>
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
              Yes, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
