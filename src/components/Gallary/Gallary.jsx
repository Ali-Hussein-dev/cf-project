"use client";
import Image from "next/image";
import css from "./Gallary.module.scss";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

//======================================
export const ImageCard = ({ src, alt, name, description, w, h }) => {
  return (
    <div className={css.card}>
      <Image
        // sizes="100vw"
        width={w}
        height={h}
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMqgcAASkA0zyeH6YAAAAASUVORK5CYII="
        }
        className={css.img}
        quality={70}
      />
      <div className={css.body}>
        <h3 className={css.title}>{name}</h3>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
};
//======================================
export const Gallary = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    unsplash.photos.list({ page: 5 }).then((result) => {
      if (result.errors) {
        console.log("error occurred: ", result.errors[0]);
      } else {
        setImages(result.response.results);
      }
    });
  }, []);
  return (
    <section className={css.gallary}>
      <div className={css["images-wrapper"]}>
        {images?.map((image, i) => (
          <ImageCard
            key={i}
            src={image.urls.regular}
            description={image.description}
            alt={image.title}
            name={image?.user?.name}
            w={image.width}
            h={image.height}
          />
        ))}
      </div>
    </section>
  );
};


