import "../static/css/contact.css";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact">
        <h1>
          Let's build something impactful together.
        </h1>
        <p>
          I am actively seeking internships and entry-level opportunities where
          I can apply my technical knowledge and grow.
        </p>

        <div className="btn">
          <a href="mailto:rohitsinghsstc2812@gmail.com">
            <button className="email">Send an Email</button>
          </a>
          
            <button className="resume"> View Resume </button>
          
        </div>
      </div>
    </div>
  );
}
