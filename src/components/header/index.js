import { h } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';

const Navbar = styled.nav`
	background: yellow;
`;

const Header = () => (
	<Navbar class="navbar">
		<div class="navbar-brand">
			<div class="navbar-item">The Score</div>
			<Link activeClassName="active" class="navbar-item" href="/">Latest scores</Link>
			<Link activeClassName="active" class="navbar-item" href="/competitions">Standings</Link>
		</div>
	</Navbar>
);

export default Header
