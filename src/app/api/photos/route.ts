import { NextRequest, NextResponse } from 'next/server';
import { createClient, PostgrestSingleResponse } from '@supabase/supabase-js';
import * as photo from "@/app/gallery/types/photo";

function getSupabaseClient() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    return createClient(
        supabaseUrl || '',
        supabaseKey || ''
    );
}

type PhotoContent = {
    photo_id: number;
    name: string;
    photo_url_category_relation: {
        photo_category: {
            category: string;
        };
    }[];
}

export type PhotoData = {
    id: number;
    publicUrl: photo.Url;
    categories: photo.Categories;
}

export type PhotoDataResponse = PhotoData[];

type PhotoTable = PostgrestSingleResponse<PhotoContent[]>

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
        return NextResponse.json({ error: 'there is no token' }, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');
    if (token != process.env.API_TOKEN) {
        return NextResponse.json({ error: '無効なトークン' }, { status: 401 });
    }

    const supabase = getSupabaseClient();

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
    `);

    if (table_data.error) {
        return NextResponse.json({ error: table_data.error.message }, { status: 500 });
    }

    const data: PhotoDataResponse = table_data.data?.map((data: PhotoContent) => {
        const id: number = data.photo_id;
        const publicUrl: photo.Url = process.env.SUPABASE_URL + '/' + process.env.SUPABASE_PHOTO_DIRECTORY + '/' + data.name;
        const categories: photo.Categories = data.photo_url_category_relation.map(category => category.photo_category.category);

        return { id, publicUrl, categories };
    }) || [];

    return NextResponse.json(data);
}