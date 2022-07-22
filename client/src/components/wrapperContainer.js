import { Outlet} from 'react-router-dom';
import HeaderContainer from './headerContainer';
import FooterContainer from './footerContainer';

const WrapperContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
    </div>
  )
}

export default WrapperContainer;
