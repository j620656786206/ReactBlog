import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    //fetch the post if it's not fetch yet
    //stop refetch if it's already fetch, save network usage
    if (!this.props.post) {
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/" className="btn btn-primary">Back To HomePage</Link>
      </div>
    );
  }
}

function mapStatetoProps({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStatetoProps, {fetchPost})(PostsShow);
