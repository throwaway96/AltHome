import type { FunctionComponent } from 'preact';

import type { Container } from 'inversify';

import { ContainerContext } from './container.context';

export const ContainerProvider: FunctionComponent<{
	container: Container;
}> = ({ container, children }) => (
	<ContainerContext.Provider value={container}>{children}</ContainerContext.Provider>
);
