from sqlalchemy import String
from sqlalchemy import DECIMAL

from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

class Base(DeclarativeBase):
    pass

class Products(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(30))
    price: Mapped[float] = mapped_column(DECIMAL)
    image: Mapped[str] = mapped_column(String())

    def __repr__(self):
        return f"Products(id={self.id}, title='{self.title}', price={self.price}, image='{self.image}')"