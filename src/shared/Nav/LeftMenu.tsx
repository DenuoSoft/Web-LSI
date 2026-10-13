import {memo} from 'react';
import {MenuList, MenuItem, MenuButton} from './LeftMenu.styled';

export type MenuLink = {
	id: string;
	label: string;
};

type LeftMenuProps = {
	links: MenuLink[];
	activeId?: string | null;
	onItemClick: (id: string) => void;
	className?: string;
	ariaLabel?: string;
};

const LeftMenu = ({
	links,
	activeId,
	onItemClick,
	className,
	ariaLabel = 'Section navigation',
}: LeftMenuProps) => (
	<nav aria-label={ariaLabel} style={{display: 'contents'}}>
		<MenuList className={className}>
			{links.map((link) => {
				const isActive = activeId === link.id;

				return (
					<MenuItem key={link.id} $active={isActive}>
						<MenuButton
							type="button"
							aria-current={isActive ? 'true' : undefined}
							onClick={() => onItemClick(link.id)}
						>
							{link.label}
						</MenuButton>
					</MenuItem>
				);
			})}
		</MenuList>
	</nav>
);

export default memo(LeftMenu);