from PIL import Image
import numpy as np

def process_logo(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)

        # Conditions
        # White (or near white) -> Transparent
        # R, G, B > 200
        white_areas = (data[:,:,0] > 200) & (data[:,:,1] > 200) & (data[:,:,2] > 200)
        data[white_areas] = [0, 0, 0, 0] # Set to fully transparent

        # Black (or near black) -> White
        # R, G, B < 150 and Alpha > 0 (Increased threshold to catch dark grey)
        black_areas = (data[:,:,0] < 150) & (data[:,:,1] < 150) & (data[:,:,2] < 150) & (data[:,:,3] > 0)
        data[black_areas] = [255, 255, 255, 255] # Set to white, full opacity

        new_img = Image.fromarray(data)
        new_img.save(output_path)
        print(f"Successfully saved processed logo to {output_path}")

    except Exception as e:
        print(f"Error processing logo: {e}")

if __name__ == "__main__":
    process_logo("app/icon.png", "app/icon-white.png")
