import {createClient, PostgrestSingleResponse} from '@supabase/supabase-js';
import * as photo from '../types/photo'

type PhotoCategory = {
    id: number;
    created_at: string;
    category: string;
}

type CategoryTable = PostgrestSingleResponse<PhotoCategory[]>

function getSupabaseClient() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    return createClient(
        supabaseUrl || '',
        supabaseKey || ''
    );
}

export async function fetchPhotos(): Promise<photo.Photos> {

    const response = await fetch(process.env.API_ROOT_URL + '/api/photos', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.API_TOKEN,
        }
    });
    if (!response.ok) {
        console.error('Error fetching images:', response.status, response.statusText);
        return [];
    }

    return await response.json();
}

export async function fetchCategories(): Promise<photo.Categories> {

    const supabase = getSupabaseClient();

    const table_data: CategoryTable = await supabase
        .from('photo_category')
        .select(`*`)

    if (table_data.error) {
        console.error('Error fetching images:', table_data.error);
        return [];
    }
    return table_data.data?.map(data => data.category) ?? [];
}