import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>We looked everywhere.</h1>
      <p>
        Looks like this page is missing. If you still need help, visit our help
        pages.
      </p>

      <Link to="/">Go to homepage</Link>
    </div>
  );
}
