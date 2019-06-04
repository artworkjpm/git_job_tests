import React from "react";

const Details = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello Deporvillage!</h1>
      <hr className="my-4" />
      <p className="lead">
        Things that could impress you -{" "}
        <b>
          API call to get images, ternary class conditions for the order status,
          Math on the item prices, React Hook on the quantity (Order again),
          Search orders by last name, using React Router for different pages.
        </b>
      </p>
      <hr className="my-4" />
      <ul>
        <li>
          After reading the test description I felt it was a test enabling the
          candidate to be creative because there wasn't many specific demands. I
          chose to use <b>React</b> as the Framework, seeing as this my current
          favourite to use. I made a json file <b>orderJson.js</b>. I took a
          look at Amazons order list "Mis pedidos" and tried to make something
          similar.
        </li>
        <li>
          I first created CREATE-REACT-APP then decided to use <b>bootstrap</b>{" "}
          because I didn't want to waste time on the css, my interpretation on
          the test was that you are more interesting in the development more
          than the styling. Although I could have made it without bootstrap
          because my css/sass skill are of a high standard, using bootstrap just
          saved time and enabled me to think controling the app rather than the
          styling of it.
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
          through the process of searching, downloading and hosting images.
        </li>
      </ul>
      <hr className="my-4" />
      <p className="lead">Dealing with Search and Modify order</p>
      <hr className="my-4" />
      <ul>
        <li>
          <b>Search</b>
          <br />I enabled Search to take place, just with the customers last
          name. I could integrate any part of the order, ie the Item name or ID
          of the product, for this test, I just enabled the customer name.
        </li>
        <li>
          <b>Modify </b>
          <br />I use three buttons, "Order again", "Return item", "Cancel".
          Each is set up to display different text. In order to update the State
          of the json, I would have to lift the state to the index or app
          component, then pass down data via props. Or I could make
          React.Context and have one master state witout needing to pass down,
          also done with Redux. Seeing as that would take some time, this demo
          app just displays different text dependant on the button you click. I
          did use React Hooks for the first time on the QUANTITY. React hooks is
          the future of React development, to be a functional component way of
          making apps, instead of using Classes and having the issues of BINDING
          THIS.
        </li>
      </ul>
      <hr className="my-4" />
      <p className="lead">Deploy the service to a cloud hosting</p>
      <hr className="my-4" />

      <ol>
        <li>
          <b>CI/CD? How? Which tools?</b>
          <br />
          Continious Integration / Deployment is a must enabling DevOps to
          update a site by pushing the new code to a repo on github or bitbucket
          and is the ideal way to manage a site, automating builds and finding
          bugs in the build before it is deployed. There are a mulitude of
          companies available, from Firebase, to TeamCity for the build server,
          I used TeamCity at 15below, my old employer in the UK and monitored
          builds when I was merging my feature branch. For cloud hosting it
          depends on your budget and traffic, Google Cloud Build has the best
          price but that is for basic sites, but Amazon web services or Azure
          are popular and reliable.
          <br />
          Working in an Agile way, creating branches to add new features, CI
          helps fix/find bugs, whenever there is a change to the repo, the CI
          will make a build and alert any problems in the build. The new code is
          not hosted until it passes the build. CD Continious Deployment moves
          this further but CI and CD basically work together.
        </li>
        <li>
          <b>Monitoring & Alerts? Any concrete tool?</b>
          <br />I used Octopus Deploy for the builds, automating the deployment
          to the build server, I am happy to take on this responsibility of
          this. Another popular tool for monitoring/logging builds is Jenkins.
          Octopus integrates with build servers like TeamCity, Bamboo, Jenkins.
        </li>
        <li>
          <b>Deployment - Microplatform (AMI) vs Kubernetes?</b>
          <br />
          I'll be honest, I don't know what Microplatform (AMI) is. I have heard
          of Kubernetes or K8s, it is a great way to manage your deployment,
          splitting your deployed applications into deploy containers, making it
          portable, small and fast. In terms of what to choose, I'll have to
          know what Microplatform AMI is, after Googling it, the best answer I
          have is that it is Amazon Machine Images, I can't really give you my
          opinion on this, I would be making it up!
        </li>
      </ol>
      <hr className="my-4" />
      <p className="lead">Final message</p>
      <hr className="my-4" />
      <p>
        Al final he quierido decir que aún no lo sé todo las cosas de IT,
        Front-End y Deployment. Cada día estoy aprendiendo cosas nuevas, pero
        cuando tengo un problem, yo sé la manera encontrar un solucíon.
        <br />
        Gracías, John.{" "}
      </p>
    </div>
  );
};

export default Details;
