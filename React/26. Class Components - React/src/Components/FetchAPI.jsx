import React, { Component } from "react";

class FetchAPI extends Component {
  constructor() {
    super();
    this.state = { data: null, loading: true, error: null };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => this.setState({ data, loading: false }))
        .catch((error) =>
          this.setState({ error: error.message, loading: false })
        );
    }, 2000);
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div className="box">
        <h1>Posts</h1>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchAPI;
