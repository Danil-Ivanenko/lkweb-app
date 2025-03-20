import React from "react";
import NewsItem from "./newsItem";
class News extends React.Component{
    render(){
        return(
            <div>
                <h3> Fresh news</h3>
                <div className="card-deck">
                    {
                        this.props.newsPage.info.posts.map((value) => {
                            return <NewsItem title={value.title}  likes={value.likes} key={value.id}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default News;