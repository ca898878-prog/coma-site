import Image from "next/image";


export default function TopBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="relative h-[92px] sm:h-[120px] md:h-[140px]">
        <Image
          src="/images/coma-banner.png"
          alt="Central Ohio Malayalee Association banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay to make it look cleaner + readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/45" />

        {/* Content */}
      
      </div>
    </div>
  );
}

