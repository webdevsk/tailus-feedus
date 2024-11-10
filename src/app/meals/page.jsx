import React from "react"

export default async function ProductsListPage({ searchParams }) {
  return (
    <div className="lg:w-3/4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* {filteredProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <CardTitle>{product.name}</CardTitle>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))} */}
      </div>

      {/* {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found.</p>
          )} */}
    </div>
  )
}
