// Write your code here
import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {recentMacthData} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} =
      recentMacthData
    const applyStyles = matchStatus === 'Won' ? 'won_result' : ''
    return (
      <li className="each_card_container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="logo_size"
        />
        <p className="title_name">{competingTeam}</p>
        <p className="status">{result}</p>
        <p className={` match_result ${applyStyles}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
