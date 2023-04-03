import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CancelIcon = ({color}: {color: string}) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export default CancelIcon;
