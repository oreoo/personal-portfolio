import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,gitUrl }) => {
  return (
    // <Col size={12} sm={6} md={4}>
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        
        <div className="proj-txtx">
        <a href={gitUrl} target="_blank">
          <h4>{title}</h4>
          <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  )
}
