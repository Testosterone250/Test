import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { youtubeRequest } from '../actions/youtubeRequestAction';
import SearchBar from './videos_search_bar';
import List from './videos_list';
import Detail from './video_detail'

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedVideo: null};
  }

  componentDidMount() {
    this.search('Perfectorium');
  }

  search(term) {
    this.props.youtubeRequest(term);
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedVideo: nextProps.selectedVideo});
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTerm={this.search.bind(this)} />
        <Detail video={this.state.selectedVideo} />
        <List videos={this.props.videos}
              onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {videos: state.videos, selectedVideo: state.videos[0]};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeRequest}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
