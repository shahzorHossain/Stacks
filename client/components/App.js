import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addComment } from '../actions/addComment';
import { removeComment } from '../actions/removeComment';
import { increment } from '../actions/incrementLikes';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment, removeComment, increment }, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
