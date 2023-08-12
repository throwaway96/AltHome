import { createContext, useContext } from 'preact/compat';

import type { Container } from 'inversify';

export const ContainerContext = createContext<Container | null>(null);

export const useContainer = () => useContext(ContainerContext)!;
