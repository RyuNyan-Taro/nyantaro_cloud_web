import {createClient, PostgrestSingleResponse} from '@supabase/supabase-js';
import * as photo from '../types/photo'


type PhotoContent = {
    photo_id: number;
    name: string;
    photo_url_category_relation: {
        photo_category: {
            category: string;
        };
    }[];
}

type PhotoTable = PostgrestSingleResponse<PhotoContent[]>

export default async function fetchPhotos(): Promise<photo.Photos | undefined> {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const bucketName = 'photos';

    const supabase = createClient(
        supabaseUrl || '',
        supabaseKey || ''
    );

    const { data, error } = await supabase
        .storage
        .from(bucketName).list();

    const table_data: PhotoTable = await supabase
        .from('photo_name')
        .select(`
            photo_id:id,
            name,
            photo_url_category_relation!inner(
              photo_category(
                category
              )
            )
        `)

    console.log('data:', data, error)
    console.log('table:', table_data)

    if (error) {
        console.error('Error fetching images:', error);
    } else {
        return table_data.data?.map((data: PhotoContent) => {
            const publicUrl: photo.Url = supabaseUrl + '/' + process.env.SUPABASE_PHOTO_DIRECTORY + '/' + data.name;
            const categories: photo.Categories = data.photo_url_category_relation.map(category => category.photo_category.category);

            return { publicUrl, categories };
        }) || [];
    }}