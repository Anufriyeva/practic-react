import { Component } from "react";
import { getNews } from "../../services/getNews";

class ContentInfo extends Component {
    state = {
        news: null,
        isLoading: false,
        error: ''
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log('this.props');
        if (prevProps.searchText !== this.props.searchText) {
            this.setState({isLoading: true})
            getNews(this.props.searchText)            
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 'ok')
                        this.setState({ news: data.articles })
                    else Promise.reject(data.message)
                })
                .catch((error) => {
                    console.log('error', error)
                    this.setState({error})
                })
                .finally(() => {
                this.setState({isLoading:false})
            })
            
        }
    } 
    render() {
        const { news, isLoading } = this.state
        return (
            <>{isLoading && (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                
            )}
                <ul>
                    {news && news.map(el => {
                        return <li key={el.url}>{el.title}</li>
                    })}
                </ul>                
            </>)
    }
}

export default ContentInfo;