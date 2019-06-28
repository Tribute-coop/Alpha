import React from 'react';

import './rounded-image.scss';

export interface RoundedImageProps {
  src: string;
  alt: string;
}

export function RoundedImage(props: RoundedImageProps): JSX.Element {
  return (
    <img src={props.src} alt={props.alt} className="rounded-image rounded-circle"/>
  );
}