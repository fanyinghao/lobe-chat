import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

const Header = memo(() => (
  <MobileNavBar center={<Logo extra={<span>Wecode Chat</span>} type={'high-contrast'} />} />
));

export default Header;
