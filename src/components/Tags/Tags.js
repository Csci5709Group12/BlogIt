import React from "react";
import { Card } from "react-bootstrap";
import VerticalNavBar from "../VerticalNavBar/VerticalNavBar";
import AppNavbar from "../Navbar/Navbar";
import "./Tags.css";

// Hardcoded unique tags and their post counts
const uniqueTags = [
  { tag: "#tag1", count: "1,234 posts" },
  { tag: "#tag2", count: "567 posts" },
  { tag: "#tag3", count: "2,345 posts" },
  { tag: "#tag4", count: "890 posts" },
  { tag: "#tag5", count: "123 posts" },
];

function Tags() {
  return (
    <div>
      <AppNavbar />
      <VerticalNavBar />
      <div className="tags-page-container">
        <h2 className="tags-heading text-center mt-4 mb-3">Tags</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {uniqueTags.map((item, index) => (
            <div key={index} className="col">
              <Card className="custom-tag-card">
                <Card.Body className="custom-card-body">
                  <span className="custom-tag-text">{item.tag}</span>
                  <span className="custom-tag-count">{item.count}</span>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tags;
