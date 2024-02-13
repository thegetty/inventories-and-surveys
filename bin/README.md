The color profiles in this directory are for use with Imagemagick. The following commands are run after running `quire build` and before `quire pdf --lib prince` when generating a PDF file destined for professional printing. This ensures the images have a proper color profile.

```
magick mogrify -profile bin/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
```
