import type { JSX } from 'preact/jsx-runtime';

import { ContainerProvider, container } from '@di';

import { Ribbon } from 'features/ribbon';

export const App = (): JSX.Element => (
	<ContainerProvider container={container}>
		<Ribbon />
	</ContainerProvider>
);
