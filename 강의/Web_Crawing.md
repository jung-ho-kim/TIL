# Web_Crawing

```python
from GoogleImageScrapper import GoogleImageScraper

import os
import time

sleep_between_interactions = 1
webdriver_path = os.getcwd()+".\\webdriver\\chromedriver.exe"

image_path = os.getcwd()+".\\images"

#image_path = os.getcwd()+"\\photos"
#add new search key into array ["cat","t-shirt","apple","orange","pear","fish"]
#search_keys= ["woodpecker","owl"]
search_keys= ["camel"]
number_of_images = 10
headless = True
#min_resolution = (width,height)
min_resolution=(0,0)
#max_resolution = (width,height)
max_resolution=(2000,2000)
for search_key in search_keys:
    image_scrapper = GoogleImageScraper(webdriver_path,image_path,search_key,number_of_images,headless,min_resolution,max_resolution)
    image_urls = image_scrapper.find_image_urls()
    image_scrapper.save_images(image_urls)
    time.sleep(sleep_between_interactions)
```

GoogleImageScrapper 파일과 webdriver.exe.가 있어야한다.



naver-bs4.ipynb



https://krksap.tistory.com/1580