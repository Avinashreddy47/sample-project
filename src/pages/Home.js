import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>

        <div>
          <h1 style={{ textAlign: "center" }}>Query Collector</h1>
        </div>

        <div className="container">

          <form action="action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="gmail" placeholder="Your email.." />

            
            <label htmlFor="subject">Queries</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Description.."
              style={{ height: 200 }}
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>


      </>

    );
  }
}
export default Home;