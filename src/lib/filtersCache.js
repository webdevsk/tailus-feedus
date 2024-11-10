import {
    createSearchParamsCache, parseAsString
} from 'nuqs/server'
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const filtersParsers = {
    // List your search param keys and associated parsers here:
    query: parseAsString.withDefault(''),
    category: parseAsString.withDefault('')
}

export const filtersCache = createSearchParamsCache(filtersParsers)