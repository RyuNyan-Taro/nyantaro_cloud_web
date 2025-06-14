import MainGalleryPage from './components/mainGallery'
import fetchPhotos from "@/app/gallery/services/photoApi";

export default async function GalleryPage() {

    const photos = await fetchPhotos();
    console.log(photos);

    return (
        <div>
            <MainGalleryPage />
        </div>
    );
}