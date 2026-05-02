'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { MainGalleryPageProps } from "@/app/gallery/types/photo";

type ImageWithCategories = {
    id: string
    path: string
    categories: string[]
}

type Variant = {
    pebbleShape: string
    aspect: string
    border: string
    imgFilter: string
    labelBg: string
    labelText: string
    cardRotate: string
    hoverRotate: string
}

const VARIANTS: Variant[] = [
    {
        pebbleShape: 'pebble-shape-1',
        aspect: 'aspect-[4/5]',
        border: 'border-4 border-outline-variant',
        imgFilter: 'sepia-[.3] hue-rotate-15',
        labelBg: 'bg-primary-container',
        labelText: 'text-primary-fixed',
        cardRotate: 'rotate-1',
        hoverRotate: 'hover:-rotate-2',
    },
    {
        pebbleShape: 'pebble-shape-2',
        aspect: 'aspect-square',
        border: 'border-2 border-secondary/30',
        imgFilter: 'contrast-125 saturate-50',
        labelBg: 'bg-secondary-container',
        labelText: 'text-secondary-fixed',
        cardRotate: '-rotate-1',
        hoverRotate: 'hover:rotate-1',
    },
    {
        pebbleShape: 'pebble-shape-3',
        aspect: 'aspect-[3/4]',
        border: 'border-[3px] border-tertiary-container',
        imgFilter: 'grayscale-[0.4]',
        labelBg: 'bg-tertiary-container',
        labelText: 'text-tertiary-fixed',
        cardRotate: 'rotate-2',
        hoverRotate: 'hover:rotate-3',
    },
]

export default function MainGalleryPage({ photos, categories }: MainGalleryPageProps) {
    const [images, setImages] = useState<ImageWithCategories[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [allCategories, setAllCategories] = useState<string[]>([])

    useEffect(() => {
        const loadData = async () => {
            const supabaseImages: ImageWithCategories[] = photos.map((photo, index) => ({
                id: index.toString(),
                path: photo.publicUrl,
                categories: photo.categories,
            }))
            setImages(supabaseImages)
            setAllCategories(Array.from(categories))
        }

        loadData().catch((error) => {
            console.error('Failed to load data:', error)
        })
    }, [photos, categories])

    const filtered = selectedCategory
        ? images.filter(img => img.categories.includes(selectedCategory))
        : images

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-high via-background to-surface-container-lowest px-4 md:px-wild-lg pt-wild-md pb-wild-xl">
            {/* Texture overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 texture-noise" />

            {/* Decorative blobs */}
            <div className="absolute top-[10%] right-[40%] w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-[40%] left-[10%] w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-[20%] right-[20%] w-40 h-40 bg-tertiary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Header */}
            <header className="mb-wild-lg relative z-10">
                <h2 className="font-headline text-headline-xl text-primary-fixed mix-blend-screen opacity-90 drop-shadow-[0_4px_20px_rgba(188,203,177,0.15)] -rotate-2">
                    Specimen Gallery
                </h2>
                <div className="w-24 h-1 bg-tertiary-fixed mt-4 rounded-full opacity-60 ml-wild-sm rotate-1" />
            </header>

            {/* Category filter chips */}
            <div className="flex gap-2 flex-wrap mb-wild-md relative z-10">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={`font-body text-label-sm uppercase tracking-widest px-3 py-1 rounded-full border cursor-pointer transition-all ${
                        !selectedCategory
                            ? 'bg-primary-container text-primary-fixed border-primary'
                            : 'bg-surface-container text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
                    }`}
                >
                    all
                </button>
                {allCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-body text-label-sm uppercase tracking-widest px-3 py-1 rounded-full border cursor-pointer transition-all ${
                            selectedCategory === cat
                                ? 'bg-primary-container text-primary-fixed border-primary'
                                : 'bg-surface-container text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Gallery masonry */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-wild-sm relative z-10">
                {filtered.map((img, i) => (
                    <SpecimenCard key={img.id} img={img} index={i} />
                ))}
            </div>
        </div>
    )
}

function SpecimenCard({ img, index }: { img: ImageWithCategories; index: number }) {
    const v = VARIANTS[index % 3]
    const label = img.categories[0] ?? 'SPECIMEN'

    return (
        <article className={`break-inside-avoid mb-wild-sm transform ${v.cardRotate} hover:scale-105 ${v.hoverRotate} transition-transform duration-500`}>
            <div className={`relative w-full ${v.aspect} ${v.pebbleShape} overflow-hidden ambient-glow bg-surface-container-high ${v.border} p-2 group`}>
                <Image
                    src={img.path || '/placeholder.jpg'}
                    alt={label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${v.pebbleShape} opacity-80 group-hover:opacity-100 transition-opacity duration-500 ${v.imgFilter}`}
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary/20 rounded-full blur-xl pointer-events-none" />
            </div>
            <div className={`mt-wild-xs ml-wild-sm ${v.labelBg} inline-block px-4 py-1 torn-edge shadow-lg`}>
                <span className={`font-body text-label-sm ${v.labelText} uppercase tracking-widest`}>
                    {label}
                </span>
            </div>
        </article>
    )
}
