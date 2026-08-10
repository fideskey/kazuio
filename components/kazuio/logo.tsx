import Image from 'next/image'

export function Logo({
  className,
  markClassName,
  wordClassName,
}: {
  className?: string
  markClassName?: string
  wordClassName?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <Image
        src="/brand/kazuio-mark.png"
        alt=""
        width={420}
        height={410}
        priority
        className={`h-11 w-auto object-contain ${markClassName ?? ''}`}
        aria-hidden="true"
      />
      <span
        className={`font-sans text-[1.18rem] font-medium tracking-[0.38em] text-navy ${wordClassName ?? ''}`}
      >
        KAZUIO
      </span>
    </div>
  )
}
