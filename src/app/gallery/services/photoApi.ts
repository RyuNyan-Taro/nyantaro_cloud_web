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

    const table_data = await supabase
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
        return table_data.data?.map(data => {
            const publicUrl: string = supabaseUrl + '/' + process.env.SUPABASE_PHOTO_DIRECTORY + '/' + data.name;
            return { publicUrl };
        }) || [];
    }}