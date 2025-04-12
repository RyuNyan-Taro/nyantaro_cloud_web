'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type Props = {
    href: string
    src: string
    alt: string
    size?: number
    className?: string
}

export const RoundImageButton: React.FC<Props> = ({
    href,
    src,
    alt,
    size = 80,
    className
}) => {
    return (
        <Link href={href}
            className={cn(
                'relative inline-block rounded-full overflow-hidden transition-transform duration-200 hover:scale-105 hover:ring-2 hover:ring-primary',
                className
            )}
        style={{ width: size, height: size }}
        >
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                className="object-cover w-full h-full"
            />
            {alt && (
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold bg-black/40">
                    {alt}
                </span>
            )}
        </Link>
    )
}
