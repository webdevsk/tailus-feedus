"use client"

import { SectionHeading } from "@/components/SectionHeading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { filtersParsers, urlKeys } from "@/lib/filtersCache"
import { getAllCategories } from "@/server/home"
import { useQuery } from "@tanstack/react-query"
import { useQueryStates } from "nuqs"
import { useState } from "react"
export function FiltersComponent() {
  const {
    data: res,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  if (error) console.error("Client side error: ", error)

  const [{ query, category }, setFilters] = useQueryStates(filtersParsers, {
    shallow: false,
    throttleMs: 1000,
  })
  //   The free api does not support multiple filters yet
  //  Ensure only one value is kept
  const [inputs, setInputs] = useState({
    query,
    category: !!query ? "" : category,
  })

  function initiateSearch() {
    setFilters(null)
    setFilters(inputs)
  }

  return (
    <div className="lg:w-1/5">
      <div className="space-y-6">
        <SectionHeading className="text-start lg:text-2xl">
          All Meals
        </SectionHeading>

        <div>
          <label
            htmlFor="search"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Search Products
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            value={inputs.query ?? ""}
            onChange={e => setInputs({ query: e.target.value })}
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          {}
          <Select
            value={inputs.category}
            onValueChange={value => setInputs({ category: value })}
          >
            <SelectTrigger id="category">
              <SelectValue
                placeholder={
                  isLoading
                    ? "Loading Categories..."
                    : error || res.status === "failed"
                      ? "Error loading Categories"
                      : "Select category"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {isLoading || error || res.status === "failed"
                ? null
                : res.data?.map(cat => (
                    <SelectItem
                      key={cat.strCategory}
                      className="capitalize"
                      value={cat.strCategory}
                    >
                      {cat.strCategory}
                    </SelectItem>
                  ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button
            onClick={initiateSearch}
            className="w-full"
            variant="secondary"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}
