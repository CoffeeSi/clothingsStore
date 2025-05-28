from fastapi import FastAPI

app = FastAPI()


@app.get("/products")
def get_main():
    return {"id":1,"title":"Persian Cat sweatshirt"}, {"id":"2","title":"Minecraft sweatshirt"}