'use server'

import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

import Topic from "../../../models/topics";


export async function POST(request){
    const {title,description} =await request.json();
    await connectMongoDB();

    await Topic.create({title,description});
    return NextResponse.json({message:"Topic Created"}, {status:201})
}

export async function GET(request){
   
    await connectMongoDB();
    const topics =await Topic.find();
    return NextResponse.json({topics});
}

export async function  DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic deleted" },{status:200});
}