import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topics';
import { NextResponse } from 'next/server';
import React from 'react'

export async function PUT(request,{params}) {
 const {id} =params;
 const {newTitle: title, newDescription :description} =await request.json();
 await connectMongoDB();
 await Topic.findByIdAndUpdate(id, {title,description});
 return NextResponse.json({message:"Topic updated"},{status:200});
}



export async function GET(request,{params}) {
    const {id} =params;
   
    await connectMongoDB();
    const topic = await Topic.findOne({_id:id});
    return NextResponse.json({message:"Topic updated"},{status:200});
   }