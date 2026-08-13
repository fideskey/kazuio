import Image from 'next/image'

export function Logo({
  className,
  markClassName,
  wordClassName,
  onDark,
}: {
  className?: string
  markClassName?: string
  wordClassName?: string
  onDark?: boolean
}) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <span className={onDark ? 'inline-flex items-center justify-center rounded-lg bg-cream p-1.5' : ''}>
        <Image
          src="/brand/kazuio-mark.png"
          alt=""
          width={290}
          height={442}
          priority
          className={`h-11 w-auto object-contain ${markClassName ?? ''}`}
          aria-hidden="true"
        />
      </span>
      <span
        className={`font-sans text-[1.18rem] font-medium tracking-[0.38em] ${onDark ? 'text-cream' : 'text-navy'} ${wordClassName ?? ''}`}
      >
        KAZUIO
      </span>
    </div>
  )
}
