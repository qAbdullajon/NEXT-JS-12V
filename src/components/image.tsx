// CustomImage.tsx
"use client";

import { ProductType } from "@/interface";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setLoading] = useState(true);

  return fill ? (
    <Image
      src={product.image}
      alt={product.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      alt={product.title}
      width={400}
      height={1000}
      style={{ width: "auto", height: "auto" }}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default CustomImage;
