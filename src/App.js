import { Accordion, Alert } from "react-bootstrap";

export default function App() {
  return (
    <div className="">
      {/** Bootstrap */}
      <div className="alert alert-primary">
        Lorem ipsum dolor sit amet consectetur.
      </div>

      {/** React Bootstrap */}
      <Alert variant="primary">Lorem ipsum dolor sit amet consectetur.</Alert>
    </div>
  );
}