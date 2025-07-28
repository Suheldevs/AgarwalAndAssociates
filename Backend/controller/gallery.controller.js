import Gallery from "../model/gallery.model.js";

//    Create a new gallery entry
export const createGallery = async (req, res) => {
    try {
        const { imageUrl, type } = req.body;
        console.log(req.body)
        if (!imageUrl || imageUrl.trim() === '') {
            return res.status(400).json({ message: "Image URL is required." });
        }
        const newGallery = new Gallery(req.body);
        await newGallery.save();
        res.status(201).json({ message: "Gallery item added successfully!", gallery: newGallery });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong.", error: error.message });
    }
};

//    Get all gallery images
export const getAllGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find().sort({ createdAt: -1 });
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong.", error: error.message });
    }
};

//    Get a single gallery item by ID
export const getGalleryById = async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: "Gallery item not found." });
        }
        res.status(200).json(galleryItem);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong.", error: error.message });
    }
};

//    Update a gallery item
export const updateGallery = async (req, res) => {
    try {
        const { type, imageUrl } = req.body;

        if (!type || !imageUrl) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const updatedGallery = await Gallery.findByIdAndUpdate(
            req.params.id,
            { type, imageUrl },
            { new: true }
        );

        if (!updatedGallery) {
            return res.status(404).json({ message: "Gallery item not found." });
        }

        res.status(200).json({ message: "Gallery item updated successfully!", gallery: updatedGallery });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong.", error: error.message });
    }
};

//    Delete a gallery item
export const deleteGallery = async (req, res) => {
    try {
        const deletedGallery = await Gallery.findByIdAndDelete(req.params.id);
        if (!deletedGallery) {
            return res.status(404).json({ message: "Gallery item not found." });
        }
        res.status(200).json({ message: "Gallery item deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong.", error: error.message });
    }
};