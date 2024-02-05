import json
import os
import pickle

# gallery_data is a list
# its master-file is saved as a pickle called
# "gallery_data.pickle"
# the website loads the current file and converts it to JS data
# the gallery_data update script loads the pickle and makes changes

replace_kueche = lambda cc: cc.replace("kueche", "Küche").replace("Kueche", "Küche")


# load the current gallery data
def load_gallery_data():
    try:
        with open("gallery_data.pickle", "rb") as p:
            gallery_data = pickle.load(p)
    except FileNotFoundError:
        gallery_data = []
    return gallery_data


# save the current gallery data
def save_gallery_data(data):
    with open("gallery_data.pickle", "wb") as p:
        pickle.dump(data, p)


def get_gallery_image_paths():
    # Prepare data
    root = "./knives"
    images_location_absolute = f"{root}/images/gallery"
    images_location_relative = "images/gallery"

    temp_gallery_data = [
        {
            "category": dir.lower(),
            "category_name": replace_kueche(dir.capitalize()),
            "paths": [f'{images_location_relative}/{dir.lower()}/{path}' for path in os.listdir(f"{images_location_absolute}/{dir}") if "Store" not in path]
            } for dir in os.listdir(images_location_absolute) if "Store" not in dir
    ]
    return temp_gallery_data


def update_gallery_data():
    gallery_data = load_gallery_data()
    temp_gallery_data = get_gallery_image_paths()

    # update the paths
    for temp_category in temp_gallery_data:
        skip = False
        for category in gallery_data:
            if temp_category["category"] == category["category"]:
                category["paths"] = temp_category["paths"]
                category["category_name"] = temp_category["category_name"]
                skip = True
        # falls die Kategorie neu ist ...
        if not skip:
            new_category = temp_category["category"]
            gallery_data.append({
                "category": new_category, 
                "category_name": temp_category["category_name"],
                "paths": temp_category["paths"]
                })
    
    



    save_gallery_data(gallery_data)


def save_dict_data_to_js(
        data = None,
        output_path = "./knives/js/gallery_data.js",
        data_name = "gallery_data"
        ):
    
    # Turn the data into a JS conform object 
    # convert the data to string
    # add an initializer to the beginning
    data = f"{data_name} = " + str(data)
    # remove the outside quotes
    data = data.strip("\"")


    with open(output_path, "w") as f:
        f.write(data)


print(load_gallery_data())