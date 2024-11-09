// schema.ts
import { serial, text, timestamp, integer, pgTable, unique, varchar } from "drizzle-orm/pg-core"

// Users table
export const users = pgTable("users", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    clerkId: text("clerk_id").notNull().unique(),
    email: text("email").notNull(),
    firstName: varchar("first_name"),
    lastName: varchar("last_name"),
    createdAt: timestamp("created_at").defaultNow(),
})

// Simplified cart items table with embedded product info
export const cartItems = pgTable("cart_items", {
    id: serial("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    productId: text("product_id").notNull(), // idMeal from your schema
    productName: text("product_name").notNull(), // strMeal
    productThumb: text("product_thumb").notNull(), // strMealThumb
    quantity: integer("quantity").notNull().default(1),
    createdAt: timestamp("created_at").defaultNow(),
}, (table) => {
    return {
        // Ensure unique product per user cart
        userProductUnique: unique().on(table.userId, table.productId),
    }
})
