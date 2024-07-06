// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {id, name, teamImageUrl} = matchDetails
    // console.log(name)
    return (
      <li className="each_card_container_card">
        <Link className="each_card_container_link" to={`/team-matches/${id}`}>
          <img src={teamImageUrl} alt={`${name}`} className="team_image_size" />
          <p className="match">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
