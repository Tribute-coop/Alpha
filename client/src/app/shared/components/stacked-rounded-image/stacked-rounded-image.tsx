import React, { ImgHTMLAttributes } from 'react';

import { RoundedImage } from '../rounded-image';

import './stacked-rounded-image.scss';

export interface StackedRoundedImageProps {
  images: ImgHTMLAttributes<HTMLImageElement>[];
}

export function StackedRoundedImage(props: StackedRoundedImageProps): JSX.Element {
  return (
    <div className="stacked-rounded-image">
      { props.images.slice(0, 3).map((image, index): JSX.Element =>
        (<RoundedImage key={index} {...image} />)
      )}
    </div>
  );
}
