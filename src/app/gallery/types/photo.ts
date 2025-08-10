export type Categories = string[];

export type Url = string;

export type Photo = {
    publicUrl: Url;
    categories: Categories;
}

export type Photos = Photo[];

export type MainGalleryPageProps = {
    photos: Photos,
    categories: Categories,
}
