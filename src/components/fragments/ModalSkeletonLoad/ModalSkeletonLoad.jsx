import React from "react";
import Skeleton from "react-loading-skeleton";

const ModalSkeletonLoad = ({id}) => {
  return (
    <div>
      <div
        className="modal fade"
        tabIndex={"-1"}
        id={id}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <Skeleton className="rounded-4 w-50 h-50" />

                <div className="ms-4">
                  <div className="d-flex flex-column">
                    <Skeleton count={2} width={20} />
                  </div>
                  <div className="d-flex flex-column">
                    <Skeleton count={2} width={20} />
                  </div>
                  <div className="d-flex flex-column">
                    <Skeleton count={2} width={20} />
                  </div>
                  <div className="d-flex flex-column">
                    <Skeleton count={2} width={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSkeletonLoad;
