const Contact = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Contact Page</h1>

          <form>
            <div className="form-group mb-4">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
