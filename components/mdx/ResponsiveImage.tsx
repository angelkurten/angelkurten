import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ResponsiveImage({ src, alt, width = 800, height = 400 }: ResponsiveImageProps) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      {alt && <figcaption className="mt-2 text-center text-sm text-neutral-500">{alt}</figcaption>}
    </figure>
  );
}
