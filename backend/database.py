from sqlalchemy import create_engine
from sqlalchemy import select

from sqlalchemy.orm import Session
from models.products import Products, Base

engine = create_engine('postgresql+psycopg2://postgres:admin@localhost:5432/store', echo=True)


# Base.metadata.create_all(engine)

session = Session(engine)

# with Session(engine) as session:
#     first = Products(
#         title = "Persian Cat sweatshirt",
#         price = 29.99,
#         image = "sweatshirt2.jpg"
#     )
    
#     session.add(first)
#     session.commit()

class ProductsCrudManager:
    def __init__(self): pass

    def get_products(self):
        stmt = select(Products)
        result = session.execute(stmt)
        products = result.all()
        return products
    
ll = ProductsCrudManager()

for g in ll.get_products():
    print(g)
