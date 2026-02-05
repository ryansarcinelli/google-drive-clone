import React from "react";
import { Models } from "node-appwrite";

interface CardProps {
  file: Models.Document;
}

const Card = ({ file }: CardProps) => {
  return (
    <div className="card">
      {/* Card content for file */}
    </div>
  );
};

export default Card;
