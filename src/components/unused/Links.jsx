import Button from "react-bootstrap/Button";

export default function Links() {
  return (
    <>
      <section className="links">
        <a
          className="btn btn-secondary email-btn"
          href="mailto:benblount@me.com"
          role="button"
        >
          <i className="fa fa-envelope"></i> Email Me
        </a>
        <a
          className="btn btn-primary linkedin-btn"
          href="https://www.linkedin.com/in/benjaminblount/"
          role="button"
          target="_blank"
        >
          <i className="fa fa-linkedin-square"></i> LinkedIn
        </a>
      </section>
    </>
  );
}
