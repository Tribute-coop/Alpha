import React, { ImgHTMLAttributes } from 'react';

import './rounded-image.scss';

export function RoundedImage(props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  return (
    <img src={props.src} alt={props.alt} className="rounded-image rounded-circle" />
  );
}