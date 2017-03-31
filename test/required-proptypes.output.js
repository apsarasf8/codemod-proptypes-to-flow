/* @flow */
import React, { PropTypes } from 'react';

export type Props = {
  requiredArray: Array<any>,
  requiredBool: boolean,
  requiredFunc: Function,
  requiredNumber: number,
  requiredObject: Object,
  requiredString: string,
  requiredNode: number | string | React.Element | Array<any>,
  requiredElement: React.Element,
  requiredMessage: Message,
  requiredEnum: 'News' | 'Photos',
  requiredUnion: string | number | Message,
  requiredArrayOf: Array<number>,
  requiredObjectOf: Object<number>,
  requiredObjectWithShape: {
    color: string,
    fontSize: number,
  },
};

export function Button(props: Props) {
  return (
    <button>
      {React.Children.toArray(children)}
    </button>
  );
}
