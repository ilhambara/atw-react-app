import React from 'react';
import { client } from '../../client';
import Posts from '../../components/PostSection/Posts'

class Post extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries()
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }

    render() {
        return (
            <>
                <Posts posts={this.state.articles} />
            </>
        )
    }

}

export default Post
