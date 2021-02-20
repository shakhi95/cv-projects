import React from "react";
import { FaCode, FaEye } from "react-icons/fa";

const ItemCard = ({ title, demoUrl, codeUrl, img }) => {
  //
  return (
    <div className=" my-3 rounded ">
      <div className="bg-dark text-center rounded position-relative">
        <img
          className="w-100"
          src={img}
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="hover-item">
          <div>
            <a
              rel="noreferrer"
              href={codeUrl}
              target="_blank"
              className="btn btn-sm btn-info py-0 px-2 mb-2 d-flex align-items-center"
            >
              <FaCode className="me-2" />
              Code
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href={demoUrl}
              target="_blank"
              className="btn btn-sm btn-danger py-0 px-2 d-flex align-items-center"
            >
              <FaEye className="me-2" />
              Demo
            </a>
          </div>
        </div>
      </div>
      <small className="fw-bold">{title}</small>
    </div>
  );
};

export default ItemCard;
