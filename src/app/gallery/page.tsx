import MainGalleryPage from './components/mainGallery';
import { Photos, Categories, MainGalleryPageProps } from './types/photo';
import { fetchPhotos, fetchCategories } from "@/app/gallery/services/photoApi";

export default async function GalleryPage() {

    const photos: Photos = await fetchPhotos();
    const categories: Categories = await fetchCategories();

    const props: MainGalleryPageProps = { photos: photos, categories: categories }

    return (
        <div>
            <MainGalleryPage {...props} />
        </div>
    );
}
