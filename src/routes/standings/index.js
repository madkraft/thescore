import { h } from 'preact'
import League from '../../components/league'

const Standings = () => (
	<div>
		<League leagueId="445" limit="8" />
		<League leagueId="452" limit="8" />
	</div>
);

export default Standings
