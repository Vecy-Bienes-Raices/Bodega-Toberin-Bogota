import os
from PIL import Image

def optimize_images(directory, quality=80, max_width=1600):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        # Resize if too big
                        if img.width > max_width:
                            ratio = max_width / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save with optimization
                        # If PNG, convert to optimized PNG or keep as is? 
                        # PNGs are usually huge. Let's try to save as optimized PNG or JPEG if no transparency?
                        # For safety, let's just optimize in place keeping format but reducing quality/size where possible.
                        
                        if file.lower().endswith('.png'):
                             # Check if has transparency
                            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                                img.save(file_path, optimize=True)
                            else:
                                # Convert to JPG if no alpha? No, user might want PNG. Just optimize.
                                img.save(file_path, optimize=True)
                        else:
                            img.save(file_path, quality=quality, optimize=True)
                        
                        print(f"Optimized: {file}")
                except Exception as e:
                    print(f"Error optimizing {file}: {e}")

if __name__ == "__main__":
    assets_dir = os.path.join(os.getcwd(), 'assets')
    print(f"Optimizing images in {assets_dir}...")
    optimize_images(assets_dir)
    print("Optimization complete.")
