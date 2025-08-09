import MainGalleryPage from './components/mainGallery';
import { Photos, MainGalleryPageProps } from './types/photo';
import fetchPhotos from "@/app/gallery/services/photoApi";

export default async function GalleryPage() {

    const photos: Photos | undefined = await fetchPhotos();

    const props: MainGalleryPageProps = { photos: photos || [] }

    console.log('photos:', photos);

    return (
        <div>
            <MainGalleryPage {...props} />
        </div>
    );
}
