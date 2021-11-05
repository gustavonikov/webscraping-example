from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import chromedriver_binary

# Declare your browser instance, can be many others like FireFox, Edge, etc.
driver = webdriver.Chrome()

# We access a website using this method 'get'.
driver.get('https://webscraper.io/test-sites')

# Creating an waiting instance, that will wait for 5 seconds.
wait = WebDriverWait(driver, 5)

# Here is our first element to find in the page, we're using css selector, but could be by id, class or something else.
try:
    simple_ecommerce_site = driver.find_element(By.CSS_SELECTOR, 'a[href="/test-sites/e-commerce/allinone"]')
    simple_ecommerce_site.click()
except:
    print('Something went wrong! The e-commerce website was not found.')

try:
    computers_section = driver.find_element(By.CSS_SELECTOR, 'a[href="/test-sites/e-commerce/allinone/computers"]')
    computers_section.click()
except:
    print('Something went wrong! The computer section was not found.')

# Here I bring our first use of wait, it can be very useful for elements that takes too long to load, or other action that we
# want to do with it. In this case i want to click the element, so I'll wait until it can be clickable.
laptops_section = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'a[href="/test-sites/e-commerce/allinone/computers/laptops"]')))
laptops_section.click()

# Its not make sense put this here, but I want to bring it, just to show that we can delay the execution
# of our next line as well.
driver.set_script_timeout(1)

# In this case we want to check only of if the element its present and visible on the page.
laptop = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, 'a[title="Asus VivoBook X441NA-GA190"]')))

try:
    laptop_parent_el = laptop.get_property('parentElement')
    laptop_price_el = laptop_parent_el.get_property('previousElementSibling')
    laptop_price_text = laptop_price_el.get_property('innerText')

    print(f'The price of laptop Asus VivoBook X441NA-GA190 is {laptop_price_text}')
except:
    print('Something went wrong! The computer section was not found.')

driver.set_script_timeout(2)

driver.quit()
