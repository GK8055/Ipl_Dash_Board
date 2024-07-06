// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

const apiCall = 'https://apis.ccbp.in/ipl/'
class TeamMatches extends Component {
  state = {teamMatchesList: [], noData: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }
  getLatestMatchDetails = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })
  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${apiCall}${id}`)
    const data = await response.json()
    console.log(id)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getLatestMatchDetails(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getLatestMatchDetails(each),
      ),
    }

    this.setState({teamMatchesList: formattedData, noData: false})
  }
  getBgColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SRH':
        return 'srh'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  getRecentMatchList = () => {
    const {teamMatchesList} = this.state
    const {recentMatches} = teamMatchesList
    return (
      <ul className="list_container">
        {recentMatches.map(each => (
          <MatchCard recentMacthData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {teamMatchesList, noData} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesList
    console.log(teamMatchesList)
    const classname = `team_matches_containner ${this.getBgColor()}`

    return (
      <div className={classname}>
        {noData ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#bfbfbf0" height={50} width={50} />
          </div>
        ) : (
          <div className="main_img_data_container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner_image_sfize"
            />
            <LatestMatch latestMachDetails={latestMatch} />
            {this.getRecentMatchList()}
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
