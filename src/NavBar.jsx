import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className="fixed left-0 top-0 w-screen flex flex-row bg-gray-900 text-white shadow">
			<SideBarIcon icon={<FaFire size="28" />} />
			<SideBarIcon icon={<BsPlus size="32" />} />
			<SideBarIcon icon={<BsFillLightningFill size="20" />} />
			<SideBarIcon icon={<FaPoo size="20" />} />
		</div>
	)
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
	<div className="sidebar-icon group">
		{icon}
	</div>
);

export default NavBar;
