import { memo } from 'preact/compat';

import type { RibbonScrollTriggerProps } from './ribbon-scroll-trigger.interface';
import s from './ribbon-scroll-trigger.module.scss';

export const RibbonScrollTrigger = memo<RibbonScrollTriggerProps>(({ hiddenEdge, onTrigger }) => (
	<>
		{hiddenEdge !== 'left' && (
			<div
				className={s.left}
				onMouseOver={() => onTrigger('left')}
				onMouseOut={() => onTrigger(null)}
			/>
		)}

		{hiddenEdge !== 'right' && (
			<div
				className={s.right}
				onMouseOver={() => onTrigger('right')}
				onMouseOut={() => onTrigger(null)}
			/>
		)}
	</>
));
