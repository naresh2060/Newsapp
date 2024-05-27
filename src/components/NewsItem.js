import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title, description, imageUrl, newsUrl, author, publishedDate, source } = this.props;
        return (
            <div>
                <div className="card">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"87%"}}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://images.bild.de/66519ddebade7176939c3fd9/ae481d9c8b13d6f2628af14110890b25,3e1318c5?w=1280"} className="card-img-top" alt="no Imag"/>
                        <div className="card-body">
                            <h5 className="card-title">{title} </h5>
                            
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">By {author?author : "Unknown"} on {new Date(publishedDate).toGMTString()} </small></p>
                            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More . . .</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
