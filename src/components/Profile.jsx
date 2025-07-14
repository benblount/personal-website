import Button from "react-bootstrap/Button";
import ProfilePicture from "./ProfilePicture";
import Links from "./Links";

export default function Profile() {
  return (
    <section className="profile">
      <ProfilePicture />
      <section className="profile-text">
        <h1 className="profile-header">Ben Blount</h1>
        <h2 className="sub-header">
          New York City based customer advocate and product developer.
        </h2>
      </section>
      <Links />
    </section>
  );
}
