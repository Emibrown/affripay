import BottomTabNavigator from './BottomTabNavigator';
import Resetpassword from '../screens/ResetPassword/index';
import ResetPasswordOtp from '../screens/ResetPassword/ResetPasswordOtp';
import NewPin from '../screens/ResetPassword/NewPin';
import ConfirmNewPin from '../screens/ResetPassword/ConfirmNewPin';
import Menu from '../screens/Menu';
import WalletConfirm from '../screens/Wallet/WalletConfirm';
import EscrowRequest from '../screens/Wallet/EscrowRequest';
import Settings from '../screens/Settings';
import Notification from '../screens/Settings/Notification';
import Security from '../screens/Settings/Security';
import Refferal from '../screens/Wallet/Refferal';

const NavScreens = [

    {
        name:"Main",
        component:BottomTabNavigator,
        options:{headerShown: false}
    },
    {
        name:"Resetpassword",
        component:Resetpassword,
        options:{
          headerShadowVisible: false,
          title: '',
        }
    },
    {
        name:"ResetOtp",
        component: ResetPasswordOtp,
        options:{
          title: 'OTP Code',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }
    },

    {
        name:"NewPin",
        component:NewPin,
        options:{
          headerShadowVisible: false,
          title: '',
        }
    },

    {
        name:"ConfirmNewPin",
        component:ConfirmNewPin,
        options:{
          headerShadowVisible: false,
          title: '',
        }
    },

    {
        name:"Menu",
        component:  Menu,
        options:{headerShadowVisible: false, title: '', headerShown: false}
    },

    {
        name:"WalletConfirm",
        component:  WalletConfirm,
        options:{headerShadowVisible: false, title: '', headerShown: false}
    },

    {
        name:"EscrowRequest",
        component:  EscrowRequest,
        options:{headerShadowVisible: false, title: '', headerShown: false}
    },

    {
        name:"Referral",
        component:  Refferal,
        options:{headerShadowVisible: false, title: '', headerShown: false}
    },

    {
        name:"Settings",
        component:  Settings,
        options:{headerShown: false}
    },

    {
        name:"Notifications",
        component:  Notification,
        options:{headerShown: false}
    },
    {
        name:"Security",
        component:  Security,
        options:{headerShown: false}
    }
]

export default NavScreens