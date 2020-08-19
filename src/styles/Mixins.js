import { css } from 'styled-components';
import { Breakpoints } from './Breakpoints';

export const media = Object.keys(Breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${Breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});