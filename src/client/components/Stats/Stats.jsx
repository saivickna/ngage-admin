import Inferno from 'inferno';
import Component from 'inferno-component';

import GroupStats from './GroupStats.jsx';
import UserStats from './UserStats.jsx';
import PresentationStats from './PresentationStats.jsx';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'groupStats'
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    e.preventDefault();
    this.setState({view:e.target.id})
  }
  render() {
    return (
      <div>
        <div className="buttonMenu">
          <button className="button" onClick={this.changeView} id="groupStats">Group Stats</button>
          <button className="button" onClick={this.changeView} id="userStats">User Stats</button>
          <button className="button" onClick={this.changeView} id="presentationStats">Presentation Stats</button>
        </div>

        <div>
          {this.state.view === 'groupStats' ? (<GroupStats user={this.props.user}/>) : this.state.view === 'userStats' ? (<UserStats user={this.props.user}/>) : (<PresentationStats user={this.props.user}/>)}
        </div>
      </div>
    );
  }
}

export default Stats;
