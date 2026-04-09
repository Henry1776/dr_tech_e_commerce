import xml.etree.ElementTree as ET
import base64
from io import BytesIO
from PIL import Image
import colorsys

def get_vibrant_colors():
    tree = ET.parse('/home/henry/sitios/dr_tech/imagenes/logo.svg')
    root = tree.getroot()
    # Find the image tag
    for elem in root.iter():
        if elem.tag.endswith('image'):
            href = elem.attrib.get('{http://www.w3.org/1999/xlink}href', '')
            if href.startswith('data:image/png;base64,'):
                data = href.split(',')[1]
                img_data = base64.b64decode(data)
                img = Image.open(BytesIO(img_data)).convert('RGB')
                
                # Resize
                img = img.resize((100, 100))
                colors = img.getcolors(10000)
                
                vibrant_colors = []
                for count, color in colors:
                    # Convert to HSV to check for color and brightness
                    # color is RGB 0-255
                    hsv = colorsys.rgb_to_hsv(color[0]/255.0, color[1]/255.0, color[2]/255.0)
                    if hsv[1] > 0.2 and hsv[2] > 0.2: # saturation and value threshold to avoid blacks/whites/grays
                        vibrant_colors.append((count, color, hsv))
                
                vibrant_colors.sort(key=lambda x: x[0], reverse=True)
                
                print("Top vibrant colors:")
                for count, color, hsv in vibrant_colors[:15]:
                    hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
                    print(f"{hex_color} (count: {count}) RGB: {color[0]}, {color[1]}, {color[2]}")
                return
    print("Image not found")
    
get_vibrant_colors()
