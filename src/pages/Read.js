import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneArticle } from '../services/actions/articleActions'

function Read(props) {
    const {id} = useParams()
    useEffect(() => {
        props.fetchOneArticle(id)
    }, [])
  return (
      <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {props.article.attributes.content}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

const mtp = (store) => {
    return{
        article: store.articleR.article
    }
}
export default connect(mtp, {fetchOneArticle})(Read)