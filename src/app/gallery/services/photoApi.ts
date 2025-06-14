import {createClient} from '@supabase/supabase-js';

export default async function fetchPhotos(): Promise<{ publicUrl: string }[] | undefined> {
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

    if (error) {
        console.error('Error fetching images:', error);
    } else {
        return data?.map(file => {
            return supabase.storage.from(bucketName).getPublicUrl(file.name).data;
        }) || [];
    }}