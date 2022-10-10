import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <Row className='g-2 mt-2'>
        {
            props && props.articles.map(res => <Col md={3}>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{res.id}</h5>
                        <Link className='nav-link' to={"/read/"+res.id}>
                          <p className="card-text">{res.attributes.title}</p>
                        </Link>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>      
            </Col>)
        }
    </Row>
  )
}
