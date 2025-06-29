'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type ImageWithCategories = {
    id: string
    path: string
    categories: string[]
}

type SupabasePhoto = {
    publicUrl: string
}

interface MainGalleryPageProps {
    photos: SupabasePhoto[]
}

const allCategories = ['cat', 'dog', 'bird', 'fish', 'other']

export default function MainGalleryPage({ photos }: MainGalleryPageProps) {
    const [images, setImages] = useState<ImageWithCategories[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    useEffect(() => {
        const loadData = async () => {
            const supabaseImages: ImageWithCategories[] = photos.map((photo, index) => {
                return {
                    id: index.toString(),
                    path: photo.publicUrl,
                    categories: []  // todo: add categories in the MainGalleryPageProps
                }
            });

            setImages(supabaseImages);
        };

        loadData().catch((error) => {
            console.error('Failed to load data:', error);
        });
    }, [photos])

    const filtered = selectedCategory
        ? images.filter(img => img.categories.includes(selectedCategory))
        : images

    return (
        <div className="p-6 space-y-4">
            <div className="flex gap-2 flex-wrap">
                <Button
                    variant={!selectedCategory ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(null)}
                >
                    all
                </Button>
                {allCategories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selectedCategory === cat ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filtered.map((img) => (
                    PhotoCard(img)
                ))}
            </div>
        </div>
    )
}

function PhotoCard(img: ImageWithCategories) {
    return (
        <div>
            <Card key={img.id}>
                <CardContent className="p-2">
                    <Image
                        src={img.path || '/placeholder.jpg'} // フォールバック画像を設定
                        alt=""
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-md"
                    />
                    <div className="text-xs text-muted-foreground mt-2">
                        {img.categories.join(', ')}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
