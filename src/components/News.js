import React, { useEffect, useState, } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

// document.title = `Giggle News - ${this.capitalizeFirstLetter(this.props.category)}`;
// 


const News = (props) =>{

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

   

   const capitalizeFirstLetter =(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchData = async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
       fetchData();
    }, []);

    const fetchMoreData = async () => {
        const newPage = page + 1;
        setPage(newPage);
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${newPage}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };
    
        return (

            < >
                <h1 className='text-center'>GiggleNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    style={{marginBottom: "20px"}}
                >
                    <div className=" container my-3">
                        <div className="row my-3" style={{ rowGap: "20px" }}>
                            {articles.map((element, index) => {
                                // console.log(index)
                                return <div className=" col-md-4" key={index}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 100) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedDate={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </div>

                </InfiniteScroll>

            </>
        )
    
}
News.defaultProps = {
    pageSize: 9,
    country: 'in',
    category: 'general'
}

News.propType = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
}

export default News
