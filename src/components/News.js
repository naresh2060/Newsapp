import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        pageSize: 9,
        country: 'in',
        category: 'general'
    }

    static propType = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
            // postPerPage : 12
        }
        document.title = `Giggle News - ${this.capitalizeFirstLetter(this.props.category)}`;
        console.log(this.state.articles.length !== this.state.totalResults)

    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async fetchData() {
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=1baf4a87c0654aa0a5c015899835568f&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        // console.log(parsedData); 
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        console.log(parsedData)
    }

    async componentDidMount() {
        this.fetchData();
    }

    // handlePreviousPage = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.fetchData();
    // }
    fetchMoreData = async () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }), async () => {
            const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=1baf4a87c0654aa0a5c015899835568f&pageSize=${this.props.pageSize}&page=${this.state.page}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults
            });
        });
    };
    

    render() {

        return (

            < >
                <h1 className='text-center'>GiggleNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className=" container my-3">
                        <div className="row my-3" style={{ rowGap: "20px" }}>
                            {this.state.articles.map((element, index) => {
                                // console.log(index)
                                return <div className=" col-md-4" key={index}>
                                    <NewsItem title={element.title ? element.title.slice(0, 60) + "..." : ""} description={element.description ? element.description.slice(0, 100) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedDate={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </div>

                </InfiniteScroll>

            </>
        )
    }
}

export default News
