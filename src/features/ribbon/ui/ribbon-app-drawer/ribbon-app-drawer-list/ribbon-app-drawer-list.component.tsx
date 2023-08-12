import { observer } from 'mobx-react-lite';

import { useRibbonService } from 'features/ribbon/services';

import { RibbonAppDrawerItem } from '../ribbon-app-drawer-item';

import s from './ribbon-app-drawer-list.module.scss';

export const RibbonAppDrawerList = observer(() => {
	const svc = useRibbonService();

	return (
		<div ref={svc.appDrawerService.containerRef} tabIndex={0} className={s.list}>
			{svc.launcherService.hidden.map(lp => (
				<RibbonAppDrawerItem key={lp.launchPointId} launchPoint={lp} />
			))}
		</div>
	);
});
