import React from "react";

const Details = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello Deporvillage!</h1>
      <hr className="my-4" />
      <p className="lead">My explanation the Order Explorer test</p>
      <hr className="my-4" />
      <ul>
        <li>
          After reading the test description I felt it was a test enabling the
          candidate to be creative because there wasn't many specific demands. I
          chose to use <b>React</b> as the Framework, seeing as this my current
          favourite to use. I made a json file <b>orderJson.js</b>. I took a
          looked at Amazons order list "Mis pedidos" and tried to make something
          similar.
        </li>
        <li>
          I first created CREATE-REACT-APP then decided to use <b>bootstrap</b>{" "}
          because I didn't want to waste time on the css, my interpretation on
          the test was that you are more interesting in the development more
          than the styling. Although I could have made it without bootstrap, my
          css/sass, using bootstrap just saved time and enabled me to think
          about the handling the orders.
        </li>
        <li>
          I made a simple order layout, showing the <b>OrderTable</b> component.
          I made a json file <b>orderJson.json</b> that displays some dummy
          products. I map over the products with javascript .map, making new
          components <b>Items</b> and <b>OrderHeading</b>. You will see I am
          doing some MATH to get the TOTAL PRICE, based on QUANTITY.
        </li>
        <li>
          To show some more skills I decided to do an <b>API call</b> to
          unsplash API, this is a free image API in which you can search for
          images in the API call, then return images to put on your page. This
          was the first time I called to this API, so I wanted to show you that
          I'm not afraid to try new things to fix a problem, the problem being I
          didn't have any images to show for my products and I didn't want to
          through the process of find, downloading and hosting images.
        </li>
      </ul>
      <hr className="my-4" />
      <p className="lead">Dealing with Search and Modify order</p>
      <hr className="my-4" />
    </div>
  );
};

export default Details;
