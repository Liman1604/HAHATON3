import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TelegramBot = () => {
  return (
    <div className="tbot">
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
      <h1>Order successfully sent</h1>
      <img
        width={400}
        src="https://miro.medium.com/max/1400/1*mGSa3XLgXjzBuK4Ob1U8jg.gif"
        alt=""
      />
    </div>
  );
};

export default TelegramBot;
