import type { MutableRef } from 'preact/hooks';

export type RibbonContextMenuProps = {
	cardRef: MutableRef<HTMLElement | null>;
	removable?: boolean;
};
