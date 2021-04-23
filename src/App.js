import React from "react";
import data from "./data";
import "./App.css";
import ItemCard from "./ItemCard";

const App = () => {
  return (
    <div className="container py-5">
      <div className="row" style={{ fontFamily: "sans" }}>
        <div className="col-sm-3 col-md-2">
          <h6 className="fw-bold">Name:</h6>
        </div>
        <div className="col-sm-9 col-md-4">
          <h5>Khalil Shakhi</h5>
        </div>
        <div className="col-sm-3 col-md-2">
          <h6 className="fw-bold">Mobile:</h6>
        </div>
        <div className="col-sm-9 col-md-4">
          <h5>09396946244</h5>
        </div>
        <div className="col-sm-3 col-md-2">
          <h6 className="fw-bold">Email:</h6>
        </div>
        <div className="col-sm-9 col-md-4">
          <a
            rel="noreferrer"
            target="_blank"
            className="h5 text-decoration-none"
            href="mailto:khalilshakhi95@gmail.com"
          >
            khalilshakhi95@gmail.com
          </a>
        </div>
        <div className="col-sm-3 col-md-2">
          <h6 className="fw-bold">Github:</h6>
        </div>
        <div className="col-sm-9 col-md-4">
          <a
            rel="noreferrer"
            target="_blank"
            className="h5 text-decoration-none"
            href="https://github.com/shakhi95"
          >
            https://github.com/shakhi95
          </a>
        </div>
      </div>
      <hr />
      <h3 className="text-center mb-4">React L-3</h3>
      <div className="row px-md-5">
        {data.map((item) => {
          if (item.level === "react3") {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                <ItemCard {...item} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      <h3 className="text-center mb-4">React L-2</h3>
      <div className="row px-md-5">
        {data.map((item) => {
          if (item.level === "react2") {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                <ItemCard {...item} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      <h3 className="text-center mb-4">React L-1</h3>
      <div className="row px-md-5">
        {data.map((item) => {
          if (item.level === "react1") {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                <ItemCard {...item} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      <h3 className="text-center mb-4">React L-0</h3>
      <div className="row px-md-5">
        {data.map((item) => {
          if (item.level === "react0") {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                <ItemCard {...item} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      <h3 className="text-center mb-4">Bootstrap V5</h3>
      <div className="row px-md-5">
        {data.map((item) => {
          if (item.level === "bs5") {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                <ItemCard {...item} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      <h3 className="text-center mb-4">HTML, Pure CSS, Vanilla JS</h3>
      <div className="row px-md-5">
        {data.map((item) => {
          if (item.level === "js") {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                <ItemCard {...item} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default App;
