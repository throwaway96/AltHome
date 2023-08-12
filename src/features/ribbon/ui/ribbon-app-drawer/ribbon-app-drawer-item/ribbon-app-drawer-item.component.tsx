import type { CSSProperties } from 'preact/compat';
import { useEffect, useMemo, useRef } from 'preact/hooks';

import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';

import clsx from 'clsx';

import { useRibbonService } from 'features/ribbon/services';

import type { RibbonAppDrawerItemProps } from './ribbon-app-drawer-item.interface';
import s from './ribbon-app-drawer-item.module.scss';

export const RibbonAppDrawerItem = observer(({ launchPoint }: RibbonAppDrawerItemProps) => {
	const svc = useRibbonService();

	const elementRef = useRef<HTMLButtonElement>(null);

	const isSelected = computed(() => svc.appDrawerService.isSelected(launchPoint)).get();

	const style = useMemo(
		() => ({ '--icon-color': launchPoint.iconColor } as CSSProperties),
		[launchPoint.iconColor],
	);

	useEffect(() => {
		if (isSelected) {
			elementRef.current?.scrollIntoView({ block: 'nearest' });
		}
	}, [isSelected, launchPoint]);

	return (
		<button ref={elementRef} className={clsx(s.button, isSelected && s.focused)} style={style}>
			<img alt='' src={launchPoint.icon} className={s.icon} />

			{launchPoint.title}
		</button>
	);
});
