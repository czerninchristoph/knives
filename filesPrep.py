"""
Nikolaus Czernin
There are some folders in the images/gallery folder.
Each of them is a category for the images included.
The host can put new images into one of these folders. 
If he then runs this script, the filenames and categories will automatically be 
added to the website. 
Then the webcontent just needs to be uploaded to the server.
"""

import os

def main():
    # empty string, this will be the final output
    out_js = ""
    root = "./knives"
    images_location_absolute = f"{root}/images/gallery"
    images_location_relative = f"images/gallery"
    # list all directorys with categories (excl DS_Store)
    dirs = [d for d in os.listdir(images_location_absolute) if "DS_Store" not in d]
    print("Folgende Kategorien haben wir")
    for d in dirs: # for every category directory
        # get the contained filenames
        files = os.listdir(f"{images_location_absolute}/{d}")
        print(f"{d}: {len(files)} Bilder")
        files = [f for f in files if "DS_Store" not in f]
        files = [f"{images_location_relative}/{d}/{f}" for f in files]
        # turn the list of filenames into a constant 
        files_js = f"const {d} = {files}\n"
        out_js += files_js # store it in the output string

    # make two more constants:

    # one is an array of all filename arrays
    merger_js = f"const categories = [{dirs}]\n".replace("[[", "[").replace("]]", "]").replace("\'", "")
    out_js += merger_js
    # the other is an array of all category names (for the menu)
    names_js = f"const categories_names = [{dirs}]\n".replace("[[", "[").replace("]]", "]")
    out_js += names_js

    # save the output
    with open(f"{root}/js/gallery_meta.js", "w") as js:
        js.write(out_js)
    print("File prep successful")

if __name__ == "__main__":
    main()

