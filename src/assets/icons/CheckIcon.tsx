import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = ({color}: {color: string}) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M20 6 9 17l-5-5" />
  </Svg>
);

export default CheckIcon;
