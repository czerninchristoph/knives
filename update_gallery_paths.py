import gallery_data

gallery_data.update_gallery_data()
gallery_data.save_dict_data_to_js(
    gallery_data.load_gallery_data(),
    output_path = "./knives/js/gallery_data.js",
    data_name = "gallery_data"
)
