--
-- File generated with SQLiteStudio v3.4.4 on Wed Jun 28 14:15:41 2023
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Cart
DROP TABLE IF EXISTS Cart;
CREATE TABLE IF NOT EXISTS [Cart] (
  [UserId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  [quantity] integer NOT NULL,
  PRIMARY KEY ([UserId],  [PdId]),

  FOREIGN KEY ([UserId]) REFERENCES [Users] ([id]),
  FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
);

-- Table: Method_User
DROP TABLE IF EXISTS Method_User;
CREATE TABLE IF NOT EXISTS [Method_User] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [methodTypeId] integer NOT NULL, 
  [description] nvarchar(255), 
  [UserId] integer NOT NULL,

  FOREIGN KEY ([UserId]) REFERENCES [Users] ([id]),
  FOREIGN KEY ([methodTypeId]) REFERENCES [MethodType] ([id])
);

-- Table: MethodType
DROP TABLE IF EXISTS MethodType;
CREATE TABLE IF NOT EXISTS [MethodType] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [type] nvarchar(255) NOT NULL
);

-- Table: Order
DROP TABLE IF EXISTS "Order";
CREATE TABLE IF NOT EXISTS [Order] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [UserId] integer NOT NULL, 
  [OrderAdress] nvarchar(255) NOT NULL, 
  [OrderDate] datetime NOT NULL, 
  [OrderFullname] nvarchar(255) NOT NULL, 
  [OrderEmail] nvarchar(255) NOT NULL, 
  [OrderPhoneNum] nvarchar(255) NOT NULL, 
  [OrderDescription] nvarchar(255), 
  [OrderStateId] integer NOT NULL, 
  [MethodId] integer NOT NULL,

  FOREIGN KEY ([MethodId]) REFERENCES [Method_User] ([id]),
  FOREIGN KEY ([OrderStateId]) REFERENCES [OrderState] ([id]),
  FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
);

-- Table: Orders_Product
DROP TABLE IF EXISTS Orders_Product;
CREATE TABLE IF NOT EXISTS [Orders_Product] (
  [PdId] integer NOT NULL, 
  [OrderId] integer NOT NULL, 
  [quantity] integer NOT NULL, 
  PRIMARY KEY ([PdId],  [OrderId]),

  FOREIGN KEY ([OrderId]) REFERENCES [Order] ([id]),
  FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
);

-- Table: OrderState
DROP TABLE IF EXISTS OrderState;
CREATE TABLE IF NOT EXISTS [OrderState] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [state] nvarchar(255) NOT NULL
);

-- Table: Product
DROP TABLE IF EXISTS Product;
CREATE TABLE IF NOT EXISTS [Product] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [PdName] nvarchar(255) NOT NULL, 
  [price] float NOT NULL, 
  [image] blob NOT NULL,
  [unit] nvarchar(255) NOT NULL, 
  [description] nvarchar(255), 
  [modifyDate] datetime NOT NULL, 
  [quantity] integer NOT NULL
);

-- Table: Review
DROP TABLE IF EXISTS Review;
CREATE TABLE IF NOT EXISTS [Review] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [OrderId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  [UserId] integer NOT NULL, 
  [title] nvarchar(255) NOT NULL, 
  [description] nvarchar(255), 
  [rating] integer NOT NULL,

  FOREIGN KEY ([OrderId]) REFERENCES [Order] ([id]),
  FOREIGN KEY ([PdId]) REFERENCES [Product] ([id]),
  FOREIGN KEY ([UserId]) REFERENCES [Users] ([id])
);

-- Table: TypeProduct
DROP TABLE IF EXISTS TypeProduct;
CREATE TABLE IF NOT EXISTS [TypeProduct] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [type] nvarchar(255) NOT NULL
);

-- Table: TypeProduct_Product
DROP TABLE IF EXISTS TypeProduct_Product;
CREATE TABLE IF NOT EXISTS [TypeProduct_Product] (
  [TypeId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  PRIMARY KEY ([TypeId],  [PdId]),

  FOREIGN KEY ([TypeId]) REFERENCES [TypeProduct] ([id]),
  FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
);

-- Table: TypeUser
DROP TABLE IF EXISTS TypeUser;
CREATE TABLE IF NOT EXISTS [TypeUser] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [type] nvarchar(255) NOT NULL
);

-- Table: Users
DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS [Users] (
  [id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
  [username] nvarchar(255) NOT NULL, 
  [password] nvarchar(255) NOT NULL, 
  [fullname] nvarchar(255) NOT NULL, 
  [birthday] date NOT NULL, 
  [email] nvarchar(255) NOT NULL, 
  [phoneNum] nvarchar(255) NOT NULL, 
  [address] nvarchar(255) NOT NULL, 
  [avatar] blob NOT NULL, 
  [typeUserId] integer NOT NULL,

  FOREIGN KEY ([typeUserId]) REFERENCES [TypeUser] ([id])

);

-- Table: WishList
DROP TABLE IF EXISTS WishList;
CREATE TABLE IF NOT EXISTS [WishList] (
  [UserId] integer NOT NULL, 
  [PdId] integer NOT NULL, 
  PRIMARY KEY ([UserId],  [PdId]),

  FOREIGN KEY ([UserId]) REFERENCES [Users] ([id]),
  FOREIGN KEY ([PdId]) REFERENCES [Product] ([id])
);

-- Index: idx_cart_pdid
DROP INDEX IF EXISTS idx_cart_pdid;
CREATE INDEX IF NOT EXISTS idx_cart_pdid ON Cart (PdId);

-- Index: idx_cart_userid
DROP INDEX IF EXISTS idx_cart_userid;
CREATE INDEX IF NOT EXISTS idx_cart_userid ON Cart (UserId);

-- Index: idx_method_user_userid
DROP INDEX IF EXISTS idx_method_user_userid;
CREATE INDEX IF NOT EXISTS idx_method_user_userid ON Method_User (UserId);

-- Index: idx_order_orderdate
DROP INDEX IF EXISTS idx_order_orderdate;
CREATE INDEX IF NOT EXISTS idx_order_orderdate ON [Order] (OrderDate);

-- Index: idx_order_userid
DROP INDEX IF EXISTS idx_order_userid;
CREATE INDEX IF NOT EXISTS idx_order_userid ON [Order] (UserId);

-- Index: idx_orders_product_orderid
DROP INDEX IF EXISTS idx_orders_product_orderid;
CREATE INDEX IF NOT EXISTS idx_orders_product_orderid ON Orders_Product (OrderId);

-- Index: idx_orders_product_pdid
DROP INDEX IF EXISTS idx_orders_product_pdid;
CREATE INDEX IF NOT EXISTS idx_orders_product_pdid ON Orders_Product (PdId);

-- Index: idx_orderstate_state
DROP INDEX IF EXISTS idx_orderstate_state;
CREATE INDEX IF NOT EXISTS idx_orderstate_state ON OrderState ([state]);

-- Index: idx_product_pdname
DROP INDEX IF EXISTS idx_product_pdname;
CREATE INDEX IF NOT EXISTS idx_product_pdname ON Product (PdName);

-- Index: idx_product_price
DROP INDEX IF EXISTS idx_product_price;
CREATE INDEX IF NOT EXISTS idx_product_price ON Product (price);

-- Index: idx_review_pdid
DROP INDEX IF EXISTS idx_review_pdid;
CREATE INDEX IF NOT EXISTS idx_review_pdid ON Review (PdId);

-- Index: idx_review_rating
DROP INDEX IF EXISTS idx_review_rating;
CREATE INDEX IF NOT EXISTS idx_review_rating ON Review (rating);

-- Index: idx_review_title
DROP INDEX IF EXISTS idx_review_title;
CREATE INDEX IF NOT EXISTS idx_review_title ON Review (title);

-- Index: idx_review_userid
DROP INDEX IF EXISTS idx_review_userid;
CREATE INDEX IF NOT EXISTS idx_review_userid ON Review (UserId);

-- Index: idx_typeuser_type
DROP INDEX IF EXISTS idx_typeuser_type;
CREATE INDEX IF NOT EXISTS idx_typeuser_type ON TypeUser ([type]);

-- Index: idx_users_username
DROP INDEX IF EXISTS idx_users_username;
CREATE INDEX IF NOT EXISTS idx_users_username ON Users (username);

-- Index: idx_wishlist_pdid
DROP INDEX IF EXISTS idx_wishlist_pdid;
CREATE INDEX IF NOT EXISTS idx_wishlist_pdid ON WishList (PdId);

-- Index: idx_wishlist_userid
DROP INDEX IF EXISTS idx_wishlist_userid;
CREATE INDEX IF NOT EXISTS idx_wishlist_userid ON WishList (UserId);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
