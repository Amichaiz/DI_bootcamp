import React from 'react';
import SearchBox from './components/SearchBox';
import './App.css';
import CardList from './components/CardList';
import 'tachyons';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rb: [],
      searchText: '',
      textToSearch: '',
      posts: [],
      page: 'home'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ rb: data, page: 'home' })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSearch = (event) => {
    this.setState({ searchText: event.target.value })
    //option 1 not so good this.state.searchText = event.target.value
  }

  handleButton = (searchtext) => {
    this.setState({ textToSearch: searchtext })
  }

  post = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data, page: 'posts' })
      })
      .catch(err => {
        console.log(err);
      })
  }

  home = () => {
    this.setState({ page: 'home',textToSearch: '' })
  }

  render() {

    // console.log('3');
    const { rb, textToSearch, posts, page } = this.state;

    const filterRobo = rb.filter(item => {
      return item.name.toLowerCase().includes(textToSearch.toLowerCase())
    })
    switch (page) {
      case 'home':
        return (
          <>
            <SearchBox searchbut={this.handleButton} />
            <CardList robots={filterRobo} post={this.post} />
          </>
        );
        break;
      case 'posts':
        return (
          <>
          <button className='tc bg-light-green br3 pa2 ma2' onClick={this.home}>Home</button>
          {
            posts.map((item, i) => {
              return (
                <>
                <div className='bg-light-green br3 pa2 ma2' key={i}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                </>
              )
            })
          }
          </>
        )
      default:
        return (
          <>
            <SearchBox searchbut={this.handleButton} />
            <CardList robots={filterRobo} post={this.post} />
          </>
        );
        break;
    }
  }
}
  export default App;
