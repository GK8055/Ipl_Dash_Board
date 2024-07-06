// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {noData: true, matchesList: []}
  componentDidMount() {
    this.getTeamDetails()
  }
  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const formatteData = teamsData.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(formatteData)

    this.setState({matchesList: formatteData, noData: false})
  }

  render() {
    const {noData, matchesList} = this.state
    // console.log(matchesList)
    const {id} = matchesList

    return (
      <div className="home_container">
        <div className="top_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo_size"
            alt="ipl logo"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <div>
          {noData ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#bfbfbf" height={50} width={50} />
            </div>
          ) : (
            <ul className="main_card_container">
              {matchesList.map(each => (
                <TeamCard matchDetails={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
