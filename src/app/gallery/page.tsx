'use client'

import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Image = {
    id: string
    path: string
}

type Category = {
    id: string
    name: string
}

type ImageCategory = {
    image_id: string
    category_id: string
}

type ImageWithCategories = {
    id: string
    path: string
    categories: string[]
}

export default function GalleryPage() {
    const [images, setImages] = useState<ImageWithCategories[]>([])
    const [allCategories, setAllCategories] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    useEffect(() => {
        const loadData = async () => {
            const [imagesCsv, categoriesCsv, imageCatsCsv] = await Promise.all([
                fetch('/data/images.csv').then((res) => res.text()),
                fetch('/data/categories.csv').then((res) => res.text()),
                fetch('/data/image_categories.csv').then((res) => res.text())
            ])

            const images = Papa.parse<Image>(imagesCsv, { header: true }).data
            const categories = Papa.parse<Category>(categoriesCsv, { header: true }).data
            const imageCats = Papa.parse<ImageCategory>(imageCatsCsv, { header: true }).data

            const categoryMap = new Map(categories.map((c: Category) => [c.id, c.name]))

            const enrichedImages: ImageWithCategories[] = images.map((img: Image) => {
                const related = imageCats.filter((ic: ImageCategory) => ic.image_id === img.id)
                const categoryNames = related.map((ic: ImageCategory) => categoryMap.get(ic.category_id)).filter((name: string | null): name is string => name !== undefined)
                return {
                    id: img.id,
                    path: `/${img.path}`,
                    categories: categoryNames,
                }
            })

            const uniqueCategories: string[] = Array.from(
                new Set(
                    categories
                        .filter((c): c is Category =>
                            c !== null &&
                            typeof c === 'object' &&
                            'name' in c &&
                            typeof c.name === 'string'
                        )
                        .map((c) => c.name)
                )
            )

            console.log('Categories:', categories)
            console.log('Unique Categories:', uniqueCategories)
            setImages(enrichedImages)
            setAllCategories(uniqueCategories)

        }

        loadData()
    }, [])

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
                    <Card key={img.id}>
                        <CardContent className="p-2">
                            <img src={img.path} alt="" className="w-full h-auto rounded-md" />
                            <div className="text-xs text-muted-foreground mt-2">
                                {img.categories.join(', ')}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}