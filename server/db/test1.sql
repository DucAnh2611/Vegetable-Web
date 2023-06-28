CREATE TABLE [Users] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [username] nvarchar(255) NOT NULL, 
  [password] nvarchar(255) NOT NULL, 
  [fullname] nvarchar(255) NOT NULL, 
  [birthday] date NOT NULL, 
  [email] nvarchar(255) NOT NULL, 
  [phoneNum] nvarchar(255) NOT NULL, 
  [address] nvarchar(255) NOT NULL, 
  [avatar] blob NOT NULL, 
  [typeUserId] integer NOT NULL
)
GO

CREATE TABLE [TypeUser] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [type] nvarchar(255) NOT NULL
)
GO
INSERT INTO TypeUser (type) VALUES ('admin') ,  ('client')
GO

CREATE TABLE [Method_User] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [methodTypeId] nvarchar(255) NOT NULL, 
  [description] nvarchar(255), 
  [UserId] integer NOT NULL
)
GO

CREATE TABLE [MethodType] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [type] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Product] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [PdName] nvarchar(255) NOT NULL, 
  [price] float NOT NULL, 
  [image] blob NOT NULL,
  [description] nvarchar(255), 
  [modifyDate] datetime NOT NULL, 
  [quantity] integer NOT NULL
)
GO

CREATE TABLE [TypeProduct_Product] (
  [TypeId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  PRIMARY KEY ([TypeId],  [PdId])
)
GO

CREATE TABLE [TypeProduct] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [type] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Order] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [UserId] integer NOT NULL, 
  [OrderAdress] nvarchar(255) NOT NULL, 
  [OrderDate] datetime NOT NULL, 
  [OrderFullname] nvarchar(255) NOT NULL, 
  [OrderEmail] nvarchar(255) NOT NULL, 
  [OrderPhoneNum] nvarchar(255) NOT NULL, 
  [OrderDescription] nvarchar(255), 
  [OrderStateId] integer NOT NULL, 
  [MethodId] integer NOT NULL
)
GO

CREATE TABLE [OrderState] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [state] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Orders_Product] (
  [PdId] integer NOT NULL, 
  [OrderId] integer NOT NULL, 
  [quantity] integer NOT NULL, 
  PRIMARY KEY ([PdId],  [OrderId])
)
GO

CREATE TABLE [Review] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [PdId] integer NOT NULL, 
  [UserId] integer NOT NULL, 
  [title] nvarchar(255) NOT NULL, 
  [description] nvarchar(255), 
  [rating] integer NOT NULL
)
GO

CREATE TABLE [WishList] (
  [UserId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  PRIMARY KEY ([UserId],  [PdId])
)
GO

CREATE TABLE [Cart] (
  [UserId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  [quantity] integer NOT NULL,
  PRIMARY KEY ([UserId],  [PdId])
)
GO

ALTER TABLE [Users] ADD FOREIGN KEY ([typeUserId]) REFERENCES [TypeUser] ([id])
GO

ALTER TABLE [Method_User] ADD FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
GO
ALTER TABLE [Method_User] ADD FOREIGN KEY ([methodTypeId]) REFERENCES [MethodType] ([id])
GO

ALTER TABLE [Order] ADD FOREIGN KEY ([MethodId]) REFERENCES [Method_User] ([id])
GO
ALTER TABLE [Order] ADD FOREIGN KEY ([OrderStateId]) REFERENCES [OrderState] ([id])
GO
ALTER TABLE [Order] ADD FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [TypeProduct_Product] ADD FOREIGN KEY ([TypeId]) REFERENCES [TypeProduct] ([id])
GO
ALTER TABLE [TypeProduct_Product] ADD FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
GO

ALTER TABLE [Orders_Product] ADD FOREIGN KEY ([OrderId]) REFERENCES [Order] ([id])
GO
ALTER TABLE [Orders_Product] ADD FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
GO

ALTER TABLE [Review] ADD FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
GO
ALTER TABLE [Review] ADD FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [WishList] ADD FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
GO
ALTER TABLE [WishList] ADD FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
GO

ALTER TABLE [Cart] ADD FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
GO
ALTER TABLE [Cart] ADD FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
GO

CREATE INDEX idx_users_username ON Users (username)

CREATE INDEX idx_typeuser_type ON TypeUser ([type])

CREATE INDEX idx_method_user_userid ON Method_User (UserId)

CREATE INDEX idx_product_pdname ON Product (PdName)
CREATE INDEX idx_product_price ON Product (price)

CREATE INDEX idx_order_userid ON [Order] (UserId)
CREATE INDEX idx_order_orderdate ON [Order] (OrderDate)

CREATE INDEX idx_orderstate_state ON OrderState ([state])

CREATE INDEX idx_orders_product_pdid ON Orders_Product (PdId)
CREATE INDEX idx_orders_product_orderid ON Orders_Product (OrderId)

CREATE INDEX idx_review_pdid ON Review (PdId)
CREATE INDEX idx_review_userid ON Review (UserId)
CREATE INDEX idx_review_title ON Review (title)
CREATE INDEX idx_review_rating ON Review (rating)

CREATE INDEX idx_wishlist_userid ON WishList (UserId)
CREATE INDEX idx_wishlist_pdid ON WishList (PdId)

CREATE INDEX idx_cart_pdid ON Cart (PdId)
CREATE INDEX idx_cart_userid ON Cart (UserId)

