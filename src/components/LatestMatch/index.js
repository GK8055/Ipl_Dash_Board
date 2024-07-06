// Write your code here
import './index.css'

import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMachDetails} = this.props

    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMachDetails
    return (
      <div className="main_img_data">
        <h1 className="latest_macth_side_name">Latest Matches</h1>
        <div className="latest_match_containner">
          <div className="team_title_date_container">
            <p className="latest_match_title">{competingTeam}</p>
            <p className="latest_match_date">{date}</p>
            <p className="latest_match_text">{venue}</p>
            <p className="latest_match_text">{result}</p>
          </div>
          <div className="team_logo_container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className={`latest_match_logo_size ${competingTeam}`}
            />
          </div>
          <div className="team_details_container">
            <p className="latest_match_date">First Innings</p>
            <p className="latest_match_text">{firstInnings}</p>
            <p className="latest_match_date">Second Innings</p>
            <p className="latest_match_text">{secondInnings}</p>
            <p className="latest_match_date">Man Of The Match</p>
            <p className="latest_match_text">{manOfTheMatch}</p>
            <p className="latest_match_date">Umpires</p>
            <p className="latest_match_text">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
