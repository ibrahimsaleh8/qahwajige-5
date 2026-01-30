import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-main-color mb-4">
            من ذكريات مناسباتنا
          </h2>
          <div className="w-24 h-1 bg-main-color mx-auto rounded-full mb-6" />
          <p className="text-low-color max-w-2xl mx-auto text-lg">
            لقطات حية من فعاليات ومناسبات قمنا بخدمتها في الرياض
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group">
              <Image
                src={image.url}
                alt={image.alt ?? "Gallery Image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-main-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
