import React from 'react';
import { forwardRef, ImgHTMLAttributes, LegacyRef } from 'react';
import { cx, css } from '@emotion/css';

type SectionStyle = {
  display?: string;
  margin?: string;
  padding?: string;
};

type ContainerStyle = {
  width?: string;
  margin?: string;
  textAlign?: string;
};

type Media = {
  marginTop?: string;
  maxWidth?: string;
};

type ImageStyle = {
  marginTop?: string;
  marginBottom?: string;
  maxWidth?: string;
  media600Style?: Media | undefined;
  media300Style?: Media | undefined;
};

type Style = {
  sectionClass?: string;
  divClass?: string;
  imgClass?: string;
  image: string;
  styleSection?: SectionStyle;
  styleContainer?: ContainerStyle;
  styleImage?: ImageStyle;
};

export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & Style;

const sectionStyles = (styles: SectionStyle) => css`
  display: ${styles.display || 'flex'};
  margin: ${styles.margin || '0'};
  padding: ${styles.padding || '1em'};
`;

const containerStyles = (styles: ContainerStyle) => css`
  width: ${styles.width || '100%'};
  margin: ${styles.margin || '0 auto'};
  text-align: ${styles.textAlign || 'center'};
`;

const imgStayle = (styles: ImageStyle) => css`
  margin-top: ${styles.marginTop || '10px'};
  margin-bottom: ${styles.marginBottom || '10px'};
  max-width: ${styles.maxWidth || '150px'};

  @media (max-width: 600px) {
    margin-top: ${styles.media600Style?.marginTop || '5px'};
    max-width: ${styles.media600Style?.maxWidth || '130px'};
  }

  @media (max-width: 300px) {
    max-width: ${styles.media300Style?.maxWidth || '120px'};
  }
`;

export const LogoContainer = forwardRef(
  (props: LogoProps, ref: LegacyRef<HTMLImageElement> | null): JSX.Element => {
    const {
      image,
      sectionClass = '',
      divClass = '',
      imgClass = '',
      styleSection = {},
      styleContainer = {},
      styleImage = {},
      ...imgProps
    }: LogoProps = props;
    return (
      <section className={cx(sectionStyles(styleSection), sectionClass)}>
        <div className={cx(containerStyles(styleContainer), divClass)}>
          <img
            src={image}
            {...imgProps}
            className={cx(imgStayle(styleImage), imgClass)}
            ref={ref}
            alt="logo"
            role="logo"
          />
        </div>
      </section>
    );
  }
);
