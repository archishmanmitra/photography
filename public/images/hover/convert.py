from PIL import Image
import os
import math

def convert_webp_to_jpg(delete=False):
    for filename in os.listdir('./public/images/hover'):
        if filename.endswith('.webp'):
            im = Image.open(f'./public/images/hover/{filename}')
            x, y = im.size
            x2, y2 = math.floor(x/3), math.floor(y/3 )
            im= im.resize((x2, y2), Image.LANCZOS)
            im.save(f'./public/images/hover/{filename.split('.')[0]}.webp', 'webp')
            print(filename.split('.')[0])
            if delete: os.remove(f'./public/images/hover/{filename}')

convert_webp_to_jpg()
