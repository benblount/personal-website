import Profile from "./Profile";
import Bio from "./Bio";
import CardFooter from "./CardFooter";

export default function Card() {
  return (
    <>
      <section className="card-container">
        <Profile />
        <Bio />
        <CardFooter />
      </section>
    </>
  );
}
