// schema.ts
import { serial, text, timestamp, integer, pgTable, unique, varchar, numeric } from "drizzle-orm/pg-core"

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
    idMeal: text("meal_id").notNull(), // idMeal from your schema
    strMeal: text("meal_name").notNull(), // strMeal
    strMealThumb: text("meal_thumb").notNull(), // strMealThumb
    intQuantity: integer("quantity").notNull().default(1),
    dateCreatedAt: timestamp("created_at").defaultNow(),
    floatPrice: numeric("price").notNull().$defaultFn(() => (Math.random() * 1000 + 99).toFixed(2))
}, (table) => {
    return {
        // Ensure unique product per user cart
        userProductUnique: unique().on(table.userId, table.idMeal),
    }
})
