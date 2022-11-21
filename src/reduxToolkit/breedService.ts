import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const breedsService = createApi({
  reducerPath: "breeds",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dog.ceo/api/",
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: () => ({
        url: "breeds/list/all",
        method: "GET",
      }),
    }),
    getSubBreeds: builder.mutation({
        query: (breed) => 
        ({
          url: `breed/${breed}/list`,
          method: "GET",
        }),
      }),
      getBreedsImages: builder.mutation({
        query: (breedCount) => ({
          url: `breeds/image/random/${breedCount}`,
          method: "GET",
        }),
      }),
  }),
});
export const {
  useGetBreedsQuery,
  useGetSubBreedsMutation,
  useGetBreedsImagesMutation
//   useAddSkillMutation,
//   useDeleteSkillMutation,
//   useUpdateSkillMutation,
} = breedsService;
