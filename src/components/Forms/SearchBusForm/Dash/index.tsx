import { StyleProp, ViewStyle, View } from 'react-native';
import { COLORS } from '../../../../constants';

type DashProps = {
  dashStyles?: StyleProp<ViewStyle>;
};

const Dash: React.FC<DashProps> = ({ dashStyles }) => (
  <View
    style={[
      {
        width: 2,
        height: 7,
        backgroundColor: COLORS.black,
        alignSelf: 'center',
      },
      dashStyles,
    ]}
  />
);

export default Dash;
