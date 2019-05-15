import React from 'react';

import { RoundedImageProps, RoundedImage } from '../rounded-image/rounded-image';

import './stacked-rounded-image.scss';

export interface StackedRoundedImageProps {
  images: RoundedImageProps[];
}

export function StackedRoundedImage(props: StackedRoundedImageProps): JSX.Element {
  return (
    <div className="stacked-rounded-image">
      { props.images.slice(0, 3).map((image, index): JSX.Element =>
        (<RoundedImage key={index} src={image.src} alt={image.alt} />)
      )}
    </div>
  );
}
