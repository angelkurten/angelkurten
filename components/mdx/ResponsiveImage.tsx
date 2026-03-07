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
        className="h-auto max-w-full rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 768px"
      />
      {alt && <figcaption className="mt-2 text-center text-sm text-neutral-500">{alt}</figcaption>}
    </figure>
  );
}
