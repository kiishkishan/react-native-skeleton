/*
 * Cellcard Selfcare Application 24.6.2019
 * Copyright © 2019 Cellcard. All rights reserved.
 */

import React from 'react';
import { Picker, View, TouchableOpacity, Alert, Text } from 'react-native';

import { storiesOf, addDecorator } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import Button from './Button';
import CenterView from './CenterView';
// import Welcome from './Welcome';
import { tick } from '../../app/assets/vectorIcons';
import { formatValidityNewDate, percentageIntoFloat } from '../../app/utilities/helper';
import {
  StandardButton,
  StandardText,
  StandardInput,
  StandardTouchableOpacity,
  StandardPicker,
  StandardListItem,
  StandardSwitch,
  StandardCheckBox,
  StandardVectorIcon,
  StandardGrid,
  IconTile,
  StandardTouchableImage,
  StandardYoutubePlayer,
  StandardTile,
  ContentSlider,
  FloatingLabelInput,
  CustomButton,
  PaperBox,
  LinkButton,
  AvatarProfile
} from '../../app/components/atoms';
import {
  SecureStandardInput,
  StandardModal,
  ModalContent,
  LanguagesBar,
  LanguageSelector,
  SwitchBar,
  TabItem,
  ConfirmationModal,
  Gender,
  SelectButton,
  SlideIndicators,
  AvatarTile,
  GridTile,
  CurrencyText,
  BalanceTile,
  ActionTile,
  MainActionTile,
  LabelButton,
  LargeActionTile,
  SupportBar,
  HistoryTile,
  StandardAlert,
  AddonsSliderContentHeader,
  UserLevelTile,
  UserDetailTile,
  PrizeTile,
  DetailActionTile,
  UsageChartBox,
  UsageTileHeader
} from '../../app/components/molecules';
import {
  LoginForm,
  TabBar,
  Tutorials,
  HotPromotionList,
  AvatarGrid,
  VASGrid,
  VASDetails,
  SupportForm,
  AddonSlideTile,
  AddonSingleChartContainer,
  AddOnTwoChartContainer,
  AddOnThreeChartContainer,
  AddOnFourChartContainer,
  BalanceAdvUsage,
  BalanceAdvSelection,
  AddOnTwoBarChartContainer,
  UserDetailContainer,
  GamePlay,
  MainBalance,
  ProfileHeader,
  KjeySenLoan
} from '../../app/components/organisms';
import {
  LoginTemplate,
  SettingsTemplate,
  MyAccountTemplate,
  SupportTemplate
} from '../../app/components/templates';
import { LoginPage } from '../../app/components/pages';
// import ShareFriendModal from '../../app/components/organisms/ShareFreindModal';

import colors from '../../app/theme/colours';
import { bigLove, prize1 } from '../../app/assets/images';
import commonStyles from '../../app/theme/styles/commonStyles';
// import YoutubePlayerCard from '../../app/components/molecules/YoutubePlayerCard';

import StandardScrollableTabView from '../../app/components/atoms/standardScrollableTabView';
import PieChartSingleBar from '../../app/components/atoms/pieChartSingleBar';
import PieChartTile from '../../app/components/molecules/pieChartTile';
import BarChartSingleBar from '../../app/components/atoms/barChartSingleBar';
import BarChartTile from '../../app/components/molecules/barChartTile';
import UsageCompactView from '../../app/components/organisms/usageCompactView';
import EmptyUsageTile from '../../app/components/molecules/emptyUsageTile';
// For VAS grid
const servicesArr = [
  {
    label: 'calltuens service',
    img: 'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'
  },
  {
    label: 'calltuens service',
    img: 'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'
  },
  {
    label: 'calltuens service',
    img: 'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'
  },
  {
    label: 'calltuens service',
    img: 'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'
  }
];

const CenterDecorator = storyFn => (
  <View style={[{ flex: 1, backgroundColor: colors.CELLCARD_ASH }]}>{storyFn()}</View>
);
addDecorator(CenterDecorator);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <View>
//       <Button onPress={action('clicked-text')}>
//         <Text>Hello Button</Text>
//       </Button>
//       <Button onPress={action('clicked-emoji')}>
//         <Text>😀 😎 👍 💯</Text>
//       </Button>
//     </View>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('StandardButton')} />
// ));

// Atoms
// ----------------StandardButton stories------------------
// storiesOf('StandardButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardButton title="Login" onPress={action('clicked-text')} />
//   ));
// //Atoms
// //----------------StandardButton stories------------------
// storiesOf('StandardButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardButton title="Login" onPress={action('clicked-text')} />
//   ));

// storiesOf('StandardButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with yellow title', () => (
//     <StandardButton title="Login" color="yellow" onPress={action('clicked-text')} />
//   ));

// storiesOf('StandardButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with blue background', () => (
//     <StandardButton
//       title="Login"
//       style={{ backgroundColor: 'blue' }}
//       onPress={action('clicked-text')}
//     />
//   ));

// // ----------------StandardText stories------------------
// storiesOf('StandardText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardText>Hello!</StandardText>);

// storiesOf('StandardText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with custom styles', () => (
//     <StandardText style={{ fontSize: 40, color: 'blue' }}>Hello!</StandardText>
//   ));

// // ----------------StandardInput stories------------------
// storiesOf('StandardInput', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardInput />);

// storiesOf('StandardInput', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with custom styles', () => (
//     <StandardInput
//       textStyle={{
//         fontSize: 40,
//         color: 'black',
//         borderColor: 'red',
//         borderRadius: 20,
//         width: 350,
//         backgroundColor: 'yellow'
//       }}
//     />
//   ));

// // ---------------StandardTouchableOpacity------------------
// storiesOf('StandardTouchableOpacity', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardTouchableOpacity>
//       <StandardText>Touch</StandardText>
//     </StandardTouchableOpacity>
//   ));

// ----------------StandardPicker------------------------
// storiesOf('StandardPicker', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardPicker
//       items={[
//         {
//           label: 'Football',
//           value: 'football'
//         },
//         {
//           label: 'Baseball',
//           value: 'baseball'
//         },
//         {
//           label: 'Hockey',
//           value: 'hockey'
//         }
//       ]}
//     />
//   ));

// storiesOf('StandardTile', module)
//   .addDecorator(getStory => (
//     <View style={{ padding: 50, backgroundColor: '#e0e0e0' }}>{getStory()}</View>
//   ))
//   .add('with default styles', () => (
//     <StandardTile>
//       <StandardText>Hello</StandardText>
//     </StandardTile>
//   ));
// // ----------------StandardListItem------------------------
// storiesOf('StandardListItem', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardListItem>English</StandardListItem>);

// storiesOf('StandardSwitch', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardSwitch />);

// storiesOf('StandardCheckBox', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardCheckBox />);
// // --------------- Standard Vectoricon -----------------
// storiesOf('StandardVectorIcon', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardVectorIcon name="heart" style={{ fontSize: 30 }} />);

// // StandardGrid
// storiesOf('StandardGrid', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardGrid />);
// // ----------------Molecules------------------------------
// // ----------------SecureStandardInput------------------------
// storiesOf('SecureStandardInput', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SecureStandardInput />);

// // //----------------StandardModal------------------------
// // storiesOf('StandardModal', module).add('with default styles', () => (
// //   <StandardModal isVisible>
// //     <StandardText style={{ height: '80%', width: 300 }}>Hello...</StandardText>
// //   </StandardModal>
// // ));
// storiesOf('TouchableImage', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardTouchableImage imgUrl="https://sc01.alicdn.com/kf/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM/223734905/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM.jpg" />
//   ));

// storiesOf('ShareFriend Modal', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <ShareFriendModal isVisible />);

// storiesOf('StandardAlert', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardAlert isVisible buttonText="Okay">
//       <StandardText>We appreciate your feedback. We’ll get back to you shortly</StandardText>
//     </StandardAlert>
//   ));

// //----------------StandardModal------------------------
// storiesOf('StandardModal', module).add('with default styles', () => (
//   <StandardModal isVisible>
//     <StandardText style={{ height: '80%', width: 300 }}>Hello...</StandardText>
//   </StandardModal>
// ));

// // StandardGrid
// storiesOf('StandardGrid', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardGrid />);
// // ----------------Molecules------------------------------
// // ----------------SecureStandardInput------------------------
// storiesOf('SecureStandardInput', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SecureStandardInput />);

// // //----------------StandardModal------------------------
// // storiesOf('StandardModal', module).add('with default styles', () => (
// //   <StandardModal isVisible>
// //     <StandardText style={{ height: '80%', width: 300 }}>Hello...</StandardText>
// //   </StandardModal>
// // ));
// storiesOf('TouchableImage', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardTouchableImage imgUrl="https://sc01.alicdn.com/kf/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM/223734905/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM.jpg" />
//   ));

// storiesOf('ShareFriend Modal', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <ShareFriendModal isVisible />);

// storiesOf('VAS details', module).add('with default styles', () => (
//   <View style={{ backgroundColor: '#eaeaea', flex: 1 }}>
//     <VASDetails
//       headerTitle="Header Title"
//       description="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
//       imageUrl="https://sc01.alicdn.com/kf/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM/223734905/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM.jpg"
//     />
//   </View>
// ));

// //----------------StandardModal------------------------
// storiesOf('StandardModal', module).add('with default styles', () => (
//   <StandardModal isVisible headerTitle="Complaint">
//     <View style={{ width: '100%' }}>
//       <ModalContent
//         title="title"
//         createdDate="2018-05-12"
//         mobile="071177474"
//         email="tfafa@gmail.com"
//         message="acbjajkcnaocbaijck ajbajkcn ajk "
//       />
//     </View>
//   </StandardModal>
// ));
// storiesOf('TouchableImage', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardTouchableImage imgUrl="https://sc01.alicdn.com/kf/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM/223734905/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM.jpg" />
//   ));
// storiesOf('StandardModal', module).add('with default styles', () => (
//   <StandardModal renderHeaderIcon isVisible headerTitle="Complaint">
//     <View style={{ width: '100%' }}>
//       <ModalContent
//         title="title"
//         createdDate="2018-05-12"
//         mobile="071177474"
//         email="tfafa@gmail.com"
//         message="acbjajkcnaocbaijc dfjfjfjskdjkkdkdk kkkkkk sfmfmfjfjfj jdjjfjfjfjjfjfjfjfj jdjsjsjsjsj jsjsjsjsjsjsj sjksjsjsjsjsjsj djdfjfjfj jfjfjj k ajbajkcn ajk "
//       />
//     </View>
//   </StandardModal>
// ));
// storiesOf('TouchableImage', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardTouchableImage imgUrl="https://sc01.alicdn.com/kf/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM/223734905/HTB1rO3rKFXXXXbAXXXXq6xXFXXXM.jpg" />
//   ));
// storiesOf('Youtube Player', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardYoutubePlayer embedUrl="https://www.youtube.com/embed/sBws8MSXN7A" />
//   ));

// // StandardGrid
// storiesOf('StandardGrid', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardGrid />);
// // ----------------Molecules------------------------------
// // ----------------SecureStandardInput------------------------
// storiesOf('SecureStandardInput', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SecureStandardInput />);

// storiesOf('AvatarTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AvatarTile showStyledBorder />);

// storiesOf('ConfirmationModal', module).add('with default styles', () => (
//   <ConfirmationModal isVisible />
// ));

// storiesOf('ConfirmationModal', module).add('with default styles', () => (
//   <ConfirmationModal isVisible />
// ));
// storiesOf('LanguagesBar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <LanguagesBar selectedLanguage="kh" />);

// storiesOf('LanguageSelector', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <LanguageSelector selectedLanguage="en" />);

// storiesOf('SwitchBar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SwitchBar />);

// storiesOf('TabItem', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <TabItem text="My Account" />);

// storiesOf('SelectButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SelectButton text="Male" />);

// storiesOf('Gender', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <Gender />);

// storiesOf('SlideIndicators', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SlideIndicators count={4} current={1} />);

// storiesOf('IconTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default style', () => <IconTile />);

// storiesOf('Grid Tile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <GridTile
//       label="calltunes Service"
//       image={{
//         uri: 'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'
//       }}
//     />
//   ));

// storiesOf('IconTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default style', () => <IconTile />);
// storiesOf('CurrencyText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <CurrencyText />);

// storiesOf('CurrencyText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with value $1.522', () => <CurrencyText value={1.522} />);
// storiesOf('Youtube player card', module).add('with default styles', () => (
//   <YoutubePlayerCard
//     embedUrl="https://www.youtube.com/embed/sBws8MSXN7A"
//     description="sample desc sample desc sample desc sample desc"
//     onPressLink={() => {}}
//   />
// ));

// storiesOf('CurrencyText', module).addDecorator(getStory => <CenterView>{getStory()}</CenterView>);

// storiesOf('UserLevelTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <UserLevelTile />);

// storiesOf('UserDetailTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <UserDetailTile />);

// // StandardGrid
// storiesOf('StandardGrid', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <StandardGrid />);
// // ----------------Molecules------------------------------
// // ----------------SecureStandardInput------------------------
// storiesOf('SecureStandardInput', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SecureStandardInput />);

// storiesOf('AvatarTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AvatarTile />);

// storiesOf('ConfirmationModal', module).add('with default styles', () => (
//   <ConfirmationModal isVisible />
// ));

// storiesOf('ConfirmationModal', module).add('with default styles', () => (
//   <ConfirmationModal isVisible />
// ));
// storiesOf('LanguagesBar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <LanguagesBar selectedLanguage="kh" />);

// storiesOf('LanguageSelector', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <LanguageSelector selectedLanguage="en" />);

// storiesOf('SwitchBar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SwitchBar />);

// storiesOf('TabItem', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <TabItem text="My Account" />);

// storiesOf('SelectButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SelectButton text="Male" />);

// storiesOf('Gender', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <Gender />);

// storiesOf('SlideIndicators', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SlideIndicators count={4} current={1} />);

// storiesOf('IconTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default style', () => <IconTile />);

// storiesOf('Grid Tile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <GridTile
//       label="calltunes Service"
//       image={{
//         uri: 'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'
//       }}
//     />
//   ));

// storiesOf('IconTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default style', () => <IconTile />);
// storiesOf('CurrencyText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <CurrencyText />);

// storiesOf('CurrencyText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with value $1.522', () => <CurrencyText value={1.522} />);
// storiesOf('Youtube player card', module).add('with default styles', () => (
//   <YoutubePlayerCard
//     embedUrl="https://www.youtube.com/embed/sBws8MSXN7A"
//     description="sample desc sample desc sample desc sample desc"
//     onPressLink={() => {}}
//   />
// ));

// storiesOf('CurrencyText', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with value $1.522', () => <CurrencyText value={1.522} />);
// storiesOf('Youtube player card', module).add('with default styles', () => (
//   <YoutubePlayerCard
//     embedUrl="https://www.youtube.com/embed/sBws8MSXN7A"
//     description="sample desc sample desc sample desc sample desc"
//   />
// ));

// storiesOf('ConfirmationModal', module).add('with default styles', () => (
//   <ConfirmationModal
//     isVisible
//     message="afafa afa afafafafafafaf afafafaf afdafaaf afafafafabjkjbvjklbpj jbjibbhbjhbjhbjjkbjk  bjkbjklbjklbjkljklb"
//   />
// ));

// storiesOf('BalanceTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <BalanceTile />);

// storiesOf('BalanceTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with blue', () => (
//     <BalanceTile textColor="white" containerStyle={{ backgroundColor: '#008bc5' }} />
//   ));

// storiesOf('BalanceTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('without KjeySen', () => <BalanceTile actionButtonVisible={false} />);

// storiesOf('ActionTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <ActionTile />);

// storiesOf('MainActionTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <MainActionTile />)
//   .add('with description', () => (
//     <MainActionTile
//       subtext=""
//       iconStyle={{ width: 80, height: 80 }}
//       description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
//     />
//   ));
// storiesOf('DetailActionTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <DetailActionTile
//     showActionWithImage
//     QRvalue='test'
//       actionText="Click here to Scan QR"
//       voucherCode="HDASJDDDDAS"
//       validUntil="22/12/2019"
//       status="PENDING"
//     />
//   ));

// storiesOf('LargeActionTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <LargeActionTile />);

// storiesOf('LabelButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with vector', () => <LabelButton text="0 Members" />);

// storiesOf('LabelButton', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with image', () => (
//     <LabelButton
//       textStyle={[commonStyles.commonFontBold, { fontSize: 20 }]}
//       isVector={false}
//       icon={bigLove}
//     />
//   ));
// storiesOf('PrizeTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default style', () => (
//     <PrizeTile prizeImage={prize1}/>
//   ));

//   storiesOf('PrizeTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('without prize', () => (
//     <PrizeTile/>
//   ));
// ---------------Organisms----------------
// storiesOf('Login Form', module).add('with default styles', () => <LoginForm />);
// storiesOf('Tutorials', module).add('with default styles', () => <Tutorials />);
// storiesOf('Hot Promo List', module).add('with default styles', () => <HotPromotionList />);
// storiesOf('AvatarGrid', module).add('with default styles', () => <AvatarGrid />);
// storiesOf('VAS Grid', module).add('with default styles', () => <VASGrid services={servicesArr} />);
// // ---------------Organisms----------------
// storiesOf('Login Form', module).add('with default styles', () => <LoginForm />);
// storiesOf('Tutorials', module).add('with default styles', () => <Tutorials />);
// storiesOf('Hot Promo List', module).add('with default styles', () => <HotPromotionList />);
// storiesOf('AvatarGrid', module).add('with default styles', () => <AvatarGrid />);

// // ---------------Templates----------------
// storiesOf('Login Template', module).add('with default styles', () => <LoginTemplate />);

// storiesOf('Settings Template', module).add('with default styles', () => <SettingsTemplate />);
// storiesOf('AddonSlideTile', module).add('with default', () => (
//   <View style={{ flex: 1, padding: 10, backgroundColor: '#eaeaea' }}>
//     <AddonSlideTile title="Big Love $2 = $1200" />
//   </View>
// ));

// storiesOf('Support bar Template', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <SupportBar />);

// storiesOf('HistoryTile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <HistoryTile
//       title="title"
//       subTitle="complaint"
//       message="messagew fnsjfnsjib sfgjks jksn s g sjvnsjivn "
//       createdDate="2017-12-12"
//       isActioned
//     />
//   ));

// storiesOf('AddOnTabNavigator', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardScrollableTabView
//       tabs={[
//         {
//           tabTitle: 'Tab View #1'
//         },
//         {
//           tabTitle: 'Tab View #2'
//         },
//         {
//           tabTitle: 'Tab View #3'
//         },
//         {
//           tabTitle: 'Tab View #4'
//         },
//         {
//           tabTitle: 'Tab View #5'
//         }
//       ]}
//     />
//   ));

// storiesOf('Pie Chart Single Bar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <PieChartSingleBar />);

// storiesOf('Chart Tile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <PieChartTile isChartOnly />)
//   .add('with default styles titles', () => <PieChartTile />);

// storiesOf('Addon With Single Chart', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddonSingleChartContainer />);

// storiesOf('Addon With Two Chart Tiles', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnTwoChartContainer />);

// storiesOf('Addon With Three Chart Tiles', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnThreeChartContainer />);

// storiesOf('Addon With Four Chart Tiles', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnFourChartContainer />);

// storiesOf('Content Slider for Add Ons', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <ContentSlider dataSource={[<AddOnFourChartContainer />]} onStepCompletion={() => {}} />
//   ));

// storiesOf('BalanceAdvUsage', module).add('with default styles', () => <BalanceAdvUsage />);
// storiesOf('BalanceAdvSelection', module).add('with default styles', () => <BalanceAdvSelection />);

// storiesOf('Bar Chart Single Bar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <BarChartSingleBar />);

// storiesOf('Bar Chart Tile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <BarChartTile />);

// storiesOf('AddOn Two BarChart Container', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnTwoBarChartContainer />);

// storiesOf('Addons Slider Content Header', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddonsSliderContentHeader />);
// storiesOf('Addons Slider Content Header', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddonsSliderContentHeader />);

// storiesOf('Login Form', module).add('with default styles', () => <LoginForm />);
// storiesOf('Tutorials', module).add('with default styles', () => <Tutorials />);
// storiesOf('Hot Promo List', module).add('with default styles', () => <HotPromotionList />);
// storiesOf('AvatarGrid', module).add('with default styles', () => <AvatarGrid />);
// storiesOf('VAS Grid', module).add('with default styles', () => <VASGrid services={servicesArr} />);
// // ---------------Organisms----------------
// storiesOf('Login Form', module).add('with default styles', () => <LoginForm />);
// storiesOf('Tutorials', module).add('with default styles', () => <Tutorials />);
// storiesOf('Hot Promo List', module).add('with default styles', () => <HotPromotionList />);
// storiesOf('AvatarGrid', module).add('with default styles', () => <AvatarGrid />);
// storiesOf('Support Form', module).add('with default styles', () => <SupportForm />);
// storiesOf('Support Template', module).add('with default styles', () => <SupportTemplate />);

// storiesOf('AddOnTabNavigator', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <StandardScrollableTabView
//       tabs={[
//         {
//           tabTitle: 'Tab View #1'
//         },
//         {
//           tabTitle: 'Tab View #2'
//         },
//         {
//           tabTitle: 'Tab View #3'
//         },
//         {
//           tabTitle: 'Tab View #4'
//         },
//         {
//           tabTitle: 'Tab View #5'
//         }
//       ]}
//     />
//   ));

// storiesOf('Pie Chart Single Bar', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <PieChartSingleBar />);

// storiesOf('Chart Tile', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <PieChartTile isChartOnly />)
//   .add('with default styles titles', () => <PieChartTile />);

// storiesOf('Addon With Single Chart', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddonSingleChartContainer />);

// storiesOf('Addon With Two Chart Tiles', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnTwoChartContainer />);

// storiesOf('Addon With Three Chart Tiles', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnThreeChartContainer />);

// storiesOf('Addon With Four Chart Tiles', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => <AddOnFourChartContainer />);

// storiesOf('Content Slider for Add Ons', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with default styles', () => (
//     <ContentSlider
//       dataSource={[
//         <AddonSingleChartContainer />,
//         <AddOnTwoChartContainer />,
//         <AddOnThreeChartContainer />,
//         <AddOnFourChartContainer />
//       ]}
//       onStepCompletion={() => {}}
//     />
//   ));
//
// storiesOf('UserDetailContainer', module).add('with default styles', () => <UserDetailContainer />);
// storiesOf('GamePlay', module).add('with default styles', () => <GamePlay />);

// // ---------------Templates----------------
// storiesOf('Login Template', module).add('with default styles', () => <LoginTemplate />);

// storiesOf('Settings Template', module).add('with default styles', () => <SettingsTemplate />);

// storiesOf('TabBar Template', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)

//   .add('with default styles', () => <TabBar />);

// storiesOf('MyAccount Template', module).add('with default styles', () => <MyAccountTemplate />);

// ---------------pages----------------
// storiesOf('Login Page', module).add('with default styles', () => <LoginPage />);

// storiesOf('AnimatedInput', module)
//   .addDecorator(storyFn => <View style={{ padding: 20 }}>{storyFn()}</View>)
//   .add('with default styles', () => (
//     <FloatingLabelInput autoFocus label="Username" />
//   ));

// Atoms
// ----------------CustomButton stories------------------
// storiesOf('CustomButton', module)
// .addDecorator(storyFn => <View style={{ padding: 20 }}>{storyFn()}</View>)
// .add('with default styles', () => (
//   <CustomButton disabled={true} title={"Cancel"} />
// ));

// Atoms
// ----------------PaperBox stories------------------
// storiesOf('PaperBox Template', module)
// .addDecorator(getStory => <View style={{ paddingTop: 20 }}>{getStory()}</View>)

// .add('with default styles', () => <PaperBox><Text>Hello World</Text></PaperBox>);

// Atoms
// ----------------LinkButton stories------------------
// storiesOf('LinkButton', module)
// .addDecorator(storyFn => <View style={{ padding: 20 }}>{storyFn()}</View>)
// .add('with default styles', () => (
//   <LinkButton disabled={true} title={"Cancel"} />
// ));

// Organisms
// ----------------MainBalance stories------------------
// storiesOf('MainBalance', module)
// .addDecorator(storyFn => <View style={{ padding: 20 }}>{storyFn()}</View>)
// .add('with default styles', () => (
//   <MainBalance amount={'$2.05'}
//   subtext={`${formatValidityNewDate('2019.11.23')}`}
//   />
// ));

// Atoms
// ----------------AvatarProfile stories------------------
//   storiesOf('AvatarProfile', module)
// .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
// .add('with default styles', () => <AvatarProfile/>);

// Organisms
// ----------------ProfileHeader stories------------------
// storiesOf('ProfileHeader', module)
// .addDecorator(getStory => <View>{getStory()}</View>)
// .add('with default styles', () => <ProfileHeader firstName={'Socheata'}/>);

// Organisms
// ----------------KjeySenLoan stories------------------
// storiesOf('KjeySenLoan', module)
//   .addDecorator(storyFn => <View style={{ padding: 20 }}>{storyFn()}</View>)
//   .add('with default styles', () => (
//     <KjeySenLoan />
//   ));

storiesOf('UsageView', module)
  .addDecorator(storyFn => <View style={{ padding: 20 }}>{storyFn()}</View>)
  .add('with default styles', () => (
    <EmptyUsageTile />
  ));
