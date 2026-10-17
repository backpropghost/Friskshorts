# Renders tools/og/og.html to img/og.png. Run from site/: uvx --with playwright==1.64.0 python tools/og/render.py
import asyncio, pathlib
from playwright.async_api import async_playwright
here = pathlib.Path(__file__).resolve().parent
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        await pg.goto((here / "og.html").as_uri()); await pg.wait_for_timeout(500)
        await pg.screenshot(path=str(here.parent.parent / "img" / "og-raw.png")); await b.close()
asyncio.run(main())
