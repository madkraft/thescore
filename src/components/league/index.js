import { h, Component } from 'preact'
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import styled from 'styled-components';
import { fetchCompetition } from '../../services/fetchService'

const Title = styled.h1`
	font-size: 1.5rem;
`;

class League extends Component {
  componentDidMount() {
    const {leagueId, fetchLeague} = this.props
    fetchLeague(leagueId, 'leagueTable')
  }
  
  render({loading, data, leagueId, limit}) {
    return (
      <div>
        {loading ? 
          <p>Please wait...</p> :
          <div>
            <Title>{data.leagueCaption}</Title>
            {data.standing
              .filter((standing, index) => index < limit)
              .map((standing, index) => (
                <div key={index}>{standing.teamName}</div>
            ))}
            <Link href={`/competitions/${leagueId}`}>See more</Link>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({competition}) => ({
  loading: competition.loading,
  data: competition.data
})

const mapDispatchToProps = (dispatch) => ({
  fetchLeague: (id, part) => dispatch(fetchCompetition(id, part))
})

export default connect(mapStateToProps, mapDispatchToProps)(League)
