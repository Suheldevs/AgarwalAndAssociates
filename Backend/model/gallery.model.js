import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
    {
        type: { type: String,  default:'photo', required: true},
        imageUrl: { type: String, required: true,unique:true },
    },
    { timestamps: true } 
);

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;