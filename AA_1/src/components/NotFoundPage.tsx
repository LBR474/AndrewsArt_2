import { Link } from "react-router-dom"

type Props = {}

export default function NotFoundPage({}: Props) {
  return <div>
    404, element not NotFoundPage<p></p>
    <Link to="/Dist_test/AA_1/dist/">Back to home</Link>

  </div>
  
}