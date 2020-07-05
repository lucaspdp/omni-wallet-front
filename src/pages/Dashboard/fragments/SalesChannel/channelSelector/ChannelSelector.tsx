import React, { useState } from 'react';
import { ChannelSelectorSelect } from './ChannelSelectorStyles';

export type ChannelSelectorProps = {
  onChange?: (selectedValues: string[]) => void;
};

export default function ChannelSelector(props: ChannelSelectorProps) {
  const [channels, setChannels] = useState([
    {
      value: 'iFood',
      label: 'iFood',
    },
    {
      value: 'b2w',
      label: 'B2W',
    },
    {
      value: 'viavarejo',
      label: 'Via Varejo',
    },
  ]);

  return (
    <ChannelSelectorSelect
      isMulti
      width="100%"
      height="100%"
      onChange={(values) => {
        let valuesStr: string[] = [];
        if (values != null) values.forEach((value) => valuesStr.push(value.value));
        if (props.onChange) props.onChange(valuesStr);
      }}
      options={channels}
      theme={(theme: any) => ({
        ...theme,
        borderRadius: 2,
        colors: {
          ...theme.colors,
          primary: 'var(--primary-color)',
          primary75: 'var(--primary-color)',
          primary50: 'var(--primary-color)',
          primary25: 'var(--primary-color-25)',
        },
      })}
    ></ChannelSelectorSelect>
  );
}
